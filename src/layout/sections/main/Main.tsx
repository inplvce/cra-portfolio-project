import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/myImg.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
// import {inspect} from "util";
import {ButtonStroke, ButtonOne, ButtonEllipsMenu} from "../../../components/buttons/Button";
import {Container} from "../../../components/container/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            {/*<ButtonEllipsMenu>hi</ButtonEllipsMenu>*/}
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <StyledNaming>
                        <Name><LineForTextMain>Uladzimir Kaniushenka</LineForTextMain></Name>
                        <MainTitle>Developer & Designer</MainTitle>
                        <Paragraph>Make designs, visual identities, apps, websites, social media.</Paragraph>
                        <ButtonOne>See my work</ButtonOne>
                        <ButtonStroke>Download CV</ButtonStroke>
                    </StyledNaming>
                    <Photo src={photo} alt=''/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 93vh;
  display: flex;
  padding-top: 80px;

`

const Photo = styled.img`
  width: 400px;
  max-width: 100%;
  object-fit: cover;
  padding-top: 40px;
  padding-bottom: 8px;
  border-radius: 396px;
  order: -1;
`
// const PhotoWrapper = styled.div`
// position: relative;
//
// &::before {
//   content: "";
//   width: 450px;
//   height: 40px;
//   border-radius: 396px;
//   border: 5px solid ${theme.colors.whiteFont};
//
//   position: absolute;
//
// }
//
// `

const MainTitle = styled.h1`
  
`

const Name = styled.h2`

`
const Paragraph = styled.p`
  margin-top: 24px;
  margin-bottom: 40px;
`

const StyledNaming = styled.div`
  text-align: left;

`

const LineForTextMain = styled.span`
position: relative;
  z-index: 0;
  
  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 20px;
    background-color: ${theme.colors.whiteFont};
    
    position: absolute;
    bottom: 0;
    z-index: -1;
  }
`