import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
            <Name>Uladzimir</Name>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon height={'16px'} width={'16px'} viewBox={"0 0 16px 16px"}
                              iconId="telegram"/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={'16px'} width={'16px'} viewBox={"0 0 16px 16px"}
                              iconId="instagram"/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={'16px'} width={'16px'} viewBox={"0 0 16px 16px"}
                              iconId="github"/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={'16px'} width={'16px'} viewBox={"0 0 16px 16px"}
                              iconId="behance"/>
                    </SocialLink>
                </SocialItem>
            </SocialList>
            <Copyright>@ Uladzimir Kaniushenka, All Right Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: black;
  color: blanchedalmond;
  min-height: 20vh;
`

const Name = styled.span`
`

const SocialList = styled.ul`
    display: flex;
  gap: 66px;
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
`

const Copyright = styled.small`
`