import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import { theme } from "../../styles/GlobalStyles";

type DefaultParams = Parameters<typeof render>;
type RenderUI = DefaultParams[0];

export function renderWithTheme(ui: RenderUI) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}
