import { render, screen } from "@testing-library/react";
import InvitationInput from "../components/InvitationInput/InvintationInput";

describe("Invitation input component tests", () => {
  test("Renders correctly", () => {
    render(
      <InvitationInput
        id={10}
        src="test"
        setEmail={() => console.log("test")}
      />
    );
    const participant = screen.getByText("Participant 10");
    expect(participant).toBeInTheDocument;
    const input = document.querySelectorAll("input");
    expect(input).toHaveLength(1);
    expect(input[0].placeholder).toBe("email or phone number");
  });
});
