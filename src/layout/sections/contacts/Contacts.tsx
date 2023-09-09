import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {ButtonOne} from "../../../components/buttons/Button";

export const Contacts = () => {
    return (
        <StyledContact>
            <SectionTitle>
                Contact
            </SectionTitle>
            <StyledForm>
                <Field placeholder={"name"}/>
                <Field placeholder={"subject"}/>
                <Field placeholder={"message"} as={'textarea'}/>
                <StyledContentEdit contentEditable='true' data-placeholder={'hi'}></StyledContentEdit>
                <button type={'submit'}>Send Message</button>
            </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.section`
min-height: 50vh;
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
