import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GameClient from "../../clients/GameClient/GameClient";
import GameCard from "../../components/GameCard/GameCard";
import Loading from "../../components/Loading/Loading";
import { Game } from "../../types/GameType/GameType";

const InvitationMailPage = () => {
  const gameClient = new GameClient();
  const { gameId } = useParams();
  const [game, setGame] = useState<Game>();

  useEffect(() => {
    if (gameId) {
      gameClient.getGameById(gameId).then((res) => {
        setGame(res);
      });
    } else console.log("game id not valid");
  }, []);

  const day = new Date().getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    new Date()
  );
  const date = day + " " + month;

  if (game) {
    return (
      <section>
        <h1 className="my-50">Active games</h1>
        <div>
          <GameCard game={game} date={date} key={game.gameId} />
        </div>
      </section>
    );
  }
  return <Loading />;
};

export default InvitationMailPage;
