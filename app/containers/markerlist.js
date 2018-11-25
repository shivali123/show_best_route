import React, { Component } from "react";
import { View, Text, Image, Animated } from "react-native";
import { styles } from "../style/containers/markerlist";
import { Marker, Callout } from "react-native-maps";
import flag from "../assets/blue.png";

export default class Markerlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: {}
    };
  }

  // returnMarkerview = () => {
  //   return (
  //     <View style={styles.calout}>
  //       <Image
  //         style={styles.image}
  //         resizeMode="cover"
  //         source={require("../assets/icon.jpg")}
  //       />
  //       <Text style={styles.text}>{this.state.marker.title}</Text>
  //     </View>
  //   );
  // };

  render() {
    let places = this.props.places;
    return (
      <View>
        {places.map(marker => (
          <Marker.Animated
            coordinate={marker.latlng}
            title={marker.title}
            key={Math.random()}
            image={flag}
            onPress={() => this.props.marker(marker)}
            description={marker.title}
          />
        ))}
      </View>
    );
  }
}
