import { useEffect } from "react";
import { Socket } from "socket.io-client";
import ContentUpdateUser from "../types/ContentUpdateUser/ContetUpdateUser";
import { Game } from "../types/GameType/GameType";

export const useGameCard = () => {
  const fillGame = (
    freePlaces: number,
    game: Game,
    setGameFull: (value: React.SetStateAction<boolean>) => void,
    setGameEmpty: (value: React.SetStateAction<boolean>) => void
  ) => {
    useEffect(() => {
      if (freePlaces === 0) setGameFull(true);
      else setGameFull(false);
      if (freePlaces === parseInt(game.nPartecipants, 10)) setGameEmpty(true);
      else setGameEmpty(false);
    }, [freePlaces]);
  };

  return {
    fillGame,
  };
};

export const sendUser = (game: Game, userId: string | null, socket: Socket) => {
  const contentUpdateUser: ContentUpdateUser = {
    game,
    userId: userId || socket.id,
  };
  if (userId) {
    socket.emit("re-connection-user", contentUpdateUser);
  } else {
    localStorage.setItem("userId", socket.id);
    socket.emit("new-user", contentUpdateUser);
  }
};
