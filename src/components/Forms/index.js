import React from 'react';
import {
  LoginContent,
  LoginMain,
  LoginHeading,
  LoginTray,
  LoginInner,
  InputContainer,
} from './styles';

function Form({ heading, fields, handleInputChange }) {
  return (
    <LoginContent>
      <LoginInner>
        <LoginTray>
          <LoginHeading>{heading}</LoginHeading>
          {fields.map(({ label, field, key }) => (
            <InputContainer key={key}>
              <label>{label}</label>
              <input onChange={handleInputChange(field)} />
            </InputContainer>
          ))}
        </LoginTray>
      </LoginInner>
    </LoginContent>
  );
}

export default Form;
