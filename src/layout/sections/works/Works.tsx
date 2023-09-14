import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {TitleWorkStyled, Work} from "./work/Work";


import {Container} from "../../../components/container/Container";
import {Line} from "../../../components/Line/Line";
import {ButtonStroke} from "../../../components/buttons/Button";

const worksItems = ["All", "Design", "Development"]

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>
                    <StyledTopTitleWork>
                        Work
                    </StyledTopTitleWork>
                    <Line/>
                    <TitleWorkStyled>I create designs, visual identity,
                        applications, websites</TitleWorkStyled>
                    {/*<ButtonOneSmall>All</ButtonOneSmall>*/}
                    {/*<ButtonStrokeSmall>Design</ButtonStrokeSmall>*/}
                    {/*<ButtonStrokeSmallDevelopment>Development</ButtonStrokeSmallDevelopment>*/}
                    <TabMenu menuItems={worksItems}/>
                    <FlexWrapper justify={"space-between"}>
                        <Work title={"Name Project One"}
                              src={'#'}
                              text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>

                        <Work title={"Name Project Two"}
                              src={'#'}
                              text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                        <ButtonStrokeWorks>More Work</ButtonStrokeWorks>
                    </FlexWrapper>
                </SectionTitle>
            </Container>

        </StyledWorks>
    );
};


const StyledWorks = styled.section`
  min-height: 100vh;
  //background-color: snow;
`

const StyledTopTitleWork = styled.h2`
  width: 63px;
  flex-wrap: wrap;
  margin-top: 40px;

  color: #BCC2C5;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150.023%; /* 28.504px */
  letter-spacing: -0.665px;
`

const WorksItems = styled.button`
  color: green;
`

export const ButtonStrokeWorks = styled.button`
  width: 180px;
  height: 80px;
  flex-shrink: 0;
  color: #2B2C2D;
  text-align: center;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.54px;
  text-transform: capitalize;

  border-radius: 40px;
  border: 2px solid #E9E9E9;
  transition: all 0.5s ease;
  margin-top: 80px;
  margin-bottom: 124px;
  
  &:hover {
    border-radius: 40px;
    border: 2px solid dodgerblue;
`