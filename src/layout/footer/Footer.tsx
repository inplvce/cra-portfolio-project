import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Socials} from "../../components/socials/Socials";
import {Container} from "../../components/container/Container";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={'row'} align={'left'}>
                    {/*<Name>Uladzimir</Name>*/}
                    {/*<SocialList>*/}
                    {/*    <SocialItem>*/}
                    {/*        /!*<SocialLink>*!/*/}
                    {/*        /!*    <Icon height={'16px'} width={'16px'} viewBox={"0 0 16px 16px"}*!/*/}
                    {/*        /!*          iconId="telegram"/>*!/*/}
                    {/*        /!*</SocialLink>*!/*/}
                    {/*    </SocialItem>*/}
                    {/*    <SocialItem>*/}
                    {/*        /!*<SocialLink>*!/*/}
                    {/*        /!*    <Icon height={'16px'} width={'16px'} viewBox={"0 0 16px 16px"}*!/*/}
                    {/*        /!*          iconId="instagram"/>*!/*/}
                    {/*        /!*</SocialLink>*!/*/}
                    {/*    </SocialItem>*/}
                    {/*    <SocialItem>*/}
                    {/*        /!*<SocialLink>*!/*/}
                    {/*        /!*    <Icon height={'16px'} width={'16px'} viewBox={"0 0 16px 16px"}*!/*/}
                    {/*        /!*          iconId="github"/>*!/*/}
                    {/*        /!*</SocialLink>*!/*/}
                    {/*    </SocialItem>*/}
                    {/*    <SocialItem>*/}

                    {/*        /!*<SocialLink>*!/*/}
                    {/*        /!*    <Icon height={'16px'} width={'16px'} viewBox={"0 0 16px 16px"}*!/*/}
                    {/*        /!*          iconId="behance"/>*!/*/}
                    {/*        /!*</SocialLink>*!/*/}
                    {/*    </SocialItem>*/}
                    {/*</SocialList>*/}

                    <CopyrightBlock>
                        <Copyright>@ Uladzimir Kaniushenka, All Right Reserved.</Copyright>
                    </CopyrightBlock>
                    <SocialsFooter>
                        <TextStyled href='Behance'>Behance</TextStyled>
                        <TextStyled href='Instagram'>Instagram</TextStyled>
                        <TextStyled href='LinkedIn'>LinkedIn</TextStyled>
                        <TextStyled href='Telegram'>Telegram</TextStyled>
                    </SocialsFooter>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #1A1B1D;
  color: #F0F4F6;
  min-height: 20vh;
  padding-top: 180px;
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

const SocialsFooter = styled.div`
display: flex;
  gap: 24px;
  max-width: 500px;
  width: 100%;
  text-align: left;
 margin-left: 24px;


`

const TextStyled = styled.a`
font-size: 12px;
`

const CopyrightBlock = styled.div`

  text-align: left;
`