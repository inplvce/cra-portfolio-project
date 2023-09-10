import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const ButtonOne = styled.button`
  cursor: pointer;
  width: 180px;
  height: 80px;
  border-radius: 40px;
  background: #1A1B1D;
  
  color: #FFF;
  text-align: center;
  font-family: Manrope, sans-serif;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  letter-spacing: 0.54px;
  //text-transform: uppercase;
  transition: all 0.5s ease;
  margin-right: 16px;
  
  &:hover {
    color: white;
    background-color: dodgerblue;
  }

`
export const ButtonStroke = styled.button`
  width: 180px;
  height: 80px;
  flex-shrink: 0;
  color: #2B2C2D;
  text-align: center;
  font-family: Manrope, sans-serif;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.54px;
  text-transform: capitalize;

  border-radius: 40px;
  border: 2px solid #E9E9E9;
  transition: all 0.5s ease;
  margin-top: 16px;
  
  &:hover {
    border-radius: 40px;
    border: 2px solid dodgerblue;
  }

`

export const ButtonEllips = styled.button`
  border-radius: 187px;
  background: #1A1B1D;
  width: 187px;
  height: 187px;
  flex-shrink: 3;
  margin-top: 40px;

  color: #FFF;
  font-family: Manrope,sans-serif;
  font-size: 1em;
  font-style: normal;
  font-weight: 500;
  line-height: 225.023%; /* 40.504px */
  letter-spacing: 0.36px;

  transition: all 0.5s ease;

  &:hover {
    color: white;
    background-color: dodgerblue;
  }
`

export const ButtonOneSmall = styled.button`
  cursor: pointer;
  width: 88px;
  height: 60px;
  border-radius: 40px;
  background: #1A1B1D;
  
  color: #FFF;
  text-align: center;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  letter-spacing: 0.54px;
  //text-transform: uppercase;
  transition: all 0.5s ease;
  margin-right: 8px;
  
  &:hover {
    color: white;
    background-color: dodgerblue;
  }

`

export const ButtonStrokeSmall = styled.button`
  cursor: pointer;
  width: 120px;
  height: 60px;
  flex-shrink: 0;
  color: #2B2C2D;
  text-align: center;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.54px;
  text-transform: capitalize;
  margin-right: 8px;

  border-radius: 40px;
  border: 2px solid #E9E9E9;
  transition: all 0.5s ease;
  margin-top: 16px;
  
  &:hover {
    border-radius: 40px;
    border: 2px solid dodgerblue;
  }

`

export const ButtonStrokeSmallDevelopment = styled.button`
  cursor: pointer;
  width: 160px;
  height: 60px;
  flex-shrink: 0;
  color: #2B2C2D;
  text-align: center;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.54px;
  text-transform: capitalize;
  margin-right: 8px;

  border-radius: 40px;
  border: 2px solid #E9E9E9;
  transition: all 0.5s ease;
  margin-top: 16px;
  
  &:hover {
    border-radius: 40px;
    border: 2px solid dodgerblue;
  }

`