import { FC, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../../context/GameContextProvider";
import { SocketContext } from "../../context/Socket";
import { checkMails } from "../../utils/EmailUtils";
import { freeAvatars } from "../../utils/ImagesUtils";
import InvitationInput from "../InvitationInput/InvintationInput";
import "./InvitationPageStyle.scss";

interface Props {
  playerNum: number;
}

const InvitationPage: FC<Props> = ({ playerNum }) => {
  const socket = useContext(SocketContext);
  const { game, setGame } = useContext(GameContext);
  const [images, setImages] = useState(
    freeAvatars(game ? game.avatar : "not found")
  );
  const [email1, setEmail1] = useState<string>("");
  const [email2, setEmail2] = useState<string>("");
  const [email3, setEmail3] = useState<string>("");
  const emails = [email1, email2, email3];
  const setEmails = [setEmail1, setEmail2, setEmail3];
  const gameStatus = game?.gameMode || "private";

  const handleMails = () => {
    socket.emit("invitation-mails", emails, game ? game.gameId : "not found");
    setEmail1("");
    setEmail2("");
    setEmail3("");
    setGame(undefined);
  };

  const handleClick = (e: any) => {
    const mailok = checkMails(emails, playerNum);
    if (gameStatus === "private") {
      if (mailok) {
        handleMails();
      } else {
        e.preventDefault();
        alert("Please enter valid email.");
      }
    } else {
      handleMails;
    }
  };

  return (
    <section>
      <div className="invitations">
        <div>
          <h1 className="my-20">Send Invitations</h1>
          {[...Array(playerNum)].map((i, index) => {
            return (
              <InvitationInput
                id={index + 1}
                src={images.at(index)?.img || "not found"}
                setEmail={setEmails.at(index) || setEmail1}
                key={images.at(index)?.name}
              />
            );
          })}
        </div>
        <Link
          to={`/memory/${game?.gameId || "not found"}/${
            game?.listGamers?.at(0)?.id
          }`}
          className="btn big blue my-20 flex_center"
          onClick={handleClick}
        >
          <p className="mx-10">Send Invitations</p>
        </Link>
      </div>
    </section>
  );
};

export default InvitationPage;
