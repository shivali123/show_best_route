import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ToastAndroid
} from "react-native";
//  all redux
import { connect } from "react-redux";
import { addPlace } from "../actions";
// all library
import MapView from "react-native-maps";
//  all styling
import { customStyle } from "../style/customMapStyle";
import { styles } from "../style/containers/addplace";
//  all constants
import { initialRegion } from "./initialregion";
import consts from "./mapconstants";
import { uris } from "../base";
//  all views
import Loader from "./loader";
import Markerlist from "./markerlist";
import Routes from "./routes";
import BottomButtons from "./bottombuttons";

class AddPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {},
      routestate: false,
      animating: false,
      mode: "driving"
    };
  }

  onLongPress = data => {
    this.setState({ animating: true });
    let coordinate = data.nativeEvent.coordinate;
    let basepath = `${uris.reverseapi}${coordinate.latitude},${coordinate.longitude}&key=${consts.myApiKey}`
    fetch(basepath)
      .then(response => response.json())
      .then(responseJson => {
        this.props.dispatch(
          addPlace({
            type: "ADD_PLACE",
            title: "none",
            dist: 0,
            id: consts.nextUserId++,
            latlng: coordinate,
            place: responseJson.results[0].address_components[0].long_name
          })
        );
        this.setState({ animating: false });
      });
  };

  updatePlace = place => {
    this.setState({ text: place });
  };

  updateanimate = () => {
    this.setState({ routestate: false });
  };

  onRegionChange(region) {
    this.setState({ region });
  }

  marker = data => {
    this.setState({ marker: data });
  };

  setroute = status => {
    this.setState({ routestate: status });
  };

  modeselector() {
    if (this.state.routestate === true) {
      return (
        <View style={styles.mode}>
          <TouchableOpacity onPress={() => this.setState({ mode: "walking" })}>
            <Image
              style={styles.photoimage}
              resizeMode="cover"
              source={require("../assets/walking.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ mode: "driving" })}>
            <Image
              style={styles.photoimage}
              resizeMode="cover"
              source={require("../assets/driving.png")}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }

  navigatetoroute = () => {
    if (this.props.places.length > 0) {
      this.props.navigation.navigate("Routeinfo", {
        places: this.props.places,
        len: this.props.places.length,
        initialRegion: this.state.region
      });
    } else {
      ToastAndroid.show("Add places to continue!", ToastAndroid.SHORT);
    }
  };

  tellmeroutes() {
    return (
      <TouchableOpacity
        onPress={() => this.navigatetoroute()}
        style={styles.bestroute}
      >
        <Text style={styles.routeinfo}> Tell me best route </Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          customMapStyle={customStyle}
          initialRegion={initialRegion}
          onRegionChangeComplete={this.onRegionChange.bind(this)}
          onPress={data => this.onLongPress(data)}
        >
          <Markerlist places={this.props.places} marker={this.marker} />
          <Routes
            places={this.props.places}
            obj={this}
            mode={this.state.mode}
            initialRegion={this.state.region}
            routestate={this.state.routestate}
          />
        </MapView>
        {this.modeselector()}
        {this.tellmeroutes()}
        {this.state.animating === true && (
          <Loader animating={this.state.animating} />
        )}
        <BottomButtons setroute={this.setroute} />
      </View>
    );
  }
}

export default connect(store => store)(AddPlace);
