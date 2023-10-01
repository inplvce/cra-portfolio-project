import React from 'react';
import styled from "styled-components";
import {Details} from "./details/Details";
import {theme} from "../../styles/Theme";

export const Socials = () => {
    return (
        <SocialsStyled>
            <TitleSocialsStyled>SOCIALS</TitleSocialsStyled>
            <ul>
                <li><a href='Behance'>Behance</a></li>
                <li><a href='Instagram'>Instagram</a></li>
                <li><a href='LinkedIn'>LinkedIn</a></li>
                <li><a href='Telegram'>Telegram</a></li>
            </ul>
        </SocialsStyled>
    );
};


const TitleSocialsStyled = styled.p`
  color: #828282;
  margin-top: 32px;
  font-size: 12px;
  font-weight: 500;
`

const SocialsStyled = styled.div`
  @media ${theme.media.mobile} {
display: none;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`
