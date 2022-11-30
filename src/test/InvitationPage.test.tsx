import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import InvitationPage from "../components/InvitationPage/InvitationPage";
import { Game } from "../types/GameType/GameType";

describe("Invitation page tests", () => {
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
  test("Renders correctly", () => {
    render(
      <BrowserRouter>
        <InvitationPage playerNum={3} />
      </BrowserRouter>
    );
    const input = document.querySelectorAll("input");
    expect(input).toHaveLength(3);
    expect(input[2].placeholder).toBe("email or phone number");
  });
});

export {};
