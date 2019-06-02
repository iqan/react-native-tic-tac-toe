import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Home Page</Text>
        <Button title="Go to About" onPress={() => navigate("About")} />
      </View>
    );
  }
}
