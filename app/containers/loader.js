import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { styles } from "../style/containers/loader";

export default class Loader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <ActivityIndicator
            size="large"
            animating={this.props.animating}
            color="#0000ff"
          />
        </View>
      </View>
    );
  }
}
