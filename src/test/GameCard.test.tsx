import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GameCard from "../components/GameCard/GameCard";

describe("Game card tests", () => {
  test("Renders correctly", () => {
    render(
      <BrowserRouter>
        <GameCard
          game={{
            gameId: "test",
            gameName: "testo",
            avatar: "test",
            difficulty: "4",
            nPartecipants: "2",
            gameImg: "test",
            gameMode: "public",
            deck: { listCard: [] },
            gameStarted: false,
          }}
          date="test"
        />
      </BrowserRouter>
    );
    const title = screen.getByText("testo");
    expect(title).toBeInTheDocument;
  });
});
