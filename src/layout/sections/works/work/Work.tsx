import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    title: string
    text: string
    src: string

}



export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <LineStyledWork/>
            <Text>{props.text}</Text>
            <Link href={"#"}>Demo </Link>
            <Link href={"#"}>Code </Link>

        </StyledWork>
    );
};

const StyledWork = styled.div`
background-color: snow;
  max-width: 540px;
  width: 100%;
  color: #1A1B1D;
  font-family: Manrope, sans-serif;
  font-size: 24px;
  font-style: normal;
  
  
`
const Image = styled.img`
    width: 90%;
  height: 260px;
  object-fit: cover;

`

const Link = styled.a`
background-color: coral;
`

const Title = styled.h3`

`

const Text = styled.p`
  color: #1A1B1D;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 225.023%; /* 40.504px */
  letter-spacing: 0.36px;
  text-align: left;
`

export const TitleWorkStyled = styled.h3`
color: #1A1B1D;
  max-width: 680px;
  width: 100%;
  text-align: left;
font-family: Manrope, sans-serif;
font-size: 48px;
font-style: normal;
font-weight: 300;
line-height: 120%; /* 57.6px */
letter-spacing: -0.96px;
  display: flex;
  margin-bottom: 64px;
  
//background-color: pink;
`
const LineStyledWork = styled.div`
  border-bottom: 1px solid #BCC2C5;
  margin-top: 24px;
  margin-bottom: 16px;
`
