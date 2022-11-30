import { render, screen } from "@testing-library/react";
import TitleScreen from "../components/TitleScreen/TitleScreen";

describe("Title screen component tests", () => {
  test("Renders correctly", () => {
    render(<TitleScreen />);
    const pageTitle = screen.getByText("Dolphin M3M0 game");
    expect(pageTitle).toBeInTheDocument;
    const img = document.querySelectorAll("img");
    expect(img).toHaveLength(1);
    expect(img[0].alt).toBe("logo");
  });
});
