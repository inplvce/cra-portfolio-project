import React from 'react';
import styled from "styled-components";
import {Details} from "./details/Details";

export const Socials = () => {
    return (
        <div>
            <TitleSocialsStyled>SOCIALS</TitleSocialsStyled>
            <ul>
                <li><a href='Behance'>Behance</a></li>
                <li><a href='Instagram'>Instagram</a></li>
                <li><a href='LinkedIn'>LinkedIn</a></li>
                <li><a href='Telegram'>Telegram</a></li>
            </ul>
        </div>
    );
};


const TitleSocialsStyled = styled.p`
  color: #828282;
  margin-top: 24px;
  font-size: 12px;
  font-weight: 500;
`
