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
      gap: 30px;
      justify-content: center;
    }
`

const Link = styled.a`
font-family: 'Manrope', sans-serif;
  font-weight: 400px;
  font-size: 30px;
  line-height: 55px;
  
  text-align: center;
  color: ${theme.colors.primaryBg};
}

`


const ListItem = styled.li`
    

    `