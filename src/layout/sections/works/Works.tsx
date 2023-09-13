import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {TitleWorkStyled, Work} from "./work/Work";


import {Container} from "../../../components/container/Container";

const worksItems = ["All", "Design", "Development"]

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>
                    <StyledTopTitleWork>
                        Work
                    </StyledTopTitleWork>
                    <LineStyled/>
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

                    </FlexWrapper>
                </SectionTitle>
            </Container>
        </StyledWorks>
    );
};



const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: snow;
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
const LineStyled = styled.div`
  border-bottom: 1px solid #BCC2C5;
  margin-top: 8px;
  margin-bottom: 80px;
`
const WorksItems = styled.button`
  color: green;
`