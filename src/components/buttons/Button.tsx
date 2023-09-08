import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const ButtonOne = styled.button`
  width: 187px;
  height: 68px;
  flex-shrink: 0;
  border-radius: 40px;
  background: #2B2C2D;
  
  color: #FFF;
  text-align: center;
  font-family: Manrope, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  letter-spacing: 0.54px;
  //text-transform: uppercase;
  transition: all 0.5s ease;
  
  &:hover {
    color: white;
    background-color: dodgerblue;
  }

`
export const ButtonStroke = styled.button`
  width: 196px;
  height: 68px;
  flex-shrink: 0;
  color: #2B2C2D;
  text-align: center;
  font-family: Manrope, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.54px;
  text-transform: capitalize;

  border-radius: 40px;
  border: 2px solid #E9E9E9;
  transition: all 0.5s ease;
  margin-left: 16px;
  margin-top: 16px;
  
  &:hover {
    border-radius: 40px;
    border: 2px solid dodgerblue;
  }

`