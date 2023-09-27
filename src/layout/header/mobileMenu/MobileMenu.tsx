import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span>
                    <text></text>
                </span>
            </BurgerButton>

            <MobileMenuPopup isOpen={false}>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">
                            {item}
                        </Link>
                    </ListItem>
                })}
            </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  display: block;
  
  
  @media ${theme.media.tablet} {
    display: none;
    height: 100vh;

  }
`
const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999999999;

  span {
    display: block;
    width: 32px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean}>`

      background-color: rgba(255, 255, 255, 0);
    `}
    
    &::before {
      content: '';
      display: block;
      width: 32px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: scaleY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 32px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 32px;
      `}
    }
  }
`


const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;   
  z-index: 99999;
  background-color: rgba(31, 31, 32, 0.9);
  display: none;
  
  ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
  `
}
  
  
  ul {
    display: flex;
    gap: 40px;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
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
