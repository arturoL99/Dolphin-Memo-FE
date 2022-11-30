import { FC, useContext, useState, useCallback, useEffect } from "react";
import { GameContext } from "../../context/GameContextProvider";
import { SocketContext } from "../../context/Socket";
import Card from "../../types/CardType/CardType";
import ContentUpdateDeck from "../../types/ContentUpdateDeck/ContentUpdateDeck";
import CoupleCards from "../../types/CoupleCardsType/CoupleCards";
import Deck from "../../types/DeckType/DeckType";
import Loading from "../Loading/Loading";
import MemoryCard from "../MemoryCard/MemoryCard";
import "./MemoryBoard.scss";

export type PropsDeck = {
  gameReady: boolean;
  isPlayerTurn: boolean;
  listCard: Deck["listCard"];
};

const MemoryBoard: FC<PropsDeck> = ({ listCard, gameReady, isPlayerTurn }) => {
  const { game } = useContext(GameContext);
  const socket = useContext(SocketContext);
  const [pickedCard, setPickedCard] = useState<Card>();
  const [coupleCards, setCoupleCards] = useState<CoupleCards>();

  const insertCard = useCallback(
    (id: string) => {
      const card = listCard.find((cardIn: Card) => cardIn.id === id);
      setPickedCard(card);
      if (!coupleCards?.secondCard && coupleCards?.firstCard) {
        setCoupleCards(() => ({
          ...coupleCards,
          secondCard: card,
        }));
      } else {
        setCoupleCards({
          firstCard: card,
          secondCard: undefined,
        });
      }
    },
    [coupleCards]
  );

  useEffect(() => {
    if (game) {
      const content: ContentUpdateDeck = {
        game,
        pickedCard,
        coupleCards,
      };
      socket.emit("pick-a-card", content);
    }
  }, [coupleCards]);

  if (game) {
    return (
      <div className="memory-board">
        {listCard.map((card: Card) => {
          return (
            <MemoryCard
              id={card.id}
              name={card.name}
              img={card.img}
              turned={card.turned}
              insertCard={
                gameReady && isPlayerTurn
                  ? insertCard
                  : () => console.log("game not ready")
              }
              gameReady={gameReady}
              isPlayerTurn={isPlayerTurn}
              key={card.id}
            />
          );
        })}
      </div>
    );
  }
  return <Loading />;
};

export default MemoryBoard;
