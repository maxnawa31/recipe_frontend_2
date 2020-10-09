import React, { Component } from 'react';
import { connect } from 'react-redux';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
// import { userSelectIsLoggedIn } from '../../selectors/user';

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

class Navbar extends Component {
  state = {
    isOpen: false,
    isMobileWidth: false
  };

  componentDidMount() {
    this.handleScreenWidthChange();
    window.addEventListener('resize', this.handleScreenWidthChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleScreenWidthChange);
  }

  handleScreenWidthChange = () =>
    this.setState({
      isMobileWidth: window.innerWidth < 700
    });

  handleStateChange = state => {
    this.setState({ isOpen: state.isOpen });
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const { isOpen, isMobileWidth } = this.state;
    // const { loggedIn } = this.props;
    return isMobileWidth ? <MobileNav /> : <DesktopNav />;
  }
}

// const mapStateToProps = state => ({
//   loggedIn: userSelectIsLoggedIn(state)
// });

export default connect(null, null)(Navbar);
