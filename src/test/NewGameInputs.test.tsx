import { render, screen } from "@testing-library/react";
import NewGameInputs from "../components/NewGameInputs/NewGameInputs";

describe("New Game inpu component tests", () => {
  test("Renders correctly", () => {
    render(<NewGameInputs />);
    const name = screen.getByText("Name your game");
    expect(name).toBeInTheDocument;
    const input = document.querySelectorAll("input");
    expect(input).toHaveLength(2);
    expect(input[0].placeholder).toBe("Game name");
  });
});
