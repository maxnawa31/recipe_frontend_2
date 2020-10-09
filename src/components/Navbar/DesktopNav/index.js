import React, { Component } from 'react';
import {
  NavbarContainer,
  Logo,
  NavbarLinkContainer,
  NavbarLink,
  NavbarRightPortion
} from './styles';

const navLinks = [
  {
    to: '/login',
    text: 'Login',
    key: 'login'
  },
  {
    to: '/signup',
    text: 'Signup',
    key: 'signup'
  }
];

class DesktopNav extends Component {
  render() {
    return (
      <NavbarContainer>
        <Logo>Daily Tunes</Logo>
        <NavbarRightPortion>
          {navLinks.map(({ to, text, key }) => (
            <NavbarLinkContainer key={key}>
              <NavbarLink to={to}>{text}</NavbarLink>
            </NavbarLinkContainer>
          ))}
        </NavbarRightPortion>
      </NavbarContainer>
    );
  }
}

export default DesktopNav;
