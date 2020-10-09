import styled from 'styled-components';
import { primaryFont } from '../../../../fonts';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  width: 100%;
`;

export const FormInputContainer = styled.div`
  height: fit-content;
  width: 75%;
  position: relative;
  margin-top: 1rem;
`;

export const FormInput = styled.input`
  font: 1rem ${primaryFont};
  outline: none;
  height: 2.5rem;
  width: 100%;
  background-color: white;
  padding-left: 0.5rem;
  border: 1px solid black;
`;

export const FormInputLabel = styled.label`
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  height: fit-content;
  position: absolute;
  left: 0rem;
  bottom: 25%;
  ${({ touched }) =>
    touched
      ? `
  font-size: 0.5rem;
  top: 0;
`
      : null}
`;

export const FormSubmit = styled.button`
  height: 2.5rem;
  width: 50%;
  background-color: white;
  margin-top: 1.5rem;
  border: 1px solid black;
  cursor: pointer;
  outline: none;
`;
