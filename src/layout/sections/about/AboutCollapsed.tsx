import React from 'react';
import {Line} from "../../../components/Line/Line";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

type AboutCollapsedProps = {
    title: string
    text: string
    label: string
}
export const AboutCollapsed = (props: AboutCollapsedProps) => {
    return (
        <AboutCollapsedStyled>
            <LabelStyled>{props.label}</LabelStyled>
            <LineAboutCollapsed/>
            <NameSkillCollapse>{props.title}</NameSkillCollapse>
            <TextCollapsed>{props.text}</TextCollapsed>
        </AboutCollapsedStyled>
    );
};

const AboutCollapsedStyled = styled.div`
//background-color: teal;
// max-width: 320px;
//   width: 100%;
//   margin-top: 40px;
  width: 200px;
  transition: all 0.3s ease;
  flex-grow: 1;
  background-color: ${theme.colors.myLightGray};
  padding: 8px 8px;
  border-radius: 4px;
//  
  @media ${theme.media.desktop} {
    max-width: 540px;
  
  }
`

const LabelStyled = styled.label`
  font-size: 12px;
  color: #828282;

  @media ${theme.media.tablet} {
    margin-top: 40px;
  }

  @media ${theme.media.mobile} {
display: none;
  }
`

const LineAboutCollapsed = styled.div`
  border-bottom: 1px solid #BCC2C5;
  margin-top: 16px;
  margin-bottom: 48px;
  filter: blur(1px);

  @media ${theme.media.tablet} {
    margin-top: 8px;
    width: 80%;
    align-content: center;
  }

  
  @media ${theme.media.mobile} {
 margin-top: -8px;
  }
`

const NameSkillCollapse = styled.h5`
margin-bottom: 40px;
  
  
  @media ${theme.media.mobile} {
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: 400;
    margin-top: 8px;
  }
`
const TextCollapsed = styled.p`

margin-bottom: 40px;

  @media ${theme.media.mobile} {

    
  }
`
