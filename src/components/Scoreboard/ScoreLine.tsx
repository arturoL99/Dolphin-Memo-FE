import { FC, useContext, useEffect, useState } from "react";
import { GameContext } from "../../context/GameContextProvider";
import { Gamer } from "../../types/GamerType/GamerType";
import "./ScoreStyle.scss";

interface Props {
  img: string;
  avatar: string;
  join: boolean;
  winner: string | undefined;
}

const ScoreLine: FC<Props> = ({ avatar, img, join, winner }) => {
  const { game } = useContext(GameContext);
  const [won, setWon] = useState(false);

  useEffect(() => {
    if (winner === avatar) {
      setWon(true);
    }
  }, []);

  useEffect(() => {
    console.log("Connesso: ", join, " for Avatar: ", avatar);
  }, [join]);

  const activeUser = game?.listGamers?.find(
    (user: Gamer) => user.avatar === avatar
  );
  const score = activeUser?.score;
  return (
    <div
      className={
        won
          ? "scoreline_notActive my-5"
          : activeUser?.myTurn
          ? "scoreline_active my-5"
          : "scoreline_notActive my-5"
      }
    >
      <small className="mx-10">ACTIVE TURN</small>
      <div className={won ? "scoreline_won" : "scoreline"}>
        <div className="user flex mx-10">
          <span className="icon_container">
            <img src={img} alt={`${avatar} avatar`} className="icon" />
          </span>
          <p className="bold mx-10">{avatar}</p>
        </div>
        <div className="score mx-10">
          {join ? (
            <p className="bold">{score} cards collected</p>
          ) : (
            <p className="bold red">Waiting to join</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScoreLine;
