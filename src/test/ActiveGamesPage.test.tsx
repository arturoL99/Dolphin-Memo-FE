import { render, waitFor } from "@testing-library/react";
import GameClient from "../clients/GameClient/GameClient";
import ActiveGamesPage from "../pages/ActiveGamesPage/ActiveGamesPage";
import ListCards from "../pages/MemoryPage/ListCards";

jest.mock("../clients/GameClient/GameClient");

describe("Active games page", () => {
  it("should render page when api responds", async () => {
    const mockGetPublicGames = jest.fn();
    GameClient.prototype.getPublicGames = mockGetPublicGames;
    mockGetPublicGames.mockResolvedValue([
      {
        gameId: "test",
        gameName: "test",
        difficulty: "EASY",
        gameMode: "private",
        avatar: "lion",
        gameImg: "brainBg",
        deck: { listCard: [] },
        listCard: ListCards,
        nPartecipants: "2",
        listGamers: [],
      },
    ]);
    render(<ActiveGamesPage />);
    await waitFor(() => expect(mockGetPublicGames).toHaveBeenCalledTimes(1));
  });
});
