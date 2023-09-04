import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Button = styled.button`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  background-color: #111;

  //border: 1px solid whitesmoke;
  border-radius: 300px;
  
  color: white;
  text-align: center;
  font-family: "Manrope", sans-serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 200;
  border-top: 100px;
  line-height: 234.523%; /* 44.559px */
  letter-spacing: 1.9px;
  //text-transform: uppercase;
  transition: all 0.5s ease;
  
  &:hover {
    color: white;
    background-color: dodgerblue;
    padding-bottom: 4px;
    font-weight: 4000;
  }

`
