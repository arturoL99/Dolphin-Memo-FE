import { render } from "@testing-library/react";
import MemoryCard from "../components/MemoryCard/MemoryCard";

describe("Memory card component tests", () => {
  test("Renders correctly", () => {
    render(
      <MemoryCard
        id="1"
        name="dog"
        img="dog"
        insertCard={() => console.log("test")}
        turned={false}
        gameReady
        isPlayerTurn
      />
    );
    const imgs = document.querySelectorAll("img");
    expect(imgs).toHaveLength(2);
  });
});
