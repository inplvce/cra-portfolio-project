import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/proj1.webp';
import timerImg from './../../../assets/images/proj2.webp';

const worksItems = ["All", "Landing Page", "React", "spa", "Design"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>
                <h2>My Works</h2>
                <Menu menuItems={worksItems}/>
                <FlexWrapper justify={"space-around"}>
                    <Work title={"Social Network"}
                          src={socialImg}
                    text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>

                    <Work title={"Timer"}
                          src={timerImg}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>

                </FlexWrapper>
            </SectionTitle>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
min-height: 100vh;
  background-color: snow;
`