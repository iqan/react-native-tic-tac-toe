import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class Home extends React.Component {
  static navigationOptions = {
    title: "Tic Tac Toe"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.home}>
        <View style={styles.top}>
          <Text style={{ fontSize: 48 }}>Let's Play</Text>
        </View>
        <View style={styles.bottom}>
          <Button title="Play" onPress={() => navigate("Game")} />
          <View style={{ height: 20 }} />
          <Button
            title="About Game"
            onPress={() => navigate("About")}
            color="green"
          />
          <View style={{ height: 20 }} />
          <Button
            title="Login"
            onPress={() => navigate("Login")}
            color="orange"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  top: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  bottom: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    margin: 50
  }
});

export default Home;
