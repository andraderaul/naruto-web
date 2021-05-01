import React from "react";
import {ThemeProvider} from "styled-components";
import GlobalStyles, { theme } from '../src/styles/GlobalStyles'

export const parameters = {
  controls: { expanded: true }
};

export const decorators = [
  (storyFn) => (
    <ThemeProvider theme={theme}>
      {storyFn()}
      <GlobalStyles/>
    </ThemeProvider>
  ),
];
