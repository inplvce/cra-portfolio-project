import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/myImg.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
// import {inspect} from "util";
import {ButtonStroke, ButtonOne} from "../../../components/buttons/Button";
import {Container} from "../../../components/container/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <StyledNaming>
                        <Name>Uladzimir Kaniushenka</Name>
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
  min-height: 100vh;
  display: flex;


`

const Photo = styled.img`
  width: 410px;
max-width: 100%;
  object-fit: cover;

  border-radius: 396px;
  order: -1;
`

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