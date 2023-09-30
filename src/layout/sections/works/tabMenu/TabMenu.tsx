import React, {useState} from 'react';
import styled from "styled-components";
import {LinkStyled} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";



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
    max-width: 300px;
    width: 100%;
    //border: teal 2px solid;
    margin: 0 auto 40px;
    gap: 56px;
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
  //text-transform: uppercase;
  position: relative;



  transition: all 0.5s ease;

  &:hover {
    transition: all 0.3s ease;
  }
  
  @media ${theme.media.mobile} {
    font-size: 16px;
  }
`

