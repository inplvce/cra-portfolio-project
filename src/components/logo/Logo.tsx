import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo = () => {
    return (

        <LogoStyled><>Hello</><DotStyled>.</DotStyled></LogoStyled>

    );
};

const LogoStyled = styled.text`
color: black;
  font-size: 12px;
`
const DotStyled = styled.text`
color: dodgerblue;
  font-size: 14px;
`