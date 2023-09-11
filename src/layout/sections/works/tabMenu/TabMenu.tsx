import React, {useState} from 'react';
import styled from "styled-components";



export const TabMenu = (props: {menuItems: Array<string>}) => {
    const [isActive, setIactive] = useState<'All' | 'Design' | 'Development'>('All')
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
  line-height: 400%;
  
  max-width: 141px;
  width: 100%;
  height: 68px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 2px solid #E9E9E9;
  
  margin-bottom: 160px;
  
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