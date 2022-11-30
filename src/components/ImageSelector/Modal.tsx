import { FC } from "react";
import lionBg from "../../images/lion-bg.webp";
import dolphinBg from "../../images/dolphin-bg.png";
import einsteinBg from "../../images/einstein-bg.jpg";
import brainBg from "../../images/brain-bg.jpg";
import ModalImage from "../ModalImage/ModalImage";
import Button from "../Button/Button";

interface Prop {
  selected: string;
  setSelected: (v: string) => void;
  setNewGame: (e: any) => void;
  handleClick: any;
}

const Modal: FC<Prop> = ({
  selected,
  setSelected,
  setNewGame,
  handleClick,
}) => {
  const imgs = [
    { name: "lionBg", img: lionBg },
    { name: "dolphinBg", img: dolphinBg },
    { name: "einsteinBg", img: einsteinBg },
    { name: "brainBg", img: brainBg },
  ];
  return (
    <section className="modal_container">
      <div className="modal">
        <h1 className="my-20">Choose an image:</h1>
        <div className="img_container">
          {imgs.map((img) => {
            return (
              <ModalImage
                name={img.name}
                img={img.img}
                selected={selected}
                setSelected={setSelected}
                setNewGame={setNewGame}
                key={img.name}
              />
            );
          })}
        </div>

        <Button
          className="btn my-20"
          color="blue"
          content="Close"
          click={handleClick}
        />
      </div>
    </section>
  );
};

export default Modal;
