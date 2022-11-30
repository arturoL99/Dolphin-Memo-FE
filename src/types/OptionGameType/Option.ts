import DifficultyGame from "../DifficultyGameEnum/DifficultyGame";

export type Mode = {
  valueForm: string | DifficultyGame;
  valueDisplayed: string;
};

type Option = {
  title: string;
  listMode: Mode[];
  name: string;
};

export default Option;
