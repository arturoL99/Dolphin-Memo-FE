import { createContext, useCallback, useState } from "react";
import { Game } from "../types/GameType/GameType";

interface GameProps {
  game: Game | undefined;
  setGame: React.Dispatch<React.SetStateAction<Game | undefined>>;
  setNewGame: (e: any) => any;
}

const gameInitial: GameProps = {
  game: undefined,
  setGame: () => {},
  setNewGame: () => {},
};

export const GameContext = createContext<GameProps>(gameInitial);

const GameContextProvider = ({ children }: any) => {
  const [game, setGame] = useState<Game | undefined>();

  const setNewGame = useCallback(
    (e: any) => {
      if (game) {
        const newGame: Game = { ...game };
        const propName = e.currentTarget.name as keyof Game;
        newGame[propName] = e.currentTarget.value;
        setGame(newGame);
      }
    },
    [game]
  );

  return (
    <GameContext.Provider value={{ game, setGame, setNewGame }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
