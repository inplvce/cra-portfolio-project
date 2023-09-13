import React, {useState} from 'react';
import styled from "styled-components";



export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index)=>{
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};


const StyledTabMenu = styled.nav`
    ul {
      
      display: flex;
      gap: 30px;
      justify-content: center;
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
  

  
`

const Link = styled.a`
  color: #1A1B1D;
  text-align: center;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.54px;
  text-transform: capitalize;
  

`