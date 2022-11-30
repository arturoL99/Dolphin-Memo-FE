import { useContext, useState } from "react";
import GameClient from "../../clients/GameClient/GameClient";
import AvatarSlider from "../../components/AvatarSlider/AvatarSlider";
import Button from "../../components/Button/Button";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import InvitationPage from "../../components/InvitationPage/InvitationPage";
import NewGameInputs from "../../components/NewGameInputs/NewGameInputs";
import { GameContext } from "../../context/GameContextProvider";
import { SocketContext } from "../../context/Socket";
import Difficulty from "../../types/OptionGameType/ObjectOptionGame/Difficulty";
import GameMode from "../../types/OptionGameType/ObjectOptionGame/GameMode";
import Participants from "../../types/OptionGameType/ObjectOptionGame/Participants";
import { handleClick, useNewGame } from "../../utils/NewGameUtils";
import "./NewGamePageStyle.scss";

const NewGamePage = () => {
  const socket = useContext(SocketContext);
  const { game, setGame } = useContext(GameContext);
  const gameClient = new GameClient();
  const [showInvitationPage, setShowInvitationPage] = useState(false);

  const { handleGame, handleUsers } = useNewGame();

  handleGame(setGame);
  handleUsers(setGame, socket);
  const clicca = () =>
    handleClick(game, setGame, setShowInvitationPage, gameClient, socket);

  return (
    <form>
      <h1 className="my-50">New game</h1>
      <ButtonGroup
        title={Participants.title}
        listMode={Participants.listMode}
        name={Participants.name}
      />
      <ButtonGroup
        title={GameMode.title}
        listMode={GameMode.listMode}
        name={GameMode.name}
      />
      <ButtonGroup
        title={Difficulty.title}
        listMode={Difficulty.listMode}
        name={Difficulty.name}
      />
      <AvatarSlider />
      <NewGameInputs />
      <div className="my-50">
        <Button
          className="btn big"
          color="blue"
          click={clicca}
          content="Start"
        />
      </div>

      {showInvitationPage ? (
        <InvitationPage playerNum={game ? Number(game.nPartecipants) - 1 : 0} />
      ) : null}
    </form>
  );
};

export default NewGamePage;
