import React from 'react';
import styled from "styled-components";
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
                <FlexWrapper justify={"space-between"}>
                    <StyledForm>
                        <LineStyledContacts/>
                        {/*<StyledLabel>01</StyledLabel>*/}
                        <StyledText>What’s your name?</StyledText>
                        <Field placeholder={"Ivan Ivanov *"}/>
                        <LineStyledContacts/>

                        {/*<StyledLabel>02</StyledLabel>*/}
                        <StyledText>What’s your email?</StyledText>
                        <Field placeholder={"ivan@gmail.com *"}/>
                        <LineStyledContacts/>

                        {/*<StyledLabel>03</StyledLabel>*/}
                        <StyledText>What's the name of your organization?</StyledText>
                        <Field placeholder={"Ivan & Ivan"}/>
                        <LineStyledContacts/>

                        {/*<StyledLabel>04</StyledLabel>*/}
                        <StyledText>Your message...</StyledText>
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
  min-height: 100vh;
  //flex-wrap: revert;
  background-color:#1A1B1D;


  //background-color: blanchedalmond;

`

const StyledForm = styled.form`
  max-width: 640px;
  width: 100%;
  display: flex;
 justify-content: left;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  //object-fit: cover;
  margin: 0 auto;
`

const StyledContacts = styled.div`
display: flex;
  flex-direction: column;
  

`

const Field = styled.input`
  color: #F0F4F6;
  width: 100%;
  background-color: #1A1B1D;

`
const StyledContentEdit = styled.textarea`
  max-width: 100%;
  height: 240px;
  //margin-top: 20px;
  //margin-left: 54px;
  color: #F0F4F6;
  outline: none;
  font-size: 24px;


  //
  //[contentEditable]:empty:before {
  //    
  //    content: attr(placeholder);
  //  color: #ffffff;
  //  }

`


const StyledText = styled.text`
  color: #F0F4F6;
  //margin-left: 40px;
  font-size: 24px;
`
const StyledLabel = styled.label`
  color: #828282;
  text-align: left;
  font-size: 12px;
  order: 0;



`

const ButtonEllipsContact = styled.button`
  //position: absolute;
  //right: 96px;
  //top: 40px;


  border-radius: 187px;
  background: dodgerblue;
  width: 187px;
  height: 187px;


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
    background-color: rgba(65, 81, 253, 1);
    transform: scale(1.1);
  }
`
const LineStyledContacts = styled.div`

  border-bottom: 1px solid #828282;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;
`

const StyledBlockForButton = styled.div`
  display: flex;
  flex-direction: row;
justify-content: right;

  width: 100%;
  margin-top: -160px;
`
