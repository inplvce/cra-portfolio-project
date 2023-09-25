import React, {useState} from 'react';
import styled from "styled-components";
import {LinkStyled} from "../../../../components/Link";



export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index)=>{
                    return <ListItem key={index}>
                        <LinkStyled href="">{item}</LinkStyled>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};


const StyledTabMenu = styled.nav`
  ul {

    display: flex;
    gap: 32px;
    //justify-content: space-around;
    text-align: right;
    
  }
`
const ListItem = styled.li`
  color: #1A1B1D;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.54px;
  text-transform: uppercase;
  position: relative;
  margin-right: 24px;
  margin-bottom: 40px;

  transition: all 0.5s ease;

  &:hover {
    transition: all 0.3s ease;
  }
  
`

