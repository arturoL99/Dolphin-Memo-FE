import { render, screen } from "@testing-library/react";
import ButtonGroup from "../components/ButtonGroup/ButtonGroup";

describe("Button group component tests", () => {
  test("Renders correctly", () => {
    render(<ButtonGroup title="Test" listMode={[]} name="test" />);
    const name = screen.getByText("Test");
    expect(name).toBeInTheDocument;
  });
});
