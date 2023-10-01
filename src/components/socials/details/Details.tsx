import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import photo from "../../../assets/images/myImg.jpg";
import {blob} from "stream/consumers";

export const Details = () => {
    return (
        <DetailsStyled>
            <TitleDetailssStyled>CONTACT DETAILS</TitleDetailssStyled>
            <ul>
                <li><a href='ukaniushenka@gmail.com'>ukaniushenka@gmail.com</a></li>
               <li><a href='tel:+375297452404'> <LineForTextDetails>+375 29 745 24 04</LineForTextDetails></a></li>
                <TitleDetailssStyled>LOCATION</TitleDetailssStyled>
                <LocationText>Belarus, Minsk (GMT+3)</LocationText>
            </ul>
        </DetailsStyled>
    );
};

const TitleDetailssStyled = styled.p`
  margin-top: 32px;
color: #828282;
font-size: 12px;
font-weight: 600;

  @media ${theme.media.mobile} {
    font-size: 10px;

  }


`
const LocationText = styled.p`
color: white;
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
const DetailsStyled = styled.div`

    @media ${theme.media.mobile} {
      margin-left: 8px;
      font-weight: 450;
    }

  @media ${theme.media.tablet} {
    margin-left: 8px;
    font-weight: 450;
  }
`