import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/myImg.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {inspect} from "util";
import {Button} from "../../../components/buttons/Button";
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
                        <Button>About</Button>

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
`

const MainTitle = styled.h1`
  color: #111;
  font-family: Manrope, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 123%; /* 59.04px */
  letter-spacing: -0.96px;
  text-transform: capitalize;
`

const Name = styled.h2`
  color: #111;
  font-family: Manrope, sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 121%; /* 102.85px */
  letter-spacing: -1.7px;
  text-transform: capitalize;
`
const Paragraph = styled.p`
  line-height: 45px;
  color: #282828;
  font-family: Manrope, sans-serif;
  font-style: normal;
  line-height: 234.523%; /* 44.559px */
  letter-spacing: 0.38px;
  border-top: 24px;
`