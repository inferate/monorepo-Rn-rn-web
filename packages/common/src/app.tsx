// import React from "react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Navigation } from "./Navigation/Navigation";
import { theme } from "./styled/withTheme/defStyles";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
};
