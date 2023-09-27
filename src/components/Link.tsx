import styled from "styled-components";
import {theme} from "../styles/Theme";

export const LinkStyled = styled.a`
  display: flex;
  color: #1A1B1D;
  text-align: center;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.54px;
  text-transform: capitalize;
  //background-color: green;

  &:hover {
    &::before {
      border: rgba(65, 81, 253, 1) 1.6px solid;
 
    }
  }
  
  &::before {
    content: "";
    display: inline-block;
    height: 64px;
    position: absolute;
    left: -24px;
    right: -24px;
    top: -20px;
    border: lightgrey 1.6px solid;
    border-radius: 32px;
    
  }

  @media ${theme.media.mobile} {
    font-size: 12px;
    line-height: 150%;


    &:hover {
      &::before {
        border: rgba(65, 81, 253, 1) 1.6px solid;

      }
    }

    &::before {
      content: "";
      display: inline-block;
      height: 320%;
      position: absolute;
      left: -24px;
      right: -24px;
      top: -20px;
      border: lightgrey 1.6px solid;
      border-radius: 32px;
text-align: center;
    }
  }
  
`