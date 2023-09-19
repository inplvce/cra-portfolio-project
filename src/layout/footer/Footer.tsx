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
                    <StyledBlocksFoote>
                        <CopyrightBlock>
                            <Copyright>@ Uladzimir Kaniushenka, All Right Reserved.</Copyright>
                        </CopyrightBlock>
                        <SocialsFooter>
                            <TextStyled href='Behance'>Behance</TextStyled>
                            <TextStyled href='Instagram'>Instagram</TextStyled>
                            <TextStyled href='LinkedIn'>LinkedIn</TextStyled>
                            <TextStyled href='Telegram'>Telegram</TextStyled>
                        </SocialsFooter>
                    </StyledBlocksFoote>

                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledBlocksFoote = styled.span`
  display: flex;
  justify-content: space-between;

  max-width: 1140px;
  width: 100%;
  

`

const StyledFooter = styled.footer`
  background-color: #1A1B1D;
  color: #F0F4F6;
  min-height: 20vh;
  padding-top: 240px;
  padding-bottom: 16px;
`

const Name = styled.span`
`

const SocialList = styled.ul`


`

const SocialItem = styled.li`

`

const SocialLink = styled.a`
`

const Copyright = styled.small`

`

const SocialsFooter = styled.div`
  display: flex;
  justify-content: right;
  gap: 24px;
  margin-left: 24px;



`

const TextStyled = styled.a`
  font-size: 12px;
`

const CopyrightBlock = styled.div`

`