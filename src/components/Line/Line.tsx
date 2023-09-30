import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Line = () => {
    return (
        <LineStyled>

        </LineStyled>
    );
};

const LineStyled = styled.div`
  border-bottom: 1px solid #BCC2C5;
  margin-top: 8px;
  margin-bottom: 80px;
  filter: blur(1px);

  @media ${theme.media.mobile} {
    margin-top: 8px;
    margin-bottom: 40px;
  }
`