import { FormEvent, useEffect } from "react";
import { Socket } from "socket.io-client";
import GameClient from "../clients/GameClient/GameClient";
import ListCards from "../pages/MemoryPage/ListCards";
import ContentUpdateUser from "../types/ContentUpdateUser/ContetUpdateUser";
import DifficultyGame from "../types/DifficultyGameEnum/DifficultyGame";
import { Game } from "../types/GameType/GameType";

export const useNewGame = () => {
  const handleGame = (
    setGame: (value: React.SetStateAction<Game | undefined>) => void
  ) => {
    useEffect(() => {
      setGame({
        gameId: "",
        gameName: "",
        difficulty: String(DifficultyGame.EASY),
        gameMode: "private",
        avatar: "lion",
        gameImg: "brainBg",
        deck: { listCard: [] },
        listCard: ListCards,
        nPartecipants: "2",
        listGamers: [],
        gameStarted: false,
      });
    }, []);
  };

  const handleUsers = (
    setGame: (value: React.SetStateAction<Game | undefined>) => void,
    socket: Socket
  ) => {
    useEffect(() => {
      socket.on("updated-users", (updatedGame: Game) => {
        setGame(updatedGame);
      });
    }, []);
  };

  return { handleGame, handleUsers };
};

export const handleClick = (
  game: Game | undefined,
  setGame: (value: React.SetStateAction<Game | undefined>) => void,
  setShowInvitationPage: (value: React.SetStateAction<boolean>) => void,
  gameClient: GameClient,
  socket: Socket
) => {
  if (game && game?.gameName !== "") {
    gameClient.addGame(game).then((res) => {
      const userId: string | null = localStorage.getItem("userId");
      const contentUpdateUser: ContentUpdateUser = {
        game: res,
        userId: userId || socket.id,
      };
      setGame(res);
      if (userId) {
        socket.emit("re-connection-user", contentUpdateUser);
      } else {
        socket.emit("new-user", contentUpdateUser);
        localStorage.setItem("userId", contentUpdateUser.userId);
      }
    });
    setShowInvitationPage(true);
  } else {
    alert("Name field is empty");
  }
};
