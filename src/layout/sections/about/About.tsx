import React, {useState} from 'react';
import {Container} from "../../../components/container/Container";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ButtonEllips} from "../../../components/buttons/Button";
import {Line} from "../../../components/Line/Line";
import {AboutCollapsed} from "./AboutCollapsed";


export const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AboutSectionStyled>
            <Container>
                <StyledTopTitle>About</StyledTopTitle>
                <Line/>
                <FlexWrapper justify={"space-between"}>
                    {/*<StyledBlock>*/}
                    <StyledBlockLeft><StyledAboutTitle>I am Designer & Developer based in Minsk,
                        Belarus</StyledAboutTitle></StyledBlockLeft>
                    <StyledBlockRight><StyledParagraph>Front-end developer with experience with JS/TS, React and
                        other technologies. I try to use current patterns and keep the code clean. In my spare time
                        I improve my English and learn new technologies.
                    </StyledParagraph>
                    </StyledBlockRight>
                    {/*</StyledBlock>*/}
                </FlexWrapper>
                {isOpen &&
                    <FlexWrapper justify={"space-between"}>
                    <AboutCollapsed
                        title={"Design"}
                        text={"I deliver and user-friendly digital designs. Solid company branding is the foundation of any succesful website and application."}
                        label={"1"}
                    />
                    <AboutCollapsed
                        title={"Development"}
                        text={"I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction."}
                        label={"2"}
                    />
                        <AboutCollapsed
                            title={"The full package"}
                            text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                            label={"3"}
                        />
                </FlexWrapper>
                }
                <ButtonStyled
                    onClick={() => setIsOpen(prev => !prev)}><ButtonEllips> {isOpen ? '⌃' : 'About'}</ButtonEllips></ButtonStyled>
            </Container>
        </AboutSectionStyled>
    );
};


const CollapsedStyled = styled.div`
  transition: all 20s ease;

  transform: scale(1.1);
`


const ButtonStyled = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: initial;
  justify-content: right;
  margin-top: 40px;

  //background-color: teal;
`

const AboutSectionStyled = styled.section`
  //display: flex;
  //justify-content: center;
  min-height: 50vh;
  padding-top: 64px;
  //background-color: pink;
  //max-width: 1140px;
  //width: 100%;
  //flex;
  //background-color: gainsboro;
`

const StyledAboutTitle = styled.h4`
  margin-bottom: 24px;
  //background-color: pink;

`

const StyledParagraph = styled.p`
  color: #1A1B1D;
  font-family: Manrope, sans-serif;
  font-size: 1em;
  font-style: normal;
  line-height: 225.023%; /* 40.504px */
  letter-spacing: 0.36px;
  margin-bottom: 64px;

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

  font-style: normal;
  font-weight: 400;
  line-height: 150.023%; /* 28.504px */
  letter-spacing: -0.665px;
  margin-top: 40px;

`
