import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { userSetJwt } from "../../actions/user/state/actionCreators";
import { userSelectIsLoggedIn } from "../../selectors/user";
import {
  Panel,
  Container,
  TextContainer,
  TextElement,
  LoginContent,
  LoginTray,
  LoginInner,
  LoginLink,
  ProviderName,
  LoginIcon,
  LoginHeading,
} from "./styles";
import config from "./config";
import googleLogoSrc from "../../gsuite.png";

const options = ["google"];

class Homepage extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }
  checkIfLoggedIn = () => {
    const token = Cookie.get("jwt");
    if (token) {
      this.props.userSetJwt(token);
    }
  };
  render() {
    const { loggedIn } = this.props;
    if (loggedIn) {
      return <Redirect to="/feed" />;
    }
    return (
      <Container>
        <Panel hasBackground={true}>
          <TextContainer>
            <TextElement>Explore new recipes.</TextElement>
            <TextElement>Share your recipes.</TextElement>
            <TextElement>See what your friends are cooking.</TextElement>
          </TextContainer>
        </Panel>
        <Panel>
          <LoginContent>
            <LoginHeading>See what everyone is cooking.</LoginHeading>

            <LoginTray>
              {options.map((option) => {
                const { label, href, redirect } = config[option];
                return (
                  <LoginLink
                    key={label}
                    href={`${href}/login?redirect_to=${redirect}/feed`}
                  >
                    <LoginIcon src={googleLogoSrc} />
                    <ProviderName>Login with {label}</ProviderName>
                  </LoginLink>
                );
              })}
            </LoginTray>
          </LoginContent>
        </Panel>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: userSelectIsLoggedIn(state),
});

export default connect(mapStateToProps, { userSetJwt })(Homepage);
