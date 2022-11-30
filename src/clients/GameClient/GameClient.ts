import { Game } from "../../types/GameType/GameType";

export default class GameClient {
  baseUrl = `${process.env.REACT_APP_API_BASE_URL}`;

  gamesUrl = `${process.env.REACT_APP_API_GAMES_URL}`;

  publicUrl = `${process.env.REACT_APP_API_PUBLIC_GAMES_URL}`;

  async getGames(): Promise<Game[]> {
    const gamesResponse = await fetch(this.gamesUrl);
    const games = gamesResponse.json();
    return games;
  }

  async getPublicGames(): Promise<Game[]> {
    const gamesResponse = await fetch(this.publicUrl);
    const games = gamesResponse.json();
    return games;
  }

  async getGameById(id: string): Promise<Game> {
    const gamesResponse = await fetch(`${this.gamesUrl}/${id}`);
    const game = gamesResponse.json();
    return game;
  }

  async addGame(game: Game): Promise<Game> {
    const gamesResponse = await fetch(this.gamesUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(game),
    });
    const newGame = gamesResponse.json();
    return newGame;
  }

  async removeGameById(id: string): Promise<void> {
    await fetch(`${this.baseUrl}/delete/${id}`, {
      method: "DELETE",
    });
  }
}
