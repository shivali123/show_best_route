import React, { Component } from "react";
import { View } from "react-native";
import AddPlace from "../containers/addplace";

export default class App extends Component<> {
  static navigationOptions = { header: null };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AddPlace navigation={this.props.navigation}/>
      </View>
    );
  }
}
