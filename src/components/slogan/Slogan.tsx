import React from 'react';
import styled from "styled-components";
// import {SectionTitle} from "../SectionTitle";

import photo from "../../assets/images/myImg.jpg";
import {Container} from "../container/Container";
import {FlexWrapper} from "../FlexWrapper";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <StyledText>Let's start working together</StyledText>
                    <StyledImageContact src={photo} alt=''/>
                    </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  min-height: 480px;
  height: 100%;
  background-color: #1A1B1D;
  padding-top: 120px;


`
const StyledImageContact = styled.img`
  max-width: 200px;
  width: 100%;
  border-radius: 142.5px;
  object-fit: cover;

    `
const StyledText  = styled.h4`
    color: #F0F4F6;
  text-align: left;
  align-items: center;
  margin-right: 120px;
  margin-top: 48px;
  font-size: 48px;
`