import React, { Component } from 'react';
import { NavbarMenu, NavbarLink, NavbarMenuWrapper } from './styles';

const navLinks = [
  {
    to: '/',
    text: 'Home',
    key: 'home'
  },
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

class MobileNav extends Component {
  state = {
    isOpen: false
  };

  handleStateChange = state => {
    this.setState({ isOpen: state.isOpen });
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const { isOpen } = this.state;
    return (
      <NavbarMenuWrapper>
        <NavbarMenu
          onStateChange={state => this.handleStateChange(state)}
          isOpen={isOpen}
        >
          {navLinks.map(({ to, text, key }) => (
            <NavbarLink
              onClick={this.closeMenu}
              to={to}
              key={key}
              className="menu-item"
            >
              {text}
            </NavbarLink>
          ))}
        </NavbarMenu>
      </NavbarMenuWrapper>
    );
  }
}

export default MobileNav;
