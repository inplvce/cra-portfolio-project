import React from 'react';
import styled from "styled-components";

export const Slider = () => {
    return (
        <StyleSlider>
            <Slide>
                <Text>“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”</Text>
                <Name>@ivan ivanov</Name>
            </Slide>
        </StyleSlider>
    );
};

const StyleSlider = styled.div`
border: 1px solid darkmagenta;
  max-width: 500px;

`
const Slide = styled.div`
  text-align: center;

`



const Text = styled.p`


`
const Name = styled.span`
  

`
