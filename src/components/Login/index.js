import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MainLogin from './Main';
import { userSelectIsLoggedIn } from '../../selectors/user';

export const Login = ({ theme, loggedIn, match }) => {
  console.log("INSIDE")
  return loggedIn ? <Redirect to="/" /> : <MainLogin />;
};

const mapStateToProps = state => ({
  loggedIn: userSelectIsLoggedIn(state)
});

export default connect(mapStateToProps)(Login);
