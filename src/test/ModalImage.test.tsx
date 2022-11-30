import { render, screen } from "@testing-library/react";
import React from "react";
import ModalImage from "../components/ModalImage/ModalImage";

describe("Image selector component tests", () => {
  test("Renders correctly", () => {
    render(
      <ModalImage
        img={null}
        name="test"
        selected=""
        setSelected={null}
        setNewGame={() => console.log("test")}
      />
    );
    const input = document.querySelectorAll("input");
    expect(input).toHaveLength(1);
    expect(input[0].type).toBe("radio");
    const imgs = document.querySelectorAll("img");
    expect(imgs).toHaveLength(1);
    expect(imgs[0].alt).toBe("test");
  });
});
