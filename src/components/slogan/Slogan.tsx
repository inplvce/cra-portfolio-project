import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle";
import {ButtonOne} from "../buttons/Button";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>
                I Am Available For Freelance
            </SectionTitle>
         <ButtonOne>Hi</ButtonOne>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
min-height: 30vh;
  background-color: lightblue;
`