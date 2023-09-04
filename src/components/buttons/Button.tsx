import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Button = styled.button`
  width: 200px;
  height: 90px;
  flex-shrink: 0;
  background-color: greenyellow;

  border: 1px solid whitesmoke;
  border-radius: 300px;
  
  color: ${theme.colors.font};
  text-align: center;
  font-family: "Manrope", sans-serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: 234.523%; /* 44.559px */
  letter-spacing: 1.9px;
  text-transform: uppercase;
  
  &:hover {
    color: white;
    background-color: black;
  }
`