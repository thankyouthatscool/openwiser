import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
    font-size: 16px; 
  }

  html,
  body,
  #root {
    height: 100%;

    margin: 0;

    padding: 0;

    width: 100%;
  }
`;
