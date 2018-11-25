import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../style/containers/bottombuttons.js";

export default class BottomButtons extends Component {
  render() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.bubble, styles.button]}>
          <Text
            style={[styles.textbutton, styles.locate]}
            onPress={() => this.props.setroute(true)}
          >
            Locate nearest points
          </Text>
          <Text
            style={[styles.textbutton, styles.stop]}
            onPress={() => this.props.setroute(false)}
          >
            Stop locating
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
