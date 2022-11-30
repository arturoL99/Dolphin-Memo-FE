import { useCallback, useEffect } from "react";
import GameClient from "../clients/GameClient/GameClient";
import { socket } from "../context/Socket";
import ContentUpdateDeck from "../types/ContentUpdateDeck/ContentUpdateDeck";
import ContentUpdateUser from "../types/ContentUpdateUser/ContetUpdateUser";
import { Gamer } from "../types/GamerType/GamerType";
import { Game } from "../types/GameType/GameType";

export const useMemory = (userId: string | undefined) => {
  const returnCard = useCallback(
    (
      content: ContentUpdateDeck,
      setGame: (value: React.SetStateAction<Game | undefined>) => void
    ) => {
      setGame(content.game);
      if (content.coupleCards?.firstCard && content.coupleCards?.secondCard) {
        socket.emit("get-gamer-action", content);
      }
    },
    []
  );

  const afterAction = useCallback(
    (
      contentUpdate: ContentUpdateDeck,
      setGame: (value: React.SetStateAction<Game | undefined>) => void,
      setIsPlayerTurn: (value: React.SetStateAction<boolean>) => void,
      setUser: (value: React.SetStateAction<Gamer | undefined>) => void,
      setWinner: (value: React.SetStateAction<string | undefined>) => void
    ) => {
      setTimeout(() => {
        console.log("AFTER ACTION: ", contentUpdate.game);
        setGame(contentUpdate.game);
        if (contentUpdate.game) {
          const activeUser = contentUpdate.game.listGamers?.find(
            (gamer) => gamer.id === userId
          );
          activeUser
            ? setIsPlayerTurn(activeUser?.myTurn)
            : setIsPlayerTurn(false);
          setUser(activeUser);
        }
        if (contentUpdate?.winner) {
          setWinner(contentUpdate.winner);
        }
      }, 800);
    },
    []
  );

  const updateUsers = useCallback(
    (
      updatedGame: Game,
      user: Gamer | undefined,
      setGame: (value: React.SetStateAction<Game | undefined>) => void,
      setIsPlayerTurn: (value: React.SetStateAction<boolean>) => void,
      setGameReady: (value: React.SetStateAction<boolean>) => void
    ) => {
      setGame(updatedGame);
      if (updatedGame) {
        const activeUser = updatedGame.listGamers?.find(
          (gamer) => gamer.id === userId
        );
        activeUser
          ? setIsPlayerTurn(activeUser?.myTurn)
          : setIsPlayerTurn(false);
      }
      if (
        updatedGame &&
        updatedGame?.listGamers?.length ===
          parseInt(updatedGame.nPartecipants, 10)
      ) {
        setGameReady(true);
      }
      setIsPlayerTurn(user?.myTurn || false);
    },
    []
  );

  const handleTurn = (
    setIsPlayerTurn: (value: React.SetStateAction<boolean>) => void,
    user: Gamer | undefined
  ) => {
    useEffect(() => {
      setIsPlayerTurn(user?.myTurn || false);
    }, [user]);
  };

  const getGame = (
    gameId: string | undefined,
    gameClient: GameClient,
    game: Game | undefined,
    setGame: (value: React.SetStateAction<Game | undefined>) => void,
    setUser: (value: React.SetStateAction<Gamer | undefined>) => void
  ) => {
    useEffect(() => {
      if (gameId && userId) {
        gameClient.getGameById(gameId).then((res) => {
          setGame(res);
          setUser(game?.listGamers?.find((gamer) => gamer.id === userId));
        });
      } else console.log("game id not valid");
    }, []);
  };

  const handleReconnection = (game: Game | undefined) => {
    useEffect(() => {
      if (game) {
        const contentUpdateUser: ContentUpdateUser = {
          game,
          userId: userId || "user not found",
        };
        console.log("RE-CONNECTION", contentUpdateUser);
        socket.emit("re-connection-user", contentUpdateUser);
      }
    }, [game?.listGamers?.length]);
  };

  const handleMove = (
    game: Game | undefined,
    setGame: (value: React.SetStateAction<Game | undefined>) => void,
    setIsPlayerTurn: (value: React.SetStateAction<boolean>) => void,
    setUser: (value: React.SetStateAction<Gamer | undefined>) => void,
    setWinner: (value: React.SetStateAction<string | undefined>) => void
  ) => {
    useEffect(() => {
      console.log("UPDATE DECK AFTER CARD", game);
      socket.on("return-pick-card", (content) => returnCard(content, setGame));
      socket.on("after-gamer-action", (content) =>
        afterAction(content, setGame, setIsPlayerTurn, setUser, setWinner)
      );
    }, [returnCard, afterAction]);
  };

  const handleUsers = (
    game: Game | undefined,
    setGame: (value: React.SetStateAction<Game | undefined>) => void,
    user: Gamer | undefined,
    setUser: (value: React.SetStateAction<Gamer | undefined>) => void,
    setIsPlayerTurn: (value: React.SetStateAction<boolean>) => void,
    setGameReady: (value: React.SetStateAction<boolean>) => void
  ) => {
    useEffect(() => {
      console.log("UPDATE USERS", game);
      socket.on("updated-users", (updatedGame) =>
        updateUsers(updatedGame, user, setGame, setIsPlayerTurn, setGameReady)
      );
      if (game) setUser(game.listGamers?.find((gamer) => gamer.id === userId));
    }, [game?.listGamers?.length, updateUsers]);
  };

  const handleGameStarted = (
    gameReady: boolean,
    game: Game | undefined,
    setGame: (value: React.SetStateAction<Game | undefined>) => void
  ) => {
    useEffect(() => {
      gameReady ? socket.emit("game-started", game) : null;
      socket.on("started-true", (update) => setGame(update));
    }, [gameReady]);
  };

  const handleWin = (
    gameId: string | undefined,
    gameClient: GameClient,
    winner: string | undefined
  ) => {
    useEffect(() => {
      if (winner && gameId) gameClient.removeGameById(gameId);
    }, [winner]);
  };

  return {
    handleTurn,
    getGame,
    handleReconnection,
    handleMove,
    handleUsers,
    handleGameStarted,
    handleWin,
  };
};

export const handleQuit = (
  game: Game | undefined,
  userId: string | undefined
): React.MouseEventHandler<HTMLAnchorElement> | undefined => {
  if (game && userId) {
    const contentUpdateUser: ContentUpdateUser = {
      game,
      userId,
    };
    socket.emit("remove-user", contentUpdateUser);
  }
  return undefined;
};
