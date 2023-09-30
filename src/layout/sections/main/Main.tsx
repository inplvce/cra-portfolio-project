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
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <StyledNaming>
                        <Name><LineForTextMain>Uladzimir Kaniushenka</LineForTextMain></Name>
                        <MainTitle>Developer & Designer</MainTitle>
                        <Paragraph>Make designs, visual identities, apps, websites, social media.</Paragraph>
                        <span><ButtonOne>See my work</ButtonOne>
                        <ButtonStroke>Download CV</ButtonStroke></span>
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
  
  span {
    display: inline-block;
    justify-content: space-between;
  }

`



const Photo = styled.img`
width: 400px;

  //padding-top: 40px;
  padding-bottom: 8px;
  border-radius: 100%;
  order: -1;
  //border: teal 2px solid;
object-fit: cover;
  aspect-ratio: 1/1;


  
  @media ${theme.media.mobile} {
    margin-top: -40px;
    max-width: 200px;
    max-height: 100%;
    //padding-bottom: 24px;
    margin-left: 20%;
    margin-right: 20%;
  }

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
  //
  // &::before {
  //   content: "";
  //   display: inline-block;
  //   width: 100%;
  //   height: 20px;
  //   background-color: ${theme.colors.whiteFont};
  //  
  //   position: absolute;
  //   bottom: 0;
  //   z-index: -1;
  }
`