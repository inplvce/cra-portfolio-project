import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/proj1.webp';
import timerImg from './../../../assets/images/proj2.webp';
import {
    ButtonOne,
    ButtonOneSmall,
    ButtonStrokeSmall,
    ButtonStrokeSmallDevelopment
} from "../../../components/buttons/Button";
import {Container} from "../../../components/container/Container";

const worksItems = ["All", "Design", "Development"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>
                <Container>
                <StyledTopTitleWork>
                    Work
                </StyledTopTitleWork>
                <LineStyled />
                </Container>
                {/*<ButtonOneSmall>All</ButtonOneSmall>*/}
                {/*<ButtonStrokeSmall>Design</ButtonStrokeSmall>*/}
                {/*<ButtonStrokeSmallDevelopment>Development</ButtonStrokeSmallDevelopment>*/}
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

const StyledTopTitleWork = styled.h3`
  width: 63px;
  flex-wrap: wrap;

  color: #BCC2C5;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150.023%; /* 28.504px */
  letter-spacing: -0.665px;
`
const LineStyled = styled.div`
  border-bottom: 1px solid #BCC2C5;
  margin-top: 8px;
  margin-bottom: 80px;
`