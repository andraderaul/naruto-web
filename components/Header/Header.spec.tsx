import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from ".";

describe("<Header/>", () => {
  it("should render Header", async () => {
    render(<Header />);
    const nodeHeader = await waitFor(() => screen.getByTestId("header"));
    expect(nodeHeader).toBeTruthy();
  });
});
