import dog from "../images/dog.svg";
import dolphin from "../images/dolphin.svg";
import hat from "../images/hat.svg";
import lion from "../images/lion.svg";
import archery from "../images/archery.svg";
import fox from "../images/fox.svg";
import panda from "../images/panda.svg";
import koala from "../images/koala.svg";
import mouse from "../images/mouse.svg";
import bear from "../images/bear.svg";
import cat from "../images/cat.svg";
import elk from "../images/elk.svg";

export type CardImage = {
  id: string;
  src: string;
};

const listImg = [
  dog,
  dolphin,
  hat,
  lion,
  archery,
  fox,
  panda,
  koala,
  mouse,
  bear,
  cat,
  elk,
];

const listCardImage: CardImage[] = listImg.map((img, index) => ({
  id: String(index),
  src: img,
}));

export default listCardImage;
