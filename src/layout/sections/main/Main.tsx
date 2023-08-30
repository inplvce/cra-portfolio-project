import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/myImg.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {inspect} from "util";
export const Main = () => {
    return (
        <StyledMain>
<FlexWrapper align={"center"} justify={"space-around"}>
    <div>
        <span>Hi! everyone</span>
        <h2>Uladzimir Kaniushenka</h2>
        <h1>A Web Developer & UX Designer</h1>
        <p>Make designs, visual identities, apps, websites, social media.</p>
        <button>get in touch</button>
    </div>
    <Photo src={photo} alt=''/>
</FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.div`
min-height: 100vh;
  background-color: blanchedalmond;

`

const Photo = styled.img`
  width: 450px;
  height: 436px;
  object-fit: cover;
`

const MainTitle = styled.h1`
    
    `

const Name = styled.h2`
    `
