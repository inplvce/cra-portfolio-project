import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/container/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const items = ["About", "Works", "Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={'items'}>
            <Logo/>
            <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background: rgb(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  
  padding: 30px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999999;

`
