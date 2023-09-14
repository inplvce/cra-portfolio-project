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
                    <StyledText>Let’s<br/>
                        work<br/>
                        together</StyledText>
                    <StyledImageContact src={photo} alt=''/>
                    </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  display: flex;
  min-height: 480px;
  height: 100%;
  background-color: #1A1B1D;


`
const StyledImageContact = styled.img`
  max-width: 238px;
  width: 100%;
  max-height: 220px;
  height: 100%;
  border-radius: 142.5px;
  object-fit: cover;
  order: -1;
  im

    `
const StyledText  = styled.h4`
    color: white;
  text-align: left;
  align-items: center;
  margin-right: 120px;
  margin-top: 48px;
  font-size: 48px;
`