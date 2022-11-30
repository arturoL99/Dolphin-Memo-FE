import Card from "../CardType/CardType";
import CoupleCards from "../CoupleCardsType/CoupleCards";
import { Game } from "../GameType/GameType";

type ContentUpdateDeck = {
  game: Game;
  coupleCards?: CoupleCards;
  pickedCard?: Card;
  winner?: string;
};

export default ContentUpdateDeck;
