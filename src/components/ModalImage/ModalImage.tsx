import { FC } from "react";

interface Props {
  name: string;
  img: any;
  selected: string;
  setSelected: any;
  setNewGame: (e: any) => void;
}

const ModalImage: FC<Props> = ({
  name,
  img,
  selected,
  setSelected,
  setNewGame,
}) => {
  const isRadioSelected = (value: string | undefined): boolean =>
    selected === value;
  const handleRadioClick = (e: any): void => {
    setNewGame(e);
    setSelected(e.currentTarget.value);
  };
  return (
    <label htmlFor={name}>
      <input
        type="radio"
        name="gameImg"
        value={name}
        id={name}
        checked={isRadioSelected(name)}
        onChange={handleRadioClick}
      />
      <img
        src={img}
        className={
          selected === name
            ? "img_wide my-20 border_blue"
            : "img_wide my-20 border_black"
        }
        alt={name}
      />
    </label>
  );
};

export default ModalImage;
