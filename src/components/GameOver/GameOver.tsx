import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../../context/GameContextProvider";
import Scoreboard from "../Scoreboard/Scoreboard";
import "./GameOverStyle.scss";

interface Props {
  winner: string | undefined;
}
const GameOver: FC<Props> = ({ winner }) => {
  const { game, setGame } = useContext(GameContext);

  return (
    <section className="gameOver_container">
      <div className="gameOver">
        <div className="my-50">
          <h2>{game ? game.gameName : "error"}</h2>
          {winner === "draw" ? (
            <h1>The match was a draw!</h1>
          ) : (
            <h1>{winner} won the game!</h1>
          )}

          <Scoreboard winner={winner} />
        </div>
        <div className="flex_space my-50">
          <Link
            to="/newgame"
            className="btn blue flex_center"
            onClick={() => {
              setGame(undefined);
            }}
          >
            <p className="mx-10">Start a game</p>
          </Link>
          <Link
            to="/games"
            className="btn light flex_center"
            onClick={() => {
              setGame(undefined);
            }}
          >
            <p className="mx-10">Join a game</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GameOver;
