import { Component } from "react";
import { View, Button, Text } from "react-native";

class About extends Component {
  static navigationOptions = {
    title: "About"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>About Page</Text>
        <Button title="Go to Home" onPress={() => navigate("Home")} />
      </View>
    );
  }
}

export default About;
