import styled from "styled-components";

type FlexWrapperPropsType = {
direction?: string
    justifay?: string
    align?: string
    wrap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justifay || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  //background-color: snow;
  `