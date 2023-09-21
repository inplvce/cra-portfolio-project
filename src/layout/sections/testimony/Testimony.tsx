import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Box>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={'column'} align={"center"}>
                <Icon iconId={"#"}/>
                <Slider/>
            </FlexWrapper>
            </Box>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  min-height: 50vh;
  background-color: snow;
  display: flex;
  justify-content: center;
  //background-color: lightblue;
  
  
`
const Box = styled.div`
  border: 4px solid;
position: relative;
  padding: 20px;
  
  
  ::before {

  }
  
  ::after {
content: url();

    width: 400px;
    height: 300px;
    background-image: url("https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
    position: absolute;
    top: 102px;
    right: -170px;
  
  }
  
`

