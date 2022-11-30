import Card from "../CardType/CardType";
import Deck from "../DeckType/DeckType";
import { Gamer } from "../GamerType/GamerType";

export type Game = {
  gameId: string;
  gameName: string;
  difficulty: string;
  gameMode: string;
  avatar: string;
  gameImg: string;
  deck: Deck;
  nPartecipants: string;
  listGamers?: Gamer[];
  listCard?: Card[];
  gameStarted?: Boolean;
};
