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
                    <StyledBlocksSlogan>
                        <div>
                            <StyledText>Let's start working together</StyledText>
                        </div>
                        <div>
                            <StyledImageContact src={photo} alt=''/>
                        </div>
                    </StyledBlocksSlogan>

                    </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledBlocksSlogan = styled.span`
display: flex;
  align-items: center;
  gap: 200px
`

const StyledSlogan = styled.section`
  min-height: 360px;
  height: 100%;
  background-color: #1A1B1D;
  padding-top: 104px;


`
const StyledImageContact = styled.img`
  max-width: 160px;
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