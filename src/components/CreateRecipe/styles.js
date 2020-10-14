import { Editable } from "slate-react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid black;
  border-radius: 2.5px;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-weight: bold;
  border-bottom: 1px solid black;
  background-color: #f5dfdf;
`;

export const StyledEditable = styled(Editable)`
  // border: 1px solid black;
  padding: 1rem;
`;

export const Button = styled.span`
  color: ${({ active }) => (active ? "black" : "rgb(204, 204, 204)")};
  cursor: pointer;
  margin-right: 0.4rem;
`;

export const SubmitButton = styled.button`
  border-radius: 3px;
  text-transform: uppercase;
  background-color: #e1ffff;
  text-decoration: none;
  outline: inherit;
  cursor: pointer;
  border: none;
  border: 0.2px solid black;
`;
