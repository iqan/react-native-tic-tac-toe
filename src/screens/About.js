import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

class About extends React.Component {
  static navigationOptions = {
    title: "About"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.aboutText}>
          <Text style={styles.title}>About this Game</Text>
          <Text style={styles.desc}>some more info</Text>
        </View>
        <Button title="Go to Home" onPress={() => navigate("Home")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  aboutText: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 36
  },
  desc: {
    fontSize: 24
  }
});

export default About;
