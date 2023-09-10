import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";



export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index)=>{
                    return <ListItem key={index}>
                        <Link href="">
                            {item}
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
      display: flex;
      gap: 40px;
      justify-content: center;
    }
`

const Link = styled.a`
  color: #828282;
  text-align: center;
  font-family: Manrope, sans-serif;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: 55%;
  letter-spacing: 0.57px;
  text-transform: capitalize;
  transition: all 0.5s ease;
  
  &:hover {
    color: #111;
    transition: all 0.5s ease;
  }

`


const ListItem = styled.li`
    

    `
