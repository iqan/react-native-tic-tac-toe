import React from "react";
import { View, Text, Button } from "react-native";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { doLogin } from "../redux/actions";

class Login extends React.Component {
  handleLogin = l => {
    this.props.onLogin(l);
  };
  render() {
    return (
      <View>
        <Text>Login page</Text>
        <Text>{this.props.isLoggedIn ? "Logged in" : "Not logged in"}</Text>
        <Button
          title="Login"
          onPress={() => {
            this.handleLogin();
          }}
        />
      </View>
    );
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { isLoggedIn } = state.login;
  return { isLoggedIn };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: l => dispatch(dologin())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
