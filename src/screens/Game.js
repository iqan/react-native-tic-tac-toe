import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import Components from "../components";

class Game extends React.Component {
  static navigationOptions = {
    title: "Game"
  };

  state = {
    moves: ["", "", "", "", "", "", "", "", ""],
    turn: "X",
    result: ""
  };

  onPlayed = e => {
    console.log("played", e);
    console.log("state", this.state);

    if (this.state.moves[e] !== "" || this.state.result !== "") {
      return;
    }
    this.state.moves[e] = this.state.turn;

    if (this.playerWinner("X")) {
      this.setState({
        result: "Player X won"
      });
      return;
    }

    if (this.playerWinner("O")) {
      this.setState({
        result: "Player O won"
      });
      return;
    }

    if (this.isDraw()) {
      this.setState({
        result: "Game draw"
      });
      return;
    }

    this.setState({
      moves: this.state.moves,
      turn: this.state.turn === "X" ? "O" : "X"
    });
  };

  isDraw = () => {
    return this.state.moves.indexOf("") == -1;
  };

  playerWinner = player => {
    if (
      (this.state.moves[0] === player &&
        this.state.moves[1] === player &&
        this.state.moves[2] === player) ||
      (this.state.moves[3] === player &&
        this.state.moves[4] === player &&
        this.state.moves[5] === player) ||
      (this.state.moves[6] === player &&
        this.state.moves[7] === player &&
        this.state.moves[8] === player) ||
      (this.state.moves[0] === player &&
        this.state.moves[3] === player &&
        this.state.moves[6] === player) ||
      (this.state.moves[1] === player &&
        this.state.moves[4] === player &&
        this.state.moves[7] === player) ||
      (this.state.moves[2] === player &&
        this.state.moves[5] === player &&
        this.state.moves[8] === player) ||
      (this.state.moves[0] === player &&
        this.state.moves[4] === player &&
        this.state.moves[8] === player) ||
      (this.state.moves[2] === player &&
        this.state.moves[4] === player &&
        this.state.moves[6] === player)
    ) {
      return true;
    }
    return false;
  };

  onRestart = e => {
    console.log("restarting");
    this.setState({
      moves: ["", "", "", "", "", "", "", "", ""],
      turn: "X",
      result: ""
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.label}>{this.state.turn} Playing</Text>
        </View>
        <View style={styles.board}>
          <View style={styles.row}>
            <Components.PlayButton
              onPlay={this.onPlayed}
              index={0}
              value={this.state.moves[0]}
            />
            <Components.PlayButton
              onPlay={this.onPlayed}
              index={1}
              value={this.state.moves[1]}
            />
            <Components.PlayButton
              onPlay={this.onPlayed}
              index={2}
              value={this.state.moves[2]}
            />
          </View>
          <View style={styles.row}>
            <Components.PlayButton
              onPlay={this.onPlayed}
              index={3}
              value={this.state.moves[3]}
            />
            <Components.PlayButton
              onPlay={this.onPlayed}
              index={4}
              value={this.state.moves[4]}
            />
            <Components.PlayButton
              onPlay={this.onPlayed}
              index={5}
              value={this.state.moves[5]}
            />
          </View>
          <View style={styles.row}>
            <Components.PlayButton
              onPlay={this.onPlayed}
              index={6}
              value={this.state.moves[6]}
            />
            <Components.PlayButton
              onPlay={this.onPlayed}
              index={7}
              value={this.state.moves[7]}
            />
            <Components.PlayButton
              onPlay={this.onPlayed}
              index={8}
              value={this.state.moves[8]}
            />
          </View>
          {this.state.result ? (
            <View style={styles.result}>
              <Text style={styles.resultText}>{this.state.result}</Text>
            </View>
          ) : (
            <></>
          )}
        </View>
        <View style={styles.actions}>
          <Button title="Restart Game" onPress={this.onRestart} />
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
    justifyContent: "center"
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
  },
  result: {
    // position: "absolute",
    // alignSelf: "center",
    // marginTop: 200,
    margin: 20
  },
  resultText: {
    alignSelf: "center",
    fontSize: 50
  }
});

export default Game;
