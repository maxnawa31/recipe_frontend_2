import styled from "styled-components";

export const StyledButton = styled.span`
  cursor: pointer;
  color: ${({ reversed, active }) =>
    reversed ? (active ? "white" : "#aaa") : active ? "black" : "#ccc"};
`;

export const StyledIcon = styled.span`
  font-size: 18px;
  vertical-align: text-bottom;
`;
