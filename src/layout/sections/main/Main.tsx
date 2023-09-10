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
                    <div>
                        <Name>Uladzimir Kaniushenka</Name>
                        <MainTitle>Developer & Designer</MainTitle>
                        <Paragraph>Make designs, visual identities, apps, websites, social media.</Paragraph>
                        <ButtonOne>See my work</ButtonOne>
                        <ButtonStroke>Download CV</ButtonStroke>
                    </div>
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
`

const MainTitle = styled.h1`
  color: #111;
  font-family: Manrope, sans-serif;
  font-size: 3.5em;
  font-style: normal;
  font-weight: 450;
  line-height: 120%; /* 67.2px */
  letter-spacing: -1.12px;

`

const Name = styled.h2`
  color: #111;
  font-family: Manrope, sans-serif;
  font-size: 3.5em;
  font-style: normal;
  font-weight: 450;
  line-height: 120%; /* 67.2px */
  letter-spacing: -1.12px;
`
const Paragraph = styled.p`
  color: #282828;
  font-family: Manrope, sans-serif;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: 234.523%; /* 42.214px */
  letter-spacing: 0.36px;
  margin-top: 24px;
  margin-bottom: 40px;
`