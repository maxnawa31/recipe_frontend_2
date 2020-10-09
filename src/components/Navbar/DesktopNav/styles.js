import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primaryFont } from '../../../fonts';

export const NavbarContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 4rem;
  padding-left: 3rem;
  justify-content: space-between;
  background: white;
  border-bottom: 1px solid black;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  width: 375px;
  height: 56px;
  text-decoration: none;
  font: 500 1.4rem ${primaryFont};
  text-decoration: none;
  :visited {
    color: black;
  }
`;

export const NavbarRightPortion = styled.div`
  display: flex;
  min-width: 20rem;
  padding-right: 3rem;
  justify-content: space-between;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 2rem;
  justify-content: center;
  margin-left: 0px;
`;

export const NavbarLink = styled(Link)`
  text-transform: capitalize;
  color: black;
  text-decoration: none;
  font: 500 1.4rem ${primaryFont};
  text-decoration: none;
  :visited {
    color: black;
  }
`;
