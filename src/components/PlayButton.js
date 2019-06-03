import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import PropTypes from "prop-types";

class PlayButton extends React.Component {
  render() {
    const { index, value, onPlay } = this.props;
    return (
      <TouchableHighlight onPress={() => onPlay(index)}>
        <View style={styles.container}>
          <Text style={styles.text}>{value}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

PlayButton.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onPlay: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1
  },
  text: {
    fontSize: 48
  }
});

export default PlayButton;
