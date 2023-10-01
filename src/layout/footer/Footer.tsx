import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Socials} from "../../components/socials/Socials";
import {Container} from "../../components/container/Container";
import {theme} from "../../styles/Theme";

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
                    <StyledBlocksFooter>

                        <SocialsFooter>
                            <TextStyled href='Behance'>Behance</TextStyled>
                            <TextStyled href='Instagram'>Instagram</TextStyled>
                            <TextStyled href='LinkedIn'>LinkedIn</TextStyled>
                            <TextStyled href='Telegram'>Telegram</TextStyled>
                        </SocialsFooter>
                        <CopyrightBlock>
                            <Copyright>2023 © Edition.</Copyright>
                        </CopyrightBlock>
                    </StyledBlocksFooter>

                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledBlocksFooter = styled.span`
  display: flex;
  justify-content: space-between;
text-align: center;
  max-width: 1140px;
  width: 100%;
  
  @media ${theme.media.mobile} {
    display: table-column;
    justify-content: center;
    text-align: center;
    margin-bottom: -24px;
  }
  
`


const StyledFooter = styled.footer`
  background-color: #1A1B1D;
  color: #F0F4F6;
  min-height: auto;
  padding-top: 32px;
  padding-bottom: 32px;
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
  flex-direction: row;
  justify-content: center;
  gap: 24px;

  @media ${theme.media.mobile} {
    margin-bottom: 8px;
  }
  
`

const TextStyled = styled.a`
  font-size: 12px;

`

const CopyrightBlock = styled.div`

`