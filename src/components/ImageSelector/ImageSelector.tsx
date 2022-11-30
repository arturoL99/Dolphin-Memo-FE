import { FC, useState } from "react";
import Button from "../Button/Button";
import { bgImgs } from "../../utils/ImagesUtils";
import "./ImageSelectorStyle.scss";
import Modal from "./Modal";

type PropsImageSelector = {
  setNewGame: (e: any) => void;
};
const ImageSelector: FC<PropsImageSelector> = ({ setNewGame }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("brainBg");
  const handleClick = () => setOpen(!open);

  return (
    <section>
      <Button
        className="btn"
        color="light"
        content="Browse images..."
        click={handleClick}
      />
      {open ? (
        <Modal
          selected={selected}
          setSelected={setSelected}
          setNewGame={setNewGame}
          handleClick={handleClick}
        />
      ) : null}
    </section>
  );
};

export default ImageSelector;
