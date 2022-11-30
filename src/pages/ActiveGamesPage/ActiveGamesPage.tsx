import { useState, useEffect } from "react";
import GameClient from "../../clients/GameClient/GameClient";
import GameCard from "../../components/GameCard/GameCard";
import Loading from "../../components/Loading/Loading";
import { Game } from "../../types/GameType/GameType";

const ActiveGamesPage = () => {
  const gameClient = new GameClient();
  const [gameList, setGameList] = useState<Game[]>([]);

  useEffect(() => {
    gameClient.getPublicGames().then((res) => setGameList(res));
  }, []);

  const day = new Date().getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    new Date()
  );
  const date = day + " " + month;

  if (gameList) {
    return (
      <section>
        <h1 className="my-50">Active games</h1>
        <div>
          {gameList.map((game) => (
            <GameCard game={game} date={date} key={game.gameId} />
          ))}
        </div>
      </section>
    );
  }
  return <Loading />;
};

export default ActiveGamesPage;
