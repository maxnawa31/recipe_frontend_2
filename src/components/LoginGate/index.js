import React, { Component } from "react";
import { connect } from "react-redux";
import Cookie from "js-cookie";
import { Redirect } from "react-router-dom";
import { userSetJwt } from "../../actions/user/state/actionCreators";
import { userSelectIsLoggedIn } from "../../selectors/user";
import axios from "axios";

export class LoginGate extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }
  checkIfLoggedIn = () => {
    console.log("hello");
    const token = Cookie.get("jwt");
    if (token) {
      this.props.userSetJwt(token);
      axios.interceptors.request.use(
        (config) => {
          config.headers.Authorization = `Bearer ${token}`;
          console.log(config);
          return config;
        },
        (err) => {
          return Promise.reject(err);
        }
      );
    }
  };

  render() {
    const { loggedIn } = this.props;
    console.log(loggedIn, "LOGGED IN");
    if (loggedIn) {
      return this.props.children;
    } else {
      console.log("redirect");
      return <Redirect to="/login" />;
    }
  }
}
const mapStateToProps = (state) => ({
  loggedIn: userSelectIsLoggedIn(state),
});

export default connect(mapStateToProps, { userSetJwt })(LoginGate);
