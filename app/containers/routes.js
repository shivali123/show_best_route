import React, { Component } from "react";
import { View, ToastAndroid } from "react-native";
const GOOGLE_MAPS_APIKEY = "AIzaSyC-V3J1Wz4wqgHqrqffIeZqhVM0gDfTsIg";
import MapViewDirections from "react-native-maps-directions";

export default class Routes extends Component {
  distancemeasure = () => {
    let places = this.props.places;
    if (this.props.places.length === 0) {
      // ToastAndroid.showWithGravity(
      //   "No place added to find route",
      //   ToastAndroid.SHORT,
      //   ToastAndroid.CENTER
      // );
      return;
    }
    let arr = [];
    let crr = [];
    for (var i = 0; i < places.length; i++) {
      let a = this.props.initialRegion.latitude - places[i].latlng.latitude;
      let b = this.props.initialRegion.longitude - places[i].latlng.latitude;
      let c = Math.sqrt(a * a + b * b);
      arr.push({ dist: c, index: i });
    }
    arr.sort(function(a, b){return a.dist - b.dist});
    for (var j = 0; j< arr.length && j < 5; j++) {
      crr.push(arr[j]);
    }
    return crr;
  };

  routes = () => {
    let arr = this.distancemeasure();
    let returnarr = [];
    if (this.props.places.length > 0 && this.props.routestate === true) {
      for (var i = 0; i < arr.length; i++) {
        returnarr.push(
          <MapViewDirections
            origin={this.props.initialRegion}
            key={Math.random()}
            destination={this.props.places[arr[i].index].latlng}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            mode={this.props.mode}
            strokeColor="hotpink"
          />
        );
      }
    }
    return returnarr;
  };

  render() {
    let arr = this.routes();
    return <View>{arr}</View>;
  }
}
