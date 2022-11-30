import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import GameClient from "../../clients/GameClient/GameClient";
import Button from "../../components/Button/Button";
import GameOver from "../../components/GameOver/GameOver";
import Loading from "../../components/Loading/Loading";
import MemoryBoard from "../../components/MemoryBoard/MemoryBoard";
import Scoreboard from "../../components/Scoreboard/Scoreboard";
import { GameContext } from "../../context/GameContextProvider";
import { SocketContext } from "../../context/Socket";
import { Gamer } from "../../types/GamerType/GamerType";
import { useMemory, handleQuit } from "../../utils/MemoryUtils";

const MemoryPage = () => {
  const socket = useContext(SocketContext);
  const gameClient = new GameClient();
  const { gameId, userId } = useParams();
  const { game, setGame } = useContext(GameContext);
  const [gameReady, setGameReady] = useState(false);
  const [user, setUser] = useState<Gamer>();
  const [isPlayerTurn, setIsPlayerTurn] = useState(user?.myTurn || false);
  const [winner, setWinner] = useState<string>();
  const [index, setIndex] = useState<number>();

  const {
    handleMove,
    handleUsers,
    handleTurn,
    getGame,
    handleReconnection,
    handleWin,
    handleGameStarted,
  } = useMemory(userId);

  getGame(gameId, gameClient, game, setGame, setUser);

  handleReconnection(game);

  handleMove(game, setGame, setIsPlayerTurn, setUser, setWinner);

  handleUsers(game, setGame, user, setUser, setIsPlayerTurn, setGameReady);

  handleWin(gameId, gameClient, winner);

  handleTurn(setIsPlayerTurn, user);

  handleGameStarted(gameReady, game, setGame);

  const quit = () => handleQuit(game, userId);

  if (game) {
    return (
      <div className="memory-page">
        <h1 className="my-50">{game.gameName}</h1>
        <MemoryBoard
          listCard={game?.deck?.listCard || []}
          gameReady={gameReady}
          isPlayerTurn={isPlayerTurn}
        />
        <div className="list-gamers my-30">
          <Scoreboard winner={winner} />
        </div>

        {gameReady ? (
          <Link to="/" onClick={quit} className="memory_btn my-20">
            <p className="smaller">Quit this game</p>
          </Link>
        ) : (
          <Button
            className="memory_btn my-20"
            color="light"
            content="Start anyway with active participants"
            click={() => setGameReady(true)}
          />
        )}
        {winner ? <GameOver winner={winner} /> : null}
      </div>
    );
  }
  return <Loading />;
};

export default MemoryPage;
