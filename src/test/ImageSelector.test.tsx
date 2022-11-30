import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ImageSelector from "../components/ImageSelector/ImageSelector";

describe("Image selector component tests", () => {
  test("Renders correctly", () => {
    render(
      <BrowserRouter>
        <ImageSelector setNewGame={() => console.log("test")} />
      </BrowserRouter>
    );
    const button = screen.getByText("Browse images...");
    expect(button).toBeInTheDocument;
    const imgs = document.querySelectorAll("img");
    expect(imgs).toHaveLength(0);
  });
});
