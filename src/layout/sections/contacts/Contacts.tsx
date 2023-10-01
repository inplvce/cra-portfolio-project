import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Socials} from "../../../components/socials/Socials";
import {Details} from "../../../components/socials/details/Details";
import {theme} from "../../../styles/Theme";


export const Contacts = () => {
    return (
        <StyledContact>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <StyledForm>
                        <LineStyledContacts/>
                        <div>
                        <StyledLabel>01</StyledLabel>
                        <StyledText>What’s your name?</StyledText>
                        </div>
                        <Field placeholder={"Ivan Ivanov *"}/>
                        <LineStyledContacts/>

                        <div>
                        <StyledLabel>02</StyledLabel>
                        <StyledText>What’s your email?</StyledText>
                        </div>
                        <Field placeholder={"ivan@gmail.com *"}/>
                        <LineStyledContacts/>

                        <div>
                        <StyledLabel>03</StyledLabel>
                        <StyledText>What's the name of your organization?</StyledText>
                        </div>
                        <Field placeholder={"Ivan & Ivan"}/>
                        <LineStyledContacts/>

                        <div>
                        <StyledLabel>04</StyledLabel>
                        <StyledText>Your message...</StyledText>
                        </div>
                        {/*<Field type={'message'} contentEditable='true' placeholder={'Hello Uladzimir, let\'s start working together... *'} />*/}
                        <StyledContentEdit contentEditable="true"
                                           placeholder={'Hello Uladzimir let\'s start working together... *'}
                                           as={"textarea"}></StyledContentEdit>
                        <LineStyledContacts/>
                        <StyledBlockForButton>
                            <ButtonEllipsContact type={'submit'}>Send it!</ButtonEllipsContact>
                        </StyledBlockForButton>
                    </StyledForm>


                    <StyledContacts>
                        <Details/>
                        <Socials/>
                    </StyledContacts>
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  display: flex;
  //justify-content: space-a;
  min-height: 100vh;
  margin: -2px 0;
  //flex-wrap: revert;
  background-color:#1A1B1D;


  //background-color: blanchedalmond;

`

const StyledForm = styled.form`
  max-width: 700px;
  width: 100%;
  display: flex;
 justify-content: left;
  flex-direction: column;
  align-items: start;
  gap: 10px;

`

const StyledContacts = styled.div`
display: flex;
  flex-direction: column;

  @media ${theme.media.mobile} {
    order: -1;
   
  }

  @media ${theme.media.tablet} {
    order: -1;

  }
`

const Field = styled.input`
  color: #F0F4F6;
  background-color: #1A1B1D;
  //background-color: burlywood;
  width: calc(100% - 50px);
  margin-left: 54px;
  margin-top: 8px;

  @media ${theme.media.mobile} {

    font-size: 16px;
    margin-left: 44px;
  }
`
const StyledContentEdit = styled.textarea`
  max-width: 100%;
  height: 240px;
  //margin-top: 20px;
  //margin-left: 54px;
  color: #F0F4F6;
  outline: none;
  font-size: 24px;
  //background-color: teal;
  width: calc(100% - 50px);
  margin-left: 54px;
  margin-top: 8px;


  @media ${theme.media.mobile} {
    font-size: 16px;
    margin-left: 44px;
  }

  @media ${theme.media.tablet} {
    margin-left: 44px;
  }
`


const StyledText = styled.text`
  color: #F0F4F6;
  font-size: 24px;

  //background-color: teal;


  @media ${theme.media.mobile} {

    font-size: 16px;

  }
  
  //@media screen and (max-width: 768px) {
  //  width: calc(100%  / 5);
  //  
  //}
`
const StyledLabel = styled.label`
  color: #828282;
  text-align: start;
  font-size: 12px;
  order: 0;
  max-height: 400px;
margin-right: 40px;
  padding-bottom: 80px;
  //border: green solid 1px;
  //background-color: teal;
  //background-color: teal;

  @media ${theme.media.mobile} {
    margin-right: 24px;
    margin-left: 8px;
    font-size: 10px;
  }

  @media ${theme.media.tablet} {
    margin-right: 24px;
    margin-left: 8px;
    font-size: 10px;
  }
`

const ButtonEllipsContact = styled.button`
  //position: absolute;
  //right: 96px;
  //top: 40px;


  border-radius: 187px;
  background: rgba(65, 81, 253, 1);
  width: 187px;
  height: 187px;


  color: #F0F4F6;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 225.023%; /* 40.504px */
  letter-spacing: 0.36px;

  transition: all 0.5s ease;

  &:hover {
    color: #F0F4F6;
    transition: all 0.5s ease;
    background-color: rgb(58, 59, 196);

  }

 @media ${theme.media.mobile} {
   width: 140px;
   height: 140px;
 }
`
const LineStyledContacts = styled.div`

  border-bottom: 1.6px solid #333436;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;
  //filter: blur(1px);
  
  @media ${theme.media.mobile} {
    margin-top: 32px;
    margin-bottom: 32px;
  }

  @media ${theme.media.tablet} {
    width: 100%;
  }
`

const StyledBlockForButton = styled.div`
  display: flex;
  flex-direction: row;
justify-content: right;

  width: 100%;
  margin-top: -80px;
`
