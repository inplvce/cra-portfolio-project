import React from 'react';
import styled from "styled-components";

export const Details = () => {
    return (
        <div>
            <TitleDetailssStyled>CONTACT DETAILS</TitleDetailssStyled>
            <ul>
                <li><a href='tel:+375297452404'>+375 29 745 24 04</a></li>
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