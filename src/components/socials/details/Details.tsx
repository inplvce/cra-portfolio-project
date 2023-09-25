import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const Details = () => {
    return (
        <div>
            <TitleDetailssStyled>CONTACT DETAILS</TitleDetailssStyled>
            <ul>
               <li><a href='tel:+375297452404'> <LineForTextDetails>+375 29 745 24 04</LineForTextDetails></a></li>
                <li><a href='ukaniushenka@gmail.com'>ukaniushenka@gmail.com</a></li>
            </ul>
        </div>
    );
};

const TitleDetailssStyled = styled.p`
  margin-top: 32px;
color: #828282;
font-size: 12px;
font-weight: 500;

`

const LineForTextDetails = styled.span`
position: relative;
  z-index: 0;
  //&:hover {
  //&::before {
  //  content: "";
  //  display: inline-block;
  //  width: 100%;
  //  height: 1px;
  //
  // text-align: center;
  //  background-color: #828282;
  //  transition: all 5.3s ease;
  //  position: absolute;
  //  bottom: 0;
  //  z-index: -1;
  //}
  //}
`