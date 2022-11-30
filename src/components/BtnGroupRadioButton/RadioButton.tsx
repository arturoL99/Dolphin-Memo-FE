import { FC, useContext } from "react";
import { GameContext } from "../../context/GameContextProvider";
import Option, { Mode } from "../../types/OptionGameType/Option";

type PropsMode = {
  valueOption: Mode;
  groupName: Option["name"];
  chosenValue: string | undefined;
  setChosenValue: (v: string) => void;
};

const RadioButton: FC<PropsMode> = ({
  valueOption,
  groupName,
  chosenValue,
  setChosenValue,
}) => {
  const { setNewGame } = useContext(GameContext);
  const handleRadioClick = (event: any): void => {
    setNewGame(event);
    setChosenValue(valueOption.valueDisplayed);
  };

  return (
    <label
      htmlFor={valueOption.valueDisplayed}
      className={valueOption.valueDisplayed === chosenValue ? "btn-on" : ""}
    >
      <input
        type="radio"
        value={String(valueOption.valueForm)}
        id={valueOption.valueDisplayed}
        name={groupName}
        checked={valueOption.valueDisplayed === chosenValue}
        onChange={handleRadioClick}
      />
      <span>{valueOption.valueDisplayed}</span>
    </label>
  );
};

export default RadioButton;
