import React, {useState} from 'react';
import {Container} from "../../../components/container/Container";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ButtonEllips} from "../../../components/buttons/Button";
import {Line} from "../../../components/Line/Line";
import {AboutCollapsed} from "./AboutCollapsed";
import {theme} from "../../../styles/Theme";


export const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AboutSectionStyled>
            <Container>
                <StyledTopTitle>About</StyledTopTitle>
                <Line/>
                <FlexWrapper justify={"space-between"}>
                    {/*<StyledBlock>*/}
                    <StyledBlockLeft><StyledAboutTitle>I am Designer & Developer <>based in Minsk,
                        Belarus</></StyledAboutTitle></StyledBlockLeft>
                    <StyledBlockRight><StyledParagraph><p>Front-end developer with experience with JS/TS, React and
                        other technologies. I try to use current patterns and keep the code clean. In my spare time
                        I improve my English and learn new technologies.</p>
                    </StyledParagraph>
                    </StyledBlockRight>
                    {/*</StyledBlock>*/}
                </FlexWrapper>
                {isOpen &&
                    <FlexWrapper justify={"space-between"}>
                    <AboutCollapsed
                        title={"Design"}
                        text={"I deliver and user-friendly digital designs. Solid company branding is the foundation of any succesful website and application."}
                        label={"01"}
                    />
                    <AboutCollapsed
                        title={"Development"}
                        text={"I build scalable websites and applications from scratch that fit seamlessly with design."}
                        label={"02"}
                    />
                        <AboutCollapsed
                            title={"The full package"}
                            text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                            label={"03"}
                        />
                </FlexWrapper>
                }
                <ButtonStyled
                    onClick={() => setIsOpen(prev => !prev)}><ButtonEllips> {isOpen ? '⌃' : 'About'}</ButtonEllips></ButtonStyled>
            </Container>
        </AboutSectionStyled>
    );
};

// const LightText = styled.text`
// font-weight: 100;
// `

const CollapsedStyled = styled.div`
  transition: all 20s ease;

  transform: scale(1.1);
`


const ButtonStyled = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: initial;
  justify-content: right;
  margin-top: 24px;

  @media ${theme.media.tablet} {


  }

  @media ${theme.media.mobile} {
    margin-top: 80px;

  }
`

const AboutSectionStyled = styled.section`
  min-height: 50vh;
  
  @media ${theme.media.tablet} {
    
    
  }

`

const StyledAboutTitle = styled.h4`
  margin-bottom: 24px;
  //background-color: pink;

`

const StyledParagraph = styled.p`
  color: #1A1B1D;
  font-family: Manrope, sans-serif;
  font-style: normal;
  margin-bottom: 64px;

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


  // @media ${theme.media.mobile} {
  //   margin-top: 0;
  // }
`
