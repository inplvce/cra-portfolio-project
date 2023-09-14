import React from 'react';
import styled from "styled-components";
import {Line} from "../../../../components/Line/Line";

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
`
const Image = styled.img`
  width: 100%;
  height: 540px;
  object-fit: cover;
  margin-top: 80px;

`

const Link = styled.a`
  background-color: #ffffff;
  text-align: right;
  font-size: 16px;
`

const Title = styled.h5`
  text-align: left;
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

export const TitleWorkStyled = styled.h4`

`

const LineStyledWork = styled.div`
  border-bottom: 1px solid #BCC2C5;
  margin-top: 24px;
  margin-bottom: 16px;
`
