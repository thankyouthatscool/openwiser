import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { App, Popup } from ".";
import { store } from "./store";
import { GlobalStyle, PopupGlobalStyle, theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        {window.location.hash === "#popup" ? (
          <>
            <PopupGlobalStyle />
            <Popup />
          </>
        ) : (
          <>
            <GlobalStyle />
            <App />
          </>
        )}
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
);
