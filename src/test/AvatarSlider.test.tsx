import { render, screen } from "@testing-library/react";
import AvatarSlider from "../components/AvatarSlider/AvatarSlider";

describe("Avatar slider component tests", () => {
  test("Renders correctly", () => {
    render(<AvatarSlider />);
    const pageTitle = screen.getByText("Choose your avatar");
    expect(pageTitle).toBeInTheDocument;
  });
});
