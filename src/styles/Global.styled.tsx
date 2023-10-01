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

  h1 {
    color: rgb(26, 27, 29);
    font-family: Manrope, sans-serif;
    line-height: 110%; /* 67.2px */
    //font-size: 3.5em;
    font-size: calc((100vw - 360px) / (1920 - 360) * (56 - 40) + 40px);
    font-weight: 450;
    //font-weight: 400;
    //line-height: 120%; /* 67.2px */
    //letter-spacing: -0.96px;

      // @media ${theme.media.mobile} {
    //   font-size: 32px;
    //   //text-align: center;
    //   font-weight: 380;
    //   letter-spacing: -0.96px;
    //   line-height: 150%; /* 67.2px */
    // }
  }

  h2 {
    color: #1a1b1d;
    font-family: Manrope, sans-serif;
    font-size: calc((100vw - 360px) / (1920 - 360) * (56 - 40) + 40px);
    font-weight: 450;
    line-height: 110%; /* 67.2px */
    //letter-spacing: -0.96px;
  }

  h3 {
    font-size: 12px;
    text-transform: uppercase;
    text-align: left;
    font-weight: 600;
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

      // @media ${theme.media.mobile} {
    //   font-size: 32px;
    //}

    //background-color: pink;
  }

  h5 {
    color: #1A1B1D;
    font-family: Manrope, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 450;
    line-height: 32px; /* 38.4px */
    letter-spacing: -0.64px;
    text-align: left;
    margin-top: 32px;

    @media ${theme.media.tablet} {
 font-size: 24px;
      font-weight: 450;
    }

    @media ${theme.media.mobile} {
      font-size: 24px;
      font-weight: 450;
    }
  }

  ul {
    list-style: none;

  }

  li {
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.05);
      transition: all 0.2s ease;
      //list-style-type: -moz-tamil;
    }

    @media ${theme.media.mobile} {
      line-height: 160%; /* 40.504px */
      font-weight: 400;
    }

  }

  button {
    background-color: unset;
    border: none;
    font-family: Manrope, sans-serif;
    font-size: 16px;

    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

      // @media ${theme.media.mobile} {
    //   font-size: 14px;
    // }
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
    font-family: Manrope, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px; /* 40.504px */
    letter-spacing: 0.36px;

      @media ${theme.media.mobile} {
    
        font-weight: 400;
    }
  }
  
  input {
    border: 0;
    font-family: Manrope, sans-serif;
    font-size: 24px;
    font-style: normal;

    letter-spacing: 0.36px;
    outline: none;
  }


  a {
    text-decoration: none;
    color: #F0F4F6;
    font-family: Manrope, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 225.023%; /* 40.504px */
    letter-spacing: 0.36px;
    transition: all 0.5s ease;
  }

  textarea {
    width: 100%; /* Ширина поля в процентах */
    resize: none; /* Запрещаем изменять размер */


    background-color: #1A1B1D;
    border: none;
    color: #1A1B1D;
    font-family: Manrope, sans-serif;
    font-size: 24px;
    font-style: normal;
    letter-spacing: 0.36px;

  }

  img {
    //transition: all 0.5s ease;

    //&:hover {
    //  transform: scale(1.01);
    //  transition: all 0.3s ease;
    //}


  }
section {
  padding: 100px 0;


  @media ${theme.media.mobile} {
    padding: 48px 0;
  }
}

label {
  font-weight: 500;
}


`