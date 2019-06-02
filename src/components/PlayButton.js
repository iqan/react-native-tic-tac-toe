import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import PropTypes from "prop-types";

class PlayButton extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={null}>
        <View style={styles.container}>
          <Text style={styles.text}>X</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

PlayButton.propTypes = {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    height: 75,
    width: 75,
    alignItems: "center"
  },
  text: {
    fontSize: 48
  }
});

export default PlayButton;
