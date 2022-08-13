import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const PopupGlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
    font-size: 16px; 
  }

  html,
  body,
  #root {
    height: 600px;

    margin: 0;

    padding: 0;

    width: 400px;
  }
`;
