import { FC, useContext } from "react";
import { GameContext } from "../../context/GameContextProvider";

interface Props {
  avatar: string | undefined;
  img: string | undefined;
  selected: string;
  setSelected: any;
}

const Avatar: FC<Props> = ({ avatar, img, selected, setSelected }) => {
  const { setNewGame } = useContext(GameContext);
  const isRadioSelected = (value: string | undefined): boolean =>
    selected === value;
  const handleRadioClick = (event: any): void => {
    setNewGame(event);
    setSelected(event.currentTarget.value);
  };
  return (
    <label htmlFor={avatar}>
      <input
        type="radio"
        name="avatar"
        value={avatar}
        id={avatar}
        checked={isRadioSelected(avatar)}
        onChange={handleRadioClick}
      />
      <img
        src={img}
        className={
          selected === avatar
            ? "mxr-50 icon_medium selected"
            : "mxr-50 icon_medium"
        }
        alt={avatar}
      />
    </label>
  );
};

export default Avatar;
