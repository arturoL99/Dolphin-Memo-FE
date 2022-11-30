import { render } from "@testing-library/react";
import Button from "../components/Button/Button";

describe("Button component tests", () => {
  test("Renders correctly", () => {
    render(<Button className="btn" color="blue" click={null} content="Test" />);
    const input = document.querySelectorAll("input");
    expect(input).toHaveLength(1);
    expect(input[0].value).toBe("Test");
  });
});
