import userEvent from "@testing-library/user-event";
import { screen, waitFor } from "@testing-library/react";
import { render } from "../../util/mock/router.mock";
import Alphabet from ".";

describe("Alphabet", () => {
  it("should render Alphabet", async () => {
    const letter = "A";
    const setLetter = jest.fn();
    const pathname = "";

    render(
      <Alphabet letter={letter} setLetter={setLetter} pathname={pathname} />
    );
    const nodeAlphabet = await waitFor(() => screen.getByTestId("alphabet"));
    expect(nodeAlphabet).toBeTruthy();

    const nodeSpan = await waitFor(() => screen.getByText(letter));
    expect(nodeSpan).toBeTruthy();
    userEvent.click(nodeSpan);

    expect(setLetter).toHaveBeenCalled();
  });
});
