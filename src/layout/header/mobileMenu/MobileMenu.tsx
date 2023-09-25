import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";



export const MobileMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <ul>
                {props.menuItems.map((item, index)=>{
                    return <ListItem key={index}>
                        <Link href="">
                            {item}
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  
  <BurgerButton>
    <span></span>
  </BurgerButton>
  
    ul {
      display: flex;
      gap: 40px;
      justify-content: space-around;

    }
  
  @media ${theme.media.tablet} {
    display:  none;
  }
`

const BurgerButton = styled.button`

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
