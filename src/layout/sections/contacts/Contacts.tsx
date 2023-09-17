import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {ButtonEllips, ButtonOne, ButtonStroke} from "../../../components/buttons/Button";
import {Container} from "../../../components/container/Container";
import photo from "../../../assets/images/myImg.jpg";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Line} from "../../../components/Line/Line";

export const Contacts = () => {
    return (
        <StyledContact>
            <Container>
                <FlexWrapper>
                    <Line/>
                    <StyledForm>
                        <Line/>
                        <StyledLabel>01<StyledText>What’s your name?</StyledText></StyledLabel>
                        <Field placeholder={"Ivan Ivanov"}/>
                        <Line/>
                        <StyledLabel>02<StyledText>What’s your email?</StyledText></StyledLabel>
                        <Field placeholder={"Ivan.Ivanov@gmail.com *"}/>
                        <Line/>
                        <StyledLabel>03<StyledText>Your message...</StyledText></StyledLabel>
                        <Field placeholder={"Hello Uladzimir ... *"} as={'textarea'}/>
                        <StyledContentEdit contentEditable='true' data-placeholder={'hi'}></StyledContentEdit>
                        <Line/>
                        <ButtonEllipsContact type={'submit'}>Send Message</ButtonEllipsContact>
                        <ButtonStroke>
                            <a href='tel:+380441111111'>+380441111111</a>
                    </ButtonStroke>
                        <ButtonStroke>
                            <a href='inplace@gmail.com'>inplvce@gmail.com</a>
                        </ButtonStroke>
                    </StyledForm>
                </FlexWrapper>
            </Container>

        </StyledContact>
    );
};

const StyledContact = styled.section`
  min-height: 50vh;
  display: flex;
align-content: flex-start;
  background-color: #1A1B1D;
  //background-color: blanchedalmond;

`

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;
`

const Field = styled.input`
  background-color: #1A1B1D;
  border: 0;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 225.023%; /* 40.504px */
  letter-spacing: 0.36px;
  margin-left: 54px;
`
const StyledContentEdit = styled.div`
  width: 900px;
  height: 120px;

  [contenteditable]:empty:before {
    content: attr(data-placeholder);
    color: grey;
    display: inline-block;
  }
`
const StyledText = styled.text`
  color: white;
  margin-left: 40px;
  font-size: 16px;
`
const StyledLabel = styled.label`
  color: grey;
  text-align: left;
  font-size: 12px;
  
`

const ButtonEllipsContact = styled.button`
  border-radius: 187px;
  background: dodgerblue;
  width: 187px;
  height: 187px;
  flex-shrink: 3;
  margin-top: 20px;

  color: #FFF;
  font-family: Manrope,sans-serif;
  font-size: 1em;
  font-style: normal;
  font-weight: 500;
  line-height: 225.023%; /* 40.504px */
  letter-spacing: 0.36px;

  transition: all 0.5s ease;

  &:hover {
    color: white;
    background-color: #4625fd;
  }
`