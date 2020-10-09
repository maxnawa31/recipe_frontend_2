import styled from 'styled-components';
import { primaryFont } from '../../../fonts';

export const LoginContainer = styled.div`
  border: 1px solid black;
  border-radius: 2%;
  height: 20rem;
  width: 20rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LoginHeading = styled.div`
  color: black;
  font: 1.2rem ${primaryFont};
  text-align: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginInputContainer = styled.div`
  height: fit-content;
  width: fit-content;
  position: relative;
  margin-top: 1rem;
`;

export const LoginInput = styled.input`
  font: 1rem ${primaryFont};
  outline: none;
  padding-top: 0.5rem;
  height: 2rem;
  width: 100%;
  padding-left: 0.5rem;
  border: 1px solid black;
  &:focus + label {
    font-size: 0.5rem;
    top: 0;
    display: block;
  }
`;

export const LoginInputLabel = styled.label`
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  height: fit-content;
  position: absolute;
  left: 0rem;
  bottom: 25%;
`;
