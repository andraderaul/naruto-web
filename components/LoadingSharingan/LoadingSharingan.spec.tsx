import { screen, waitFor, render } from "@testing-library/react";
import LoadingSharingan from ".";

describe("LoadingSharingan", () => {
  it("should render Loading Sharingan", async () => {
    render(<LoadingSharingan />);

    const nodeSharingan = await waitFor(() =>
      screen.getByTestId("loading-sharingan")
    );
    expect(nodeSharingan).toBeTruthy();
  });
});
