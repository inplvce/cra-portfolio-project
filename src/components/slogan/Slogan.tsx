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
                        <TextBlockSlogan>
                            <StyledText>Let's start <br/>working together...</StyledText>
                        </TextBlockSlogan>
                        <ImgBlockSlogan>
                            <StyledImageContact src={photo} alt=''/>
                        </ImgBlockSlogan>
                    </StyledBlocksSlogan>
                    </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const TextBlockSlogan = styled.div`
  max-width: 700px;
  width: 100%;
  display: flex;
  justify-content: left;
  text-align: left;

`

const ImgBlockSlogan = styled.div`

align-items: center;
  margin-left: 20px;
`

const StyledBlocksSlogan = styled.span`
display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1140px;
  width: 100%;
  //background-color: teal;
`

const StyledSlogan = styled.section`
  min-height: 280px;
  height: 100%;
  background-color: #1A1B1D;
  padding-top: 104px;


`
const StyledImageContact = styled.img`
  //border: 2px solid white;
  display: flex;
  justify-content: left;
  text-align: left;
  max-width: 220px;
  width: 100%;
  border-radius: 142.5px;
  
  //object-fit: cover;


    `
const StyledText  = styled.h4`
  color: #F0F4F6;
  text-align: left;
  margin-top: 48px;
  font-size: 56px;

`