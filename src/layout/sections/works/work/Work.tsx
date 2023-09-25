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
            <BackgraungForImg>
            <Image src={props.src} alt=""/>
            </BackgraungForImg>
            <Title>{props.title}</Title>
            <LineStyledWork/>
            <Text>{props.text}</Text>

                {/*<Link href={"#"}>Demo</Link>*/}
                {/*<Link href={"#"}>Code</Link>*/}

        </StyledWork>
    );
};

const StyledWork = styled.div`
  max-width: 520px;
  width: 100%;
  max-height: 800px;
  height: 100%;
  margin-top: 80px;
  margin-bottom: 64px;
  transition: all 0.3s ease;
  
  &:hover {
  //&::before {
  //  content: "";
  //  display: inline-block;
  //  width: 100%;
  //  height: 1px;
  //
   text-align: center;
    transition: all 0.3s ease;
    transform: scale(1.05);
  //  position: absolute;
  //  bottom: 0;
  //  z-index: -1;
  //background-color: teal;
  }
  //}

  
`
const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
  border-radius: 4px;



`

const BackgraungForImg = styled.div`
  display: flex;
  justify-content: center;

  background-color: rgba(203, 206, 206, 0.42);
  padding-top: 80px;
  padding-bottom: 80px;
  width: 100%;
  max-height: 400px;
  height: 100%;


`

const BoxLinks = styled.div`



//background-color: wheat;
 
`

const Title = styled.h5`
  text-align: left;
  margin-top: 40px;
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
margin-bottom: 80px;
`

const LineStyledWork = styled.div`
  border-bottom: 1px solid #BCC2C5;
  margin-top: 24px;
  margin-bottom: 24px;
`
