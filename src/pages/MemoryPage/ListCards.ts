import Card from "../../types/CardType/CardType";
import listCardImage from "../../types/ListCardImage";

const ListCards: Card[] = listCardImage.map((cardImage) => ({
  id: "",
  name: cardImage.id,
  img: cardImage.src,
  turned: false,
}));

export default ListCards;
