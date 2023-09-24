import React from 'react';
import {Line} from "../../../components/Line/Line";
import styled from "styled-components";

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
`

const LabelStyled = styled.label`
  font-size: 12px;
  color: #828282;
`

const LineAboutCollapsed = styled.div`
  border-bottom: 1px solid #BCC2C5;
  margin-top: 32px;
  margin-bottom: 24px;
`

const NameSkillCollapse = styled.h5`
margin-bottom: 40px;
`
const TextCollapsed = styled.text`
margin-bottom: 180px;

`
