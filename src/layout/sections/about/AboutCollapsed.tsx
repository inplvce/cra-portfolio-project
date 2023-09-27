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
max-width: 320px;
  width: 100%;
  margin-top: 40px;
  
  @media ${theme.media.mobile} {
    margin-top: 0;
  }
`

const LabelStyled = styled.label`
  font-size: 12px;
  color: #828282;
`

const LineAboutCollapsed = styled.div`
  border-bottom: 1px solid #BCC2C5;
  margin-top: 8px;
  margin-bottom: 24px;

  @media ${theme.media.mobile} {
    margin-top: 4px;
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
    margin-bottom: 32px;
    
  }
`
