import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";


type WorkPropsType = {
    title: string
    text: string
    src: string

}


export const Work = (props: WorkPropsType) => {
    return (

        <StyledWork>
            <div>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <LineStyledWork/>
            <Text>{props.text}</Text>
                {/*<Link href={"#"}>Demo</Link>*/}
                {/*<Link href={"#"}>Code</Link>*/}
            </div>
        </StyledWork>

    );
};

const StyledWork = styled.div`
  width: 320px;
  transition: all 0.3s ease;
  flex-grow: 1;
  background-color: ${theme.colors.myLightGray};
  padding: 8px 8px;
  border-radius: 4px;


  &:hover {

    text-align: center;
    transition: all 0.3s ease;
    transform: scale(1.01);
  }

  @media ${theme.media.desktop} {
    width: 440px;
  }
  
`
const Image = styled.img`
  width: 100%;
  //object-fit: cover;
  //border-radius: 4px;
  aspect-ratio: 1/1;


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
  aspect-ratio: 1/1;
  


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
  filter: blur(1px);

  @media ${theme.media.mobile} {
  
    margin-top: 16px;
    margin-bottom: 16px;
  }
  
`
