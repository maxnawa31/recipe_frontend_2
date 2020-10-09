import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import { primaryFont } from '../../../fonts';

export const NavbarMenu = styled(Menu)``;

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
