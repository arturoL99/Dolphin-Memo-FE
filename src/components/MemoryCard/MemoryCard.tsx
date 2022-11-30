import { FC } from "react";
import rectangle from "../../images/Rectangle 3.svg";
import Card from "../../types/CardType/CardType";
import "./MemoryCard.scss";

export type PropsCard = {
  id: Card["id"];
  name: Card["name"];
  img: Card["img"];
  turned: Card["turned"];
  insertCard: (id: string) => void;
  gameReady: boolean;
  isPlayerTurn: boolean;
};

const MemoryCard: FC<PropsCard> = ({
  id,
  name,
  img,
  turned,
  insertCard,
  gameReady,
  isPlayerTurn,
}) => {
  const turn = (idCard: string) => {
    insertCard(idCard);
  };

  return (
    <div className={`card ${turned ? "rotated" : ""}`} id={id}>
      <div
        className="front"
        onClick={
          gameReady && isPlayerTurn
            ? () => turn(id)
            : () =>
                console.log(
                  "something went wrong: gameReady: " +
                    gameReady +
                    " turn: " +
                    isPlayerTurn
                )
        }
      >
        <img src={rectangle} alt="Img front not found" />
      </div>
      <div className="back">
        <img src={img} alt="Img back not found" />
      </div>
    </div>
  );
};

export default MemoryCard;
