import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper>
                <Skill iconId={"htmlSvg"}  title={"HTML"}/>
                <Skill iconId={"cssSvg"}  title={"CSS"}/>
                <Skill iconId={"jsSvg"}  title={"JavaScript"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: mistyrose;
  min-height: 100vh;
`
