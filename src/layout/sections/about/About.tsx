import React from 'react';
import {Container} from "../../../components/container/Container";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ButtonEllips} from "../../../components/buttons/Button";

export const About = () => {
    return (
        <AboutSectionStyled>
            <Container>
                <StyledTopTitle>About</StyledTopTitle>
                <LineStyled/>
                <FlexWrapper justify={"space-between"}>
                    {/*<StyledBlock>*/}
                        <StyledBlockLeft><StyledAboutTitle>I am Designer & Developer based in Minsk,
                            Belarus</StyledAboutTitle></StyledBlockLeft>
                        <StyledBlockRight><StyledParagraph>Front-end developer with experience with JS/TS, React and
                            other technologies. I try to use current patterns and keep the code clean. In my spare time
                            I improve my English and learn new technologies.
                        </StyledParagraph>
                            <ButtonEllips>About</ButtonEllips>
                        </StyledBlockRight>
                    {/*</StyledBlock>*/}
                </FlexWrapper>
            </Container>
        </AboutSectionStyled>
    );
};

const AboutSectionStyled = styled.section`
  min-height: 60vh;
  //background-color: pink;
  //max-width: 1140px;
  //width: 100%;
  //flex;
  //background-color: gainsboro;
`

const StyledAboutTitle = styled.text`
  color: #1A1B1D;
  font-family: Manrope, sans-serif;
  font-size: 3em;
  font-style: normal;
  font-weight: 300;
  line-height: 120%; /* 57.6px */
  letter-spacing: -0.96px;
  //background-color: pink;
`

const StyledParagraph = styled.text`
  color: #1A1B1D;
  font-family: Manrope, sans-serif;
  font-size: 1em;
  font-style: normal;
  line-height: 225.023%; /* 40.504px */
  letter-spacing: 0.36px;

`

const StyledBlock = styled.span`
  //display: flex;
  //justify-content: space-between;
  //margin-top: 80px;
  ////background-color: skyblue;
  //
  //margin-bottom: 80px;
  //flex-wrap: wrap;




`

const StyledBlockLeft = styled.div`
  max-width: 600px;
  
`

const StyledBlockRight = styled.div`
  max-width: 410px;
  //flex-direction: column;
  //text-align: right;
  //order: inherit;
`

const StyledTopTitle = styled.h3`
  color: #BCC2C5;
  font-family: Manrope, sans-serif;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: 150.023%; /* 28.504px */
  letter-spacing: -0.665px;
  margin-top: 40px;
`

const LineStyled = styled.div`
  border-bottom: 1px solid #BCC2C5;
  margin-top: 8px;
  margin-bottom: 80px;
`
