import { FC, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { SocketContext } from "../../context/Socket";
import DifficultyGame from "../../types/DifficultyGameEnum/DifficultyGame";
import { Game } from "../../types/GameType/GameType";
import { AllAvatars, bgImgs } from "../../utils/ImagesUtils";
import calendar from "../../images/calendar.svg";
import account from "../../images/account.svg";
import "./GameCardStyle.scss";
import { sendUser, useGameCard } from "../../utils/GameCardUtils";

interface Props {
  game: Game;
  date: string;
}

const GameCard: FC<Props> = ({ game, date }) => {
  const imgIndex = AllAvatars.findIndex((i) => i.name === game.avatar);
  const bgImgIndex = bgImgs.findIndex((i) => i.name === game.gameImg);
  const freePlaces =
    parseInt(game.nPartecipants, 10) - (game.listGamers?.length || 0);
  const [gameFull, setGameFull] = useState(false);
  const [gameEmpty, setGameEmpty] = useState(false);
  const socket = useContext(SocketContext);
  const userId: string | null = localStorage.getItem("userId");

  const { fillGame } = useGameCard();

  fillGame(freePlaces, game, setGameFull, setGameEmpty);

  const send = () => sendUser(game, userId, socket);

  return (
    <div
      className={
        gameFull || gameEmpty || game.gameStarted ? "d_none" : "game-card"
      }
      style={{
        backgroundImage: `linear-gradient(
      180deg,
      rgba(85, 74, 240, 0.2) 0%,
      #554af0 66.15%
    ), url(${bgImgs.at(bgImgIndex)?.img})`,
      }}
    >
      <div className="card_title m-20">
        <h2>{game.gameName}</h2>
      </div>
      <div className="card_info mx-20">
        <span className="flex">
          <div className="flex">
            <img src={calendar} alt="calendar" className="icon_small" />
            <p className="bold smaller mx-10">{date}</p>
          </div>
          <div className="flex mx-20">
            <img src={account} alt="user" className="icon_small" />
            <p className="bold smaller mx-10">{freePlaces} seats left</p>
          </div>
        </span>
        <p>Difficulty: {DifficultyGame[parseInt(game.difficulty, 10)]}</p>
      </div>
      <div className="card_btn m-20">
        <div className="flex">
          <span className="icon_container">
            <img
              src={AllAvatars.at(imgIndex)?.img}
              alt={`${game.avatar} avatar`}
              className="icon"
            />
          </span>
          <span className="mx-10 line-16">
            <p>{game.avatar}</p>
            <small>Started this game</small>
          </span>
        </div>
        {gameFull ? null : (
          <Link
            to={`/memory/${game.gameId}/${userId || socket.id}`}
            className="btn_card light"
            onClick={send}
          >
            <p className="mx-10">Join this game</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default GameCard;
