// import React from "react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Navigation } from "./Navigation/Navigation";
import { AppContainer, AppWrapper } from "./styled";
import { theme } from "./styled/withTheme/defStyles";

export const App = () => {
  return (
    <AppContainer>
      <AppWrapper>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
      </AppWrapper>
    </AppContainer>
  );
};
