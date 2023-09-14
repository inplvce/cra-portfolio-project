import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`

  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
  }

  
  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    background-color: unset;
    border: none;
    font-family: Manrope,sans-serif;
    font-size: 16px;
  }

  // section:nth-of-type(odd) {
  //   background-color: ${theme.colors.primaryBg};
  // }
  //
  // section:nth-of-type(even) {
  // background-color: ${theme.colors.secondaryBg};
  // }

  p {
    color: #1A1B1D;
    font-family: Manrope,sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 225.023%; /* 40.504px */
    letter-spacing: 0.36px;
  }

  h1 {
    color: #111;
    font-family: Manrope, sans-serif;
    font-size: 3.5em;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 67.2px */
    letter-spacing: -1.12px;
  }
  
  h2 {
    color: #111;
    font-family: Manrope, sans-serif;
    font-size: 3.5em;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 67.2px */
    letter-spacing: -1.12px;
  }
  
  h4 { //about | work | contact
    color: #1A1B1D;
    max-width: 680px;
    width: 100%;
    text-align: left;
    font-family: Manrope, sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%; /* 57.6px */
    letter-spacing: -0.96px;
    display: flex;
    margin-bottom: 64px;

    //background-color: pink;
  }
  
  h5 {
    color: #1A1B1D;
    font-family: Manrope, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 38.4px */
    letter-spacing: -0.64px;
    text-align: left;
    margin-top: 32px;
  }
  

`