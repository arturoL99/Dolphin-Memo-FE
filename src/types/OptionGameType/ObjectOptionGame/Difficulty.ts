import DifficultyGame from "../../DifficultyGameEnum/DifficultyGame";
import Option from "../Option";

const Difficulty: Option = {
  title: "Number of cards (difficulty)",
  listMode: [
    {
      valueForm: DifficultyGame.EASY,
      valueDisplayed: "8 (easy)",
    },
    {
      valueForm: DifficultyGame.MEDIUM,
      valueDisplayed: "16 (medium)",
    },
    {
      valueForm: DifficultyGame.HARD,
      valueDisplayed: "24 (hard)",
    },
  ],
  name: "difficulty",
};

export default Difficulty;
