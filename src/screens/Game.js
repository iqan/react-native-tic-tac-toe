import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import Components from "../components";

class Game extends React.Component {
  static navigationOptions = {
    title: "Game"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.label}>Let's play!</Text>
        </View>
        <View style={styles.board}>
          <View style={styles.row}>
            <Components.PlayButton />
            <Components.PlayButton />
            <Components.PlayButton />
          </View>
          <View style={styles.row}>
            <Components.PlayButton />
            <Components.PlayButton />
            <Components.PlayButton />
          </View>
          <View style={styles.row}>
            <Components.PlayButton />
            <Components.PlayButton />
            <Components.PlayButton />
          </View>
        </View>
        <View style={styles.actions}>
          <Button title="Restart Game" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  info: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  board: {
    flex: 3
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 20
  },
  actions: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  actionText: {
    fontSize: 36
  },
  label: {
    fontSize: 42
  }
});

export default Game;
