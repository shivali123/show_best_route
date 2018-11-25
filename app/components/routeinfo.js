import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { uris } from "../base";
import setroute from "./setroute";
const myApiKey = "AIzaSyC-V3J1Wz4wqgHqrqffIeZqhVM0gDfTsIg";

export default class Routeinfo extends Component<> {
  static navigationOptions = {
    headerStyle: { backgroundColor: "#7EC1EC" },
    headerTitle: "Best route"
  };

  constructor() {
    super();
    this.state = {
      route: [],
      points: []
    };
  }

  componentDidMount() {
    let coordinate = this.props.navigation.state.params.initialRegion;
    this.setState({ points: this.props.navigation.state.params.places });
    var basepath = `${uris.reverseapi}${coordinate.latitude},${coordinate.longitude}&key=${myApiKey}`
    fetch(basepath)
      .then(response => response.json())
      .then(responseJson => {
        let arr = [];
        let obj = {
          latlng: this.props.navigation.state.params.initialRegion,
          place: responseJson.results[0].address_components[0].long_name,
          dist: 0
        };
        arr.push(obj);
        let r = setroute.addtomyarray(
          arr,
          this.props.navigation.state.params.len,
          this.state.points
        );
        this.setState({ route: r });
      });
  }

  returndist() {
    let lrr = [];
    this.state.route.map((item, index) => {
      lrr.push(
        <View key={Math.random()} style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{width: 20,left: -6,height: 20,borderRadius: 10,borderWidth: 3, borderColor: '#00C7CE'}}/>
            <Text style={{color: "#000"}}>{item.place}</Text>
          </View>
          {((index+1)<=(this.state.route.length-1))&&
          <View style={{flexDirection: "row"}}>
            <View style={{width: 3,height: 63, backgroundColor: '#00C7CE'}} />
            <Text style={{marginLeft: 30,marginTop: 20, color: "#000"}}>
            {String(this.state.route[index + 1].dist).substring(0,6)}km</Text>
          </View>
           }
        </View>
      );
    });
    return <View>{lrr}</View>;
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{justifyContent: "center", alignItems: "center",padding: 30}}
        style={{ flex: 1,backgroundColor: '#fff' }}>
        {this.returndist()}
      </ScrollView>
    );
  }
}
