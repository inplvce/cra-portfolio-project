import React from 'react';
import {Container} from "../../../components/container/Container";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ButtonEllips} from "../../../components/buttons/Button";

export const About = () => {
    return (
        <AboutStyled>

            <Container>
                <StyledAboutTitle>About</StyledAboutTitle>
                <LineStyled/>
                <FlexWrapper>
                    <StyledBlock>
                        <StyledBlockLeft><StyledLocation>I am Designer & Developer based in Minsk, Belarus</StyledLocation></StyledBlockLeft>
                        <StyledBlockRight><StyledSkills>Front-end developer with experience with JS/TS, React and other technologies. I try to use current patterns and keep the code clean. In my spare time I improve my English and learn new technologies.
                        </StyledSkills>
                            <ButtonEllips>About</ButtonEllips>
                        </StyledBlockRight>
                    </StyledBlock>
                </FlexWrapper>

            </Container>
        </AboutStyled>
    );
};

const AboutStyled = styled.section`
  min-height: 760px;
  display: flex;
              //background-color: pink;
  //max-width: 1140px;
  //width: 100%;
  //flex;
`

const StyledAboutTitle = styled.h3`
  width: 63px;

  color: #BCC2C5;
  font-family: Manrope, sans-serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 150.023%; /* 28.504px */
  letter-spacing: -0.665px;
  
  
`
const StyledLocation = styled.text`
  color: #1A1B1D;
  font-family: Manrope, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 57.6px */
  letter-spacing: -0.96px;

`

const StyledSkills = styled.text`
  color: #1A1B1D;
  font-family: Manrope, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 225.023%; /* 40.504px */
  letter-spacing: 0.36px;

`

const StyledBlock = styled.span`
display: flex;
  justify-content: space-between;
  margin-top: 80px;
              //background-color: skyblue;
  
  
`
const StyledBlockLeft = styled.div`
min-width: 543px;
`
const StyledBlockRight = styled.div`
  max-width: 440px;
  flex-direction: column;
  //text-align: right;
`

const LineStyled = styled.div`
  border-bottom: 1px solid #BCC2C5;
  margin-top: 8px ;
`