import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {ButtonEllips, ButtonOne, ButtonStroke} from "../../../components/buttons/Button";
import {Container} from "../../../components/container/Container";
import photo from "../../../assets/images/myImg.jpg";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Line} from "../../../components/Line/Line";
import {Socials} from "../../../components/socials/Socials";
import {Details} from "../../../components/socials/details/Details";

export const Contacts = () => {
    return (
        <StyledContact>
            <Container>
                <FlexWrapper>
                    <StyledForm>
                        <LineStyledContacts/>
                        <StyledLabel>01<StyledText>What’s your name?</StyledText></StyledLabel>
                        <Field placeholder={"Ivan Ivanov *"}/>
                        <LineStyledContacts/>
                        <StyledLabel>02<StyledText>What’s your email?</StyledText></StyledLabel>
                        <Field placeholder={"ivan@gmail.com *"}/>
                        <LineStyledContacts/>
                        <StyledLabel>03<StyledText>What's the name of your organization?</StyledText></StyledLabel>
                        <Field placeholder={"Ivan & Ivan"}/>
                        <LineStyledContacts/>
                        <StyledLabel>04<StyledText>Your message...</StyledText></StyledLabel>
                        {/*<Field contentEditable='true' placeholder={"Hello Uladzimir ... *"} />*/}
                        <StyledContentEdit contentEditable='true' data-placeholder={'Hello Uladzimir, let\'s start working together ... *'}></StyledContentEdit>
                        <LineStyledContactsBottom/>
                        <ButtonEllipsContact type={'submit'}>Send Message</ButtonEllipsContact>
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
  min-height: 50vh;
  display: flex;
  flex-wrap: revert;
  background-color: #1A1B1D;

  
  //background-color: blanchedalmond;

`

const StyledForm = styled.form`
  max-width: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;
  
`

const StyledContacts = styled.div`
max-width: 20%;
  width: 100%;
`

const Field = styled.input`
  background-color: #1A1B1D;
  border: 0;
  font-family: Manrope, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 225.023%; /* 40.504px */
  letter-spacing: 0.36px;
  margin-left: 54px;
  color: #F0F4F6;


`

const StyledContentEdit = styled.div`
  max-width: 1040px;
  width: 70%;
  height: 420px;
  margin-top: 20px;
  margin-left: 54px;
  color: #F0F4F6;
  outline: none;
  font-size: 24px;


  [contenteditable]:empty:before {
    content: attr(data-placeholder);
    display: inline-block;

  }
`
const StyledText = styled.text`
  color: #F0F4F6;
  margin-left: 40px;
  font-size: 24px;
`
const StyledLabel = styled.label`
  color: #828282;
  text-align: left;
  font-size: 12px;

`

const ButtonEllipsContact = styled.button`
  border-radius: 187px;
  background: dodgerblue;
  width: 187px;
  height: 187px;
  flex-shrink: 3;
  margin-top: -116px;
margin-left: 440px;

  color: #F0F4F6;
  font-family: Manrope, sans-serif;
  font-size: 1em;
  font-style: normal;
  font-weight: 500;
  line-height: 225.023%; /* 40.504px */
  letter-spacing: 0.36px;

  transition: all 0.5s ease;

  &:hover {
    color: #F0F4F6;
    background-color: rgba(65,81,253,0.83);
  }
`
const LineStyledContacts = styled.div`
  border-bottom: 1px solid #828282;
  margin-top: 32px;
  margin-bottom: 40px;
  width: 80%;
`

const LineStyledContactsBottom = styled.div`
  border-bottom: 1px solid #828282;
  margin-top: 32px;
  width: 80%;
`