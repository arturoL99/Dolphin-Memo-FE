import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GameOver from "../components/GameOver/GameOver";
import { Game } from "../types/GameType/GameType";

describe("Button component tests", () => {
  const game: Game = {
    gameId: "1",
    gameName: "Test",
    avatar: "lion",
    difficulty: "EASY",
    gameImg: "test",
    gameMode: "Public",
    nPartecipants: "3",
    deck: { listCard: [] },
    gameStarted: false,
  };
  test("Renders correctly with winner", () => {
    render(
      <BrowserRouter>
        <GameOver winner="test" />
      </BrowserRouter>
    );
    const winner = document.querySelectorAll("h1");
    expect(winner).toHaveLength(1);
    expect(winner[0].textContent).toBe("test won the game!");
  });
  test("Renders correctly with draw", () => {
    render(
      <BrowserRouter>
        <GameOver winner="draw" />
      </BrowserRouter>
    );
    const winner = document.querySelectorAll("h1");
    expect(winner).toHaveLength(1);
    expect(winner[0].textContent).toBe("The match was a draw!");
  });
});
