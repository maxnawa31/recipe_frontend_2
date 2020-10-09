import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import { primaryFont } from '../../fonts';

export const NavbarMenuWrapper = styled.div`
  margin-bottom: 5rem;
  & .bm-burger-button {
    position: fixed;
    width: 32px;
    height: 25px;
    left: 28px;
    top: 36px;
    background-color: transparent;
  }
  & .bm-burger-bars {
    background: black;
  }
`;

export const NavbarMenu = styled(Menu)``;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: fit-content;
  padding: 0 2rem;
  li:nth-child(2) {
    margin-left: 2rem;
  }
`;

export const NavbarItem = styled.li`
  display: flex;
  list-style: none;
  flex-direction: column;
  justify-content: center;
  height: 4rem;
  font-family: ${primaryFont};
`;

export const NavbarLink = styled(Link)`
  && {
    text-decoration: none;
    :visited {
      color: black;
    }
    margin: 0.75em;
    padding: 1.35em 1.1em;
    width: 15em;
    background: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    font: 800 1rem ${primaryFont};
    outline: none;
    cursor: pointer;
  }
`;

export const NavbarPartitionContainer = styled.ul`
  display: flex;
  padding: 0;
  list-style-type: none;
  flex-direction: row;
`;
