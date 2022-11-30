import { FC, useState } from "react";
import Option, { Mode } from "../../types/OptionGameType/Option";
import RadioButton from "../BtnGroupRadioButton/RadioButton";
import "./ButtonGroup.scss";

type PropsOption = {
  title: Option["title"];
  listMode: Option["listMode"];
  name: Option["name"];
};

const ButtonGroup: FC<PropsOption> = ({ title, listMode, name }) => {
  const [chosenValue, setChosenValue] = useState(
    listMode.at(0)?.valueDisplayed
  );

  return (
    <section className="my-50">
      <label htmlFor={title}>
        <h2 className="my-10">{title}</h2>
      </label>
      <div className="btn-group" id={title}>
        {listMode.map((valueOption: Mode) => {
          return (
            <RadioButton
              valueOption={valueOption}
              groupName={name}
              chosenValue={chosenValue}
              setChosenValue={setChosenValue}
              key={valueOption.valueDisplayed}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ButtonGroup;
