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
                        <span>Hi! everyone</span>
                        <Name>Uladzimir Kaniushenka</Name>
                        <MainTitle>Developer & Designer</MainTitle>
                        <Paragraph>Make designs, visual identities, apps, websites, social media.</Paragraph>
                        <Button>get in touch</Button>

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
  width: 450px;
  height: 436px;
  object-fit: cover;
`

const MainTitle = styled.h1`
  font-size: 40px;
  line-height: 60px;
`

const Name = styled.h2`
font-size: 65px;
  line-height: 120%;
`
const Paragraph = styled.p`
  line-height: 45px;
`