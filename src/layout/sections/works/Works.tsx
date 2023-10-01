import React, {useState} from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {TitleWorkStyled, Work} from "./work/Work";


import {Container} from "../../../components/container/Container";
import {Line} from "../../../components/Line/Line";
import {ButtonStroke} from "../../../components/buttons/Button";
import {theme} from "../../../styles/Theme";

const worksItems = ["All", "Design", "Development"]

export const Works = () => {
    const [isOpen, setIsOpen] = useState(false);
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
                    <TabContainer><TabMenu menuItems={worksItems}/></TabContainer>
                    <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                        {/*<GridWrapper>*/}
                        <Work title={"Project ONE"}
                              src={'https://images.pexels.com/photos/1312488/pexels-photo-1312488.jpeg?auto=compress&cs=tinysrgb&w=400'}
                              text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>

                        <Work title={"Project Two"}
                              src={'https://images.pexels.com/photos/1255372/pexels-photo-1255372.jpeg?auto=compress&cs=tinysrgb&w=400'}
                              text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>

                        {isOpen &&
                            <Work title={"Project GOOD"}
                                  src={'https://images.pexels.com/photos/1070534/pexels-photo-1070534.jpeg?auto=compress&cs=tinysrgb&w=400'}
                                  text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                        }
                        {isOpen && <Work title={"Project"}
                                         src={'https://images.pexels.com/photos/1416367/pexels-photo-1416367.jpeg?auto=compress&cs=tinysrgb&w=400'}
                                         text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>}

                    {/*</GridWrapper>*/}
                    </FlexWrapper>
                    <StyledButtonMoreWork onClick={() => setIsOpen(prev => !prev)}>
                        <ButtonStrokeWorks>
                            {isOpen ? '⌃' : 'More Work'}
                        </ButtonStrokeWorks>
                    </StyledButtonMoreWork>
                </SectionTitle>
            </Container>

        </StyledWorks>
    );
};

const TabContainer = styled.div`
  margin-left: 24px;
`

const StyledButtonMoreWork = styled.div`;
  display: flex;
  justify-content: center;


`

const StyledWorks = styled.section`
${FlexWrapper} {
  gap: 30px;
  
}
  //background-color: snow;

`

const StyledTopTitleWork = styled.h3`
  width: 63px;
  flex-wrap: wrap;

  color: #BCC2C5;
  font-family: Manrope, sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 150.023%; /* 28.504px */
  letter-spacing: -0.665px;

  @media ${theme.media.tablet} {
    margin-top: -24px;
  }

  
  @media ${theme.media.mobile} {
    margin-top: -40px;
  }
`


export const ButtonStrokeWorks = styled.button`
  width: 180px;
  height: 80px;
  flex-shrink: 0;
  color: white;
  text-align: center;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.54px;
  text-transform: capitalize;
  border-radius: 40px;
  transition: all 0.5s ease;
  margin-top: 80px;
  margin-bottom: 124px;
  background-color: #1A1B1D;

  &:hover {
    border-radius: 40px;
    background-color: rgba(37, 72, 248, 0.83);
`
