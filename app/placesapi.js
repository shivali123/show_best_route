import { Component } from "react";
import { ToastAndroid } from "react-native";
import { uris } from "./base";
import { stylePlaces } from "./actions";
import consts from "./containers/mapconstants";

export class Placesapi extends Component<> {
  addplace(data) {
    // alert("1")
    var basepath = uris.url + "places";
    fetch(basepath, {
      timeout: 60000,
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => {
        if (response._id != null && response != undefined){
          ToastAndroid.showWithGravity(
            "Place added succesfully!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
        }
      })
      .catch(error => {
        alert(error);
      });
  }

  getPlaces(dispatch) {
    var basepath = uris.url + "places";
    fetch(basepath, {
      timeout: 60000,
      method: "GET"
    })
      .then(response => response.json())
      .then(response => {
        let arr = response;
        let copy = [];
        arr.map(item => {
          let obj = {
            title: item.place,
            id: consts.nextUserId++,
            latlng: item.latlon,
            img: item.img
          };
          copy.push(obj);
        });
        dispatch(stylePlaces(copy));
      })
      .catch(error => {
        alert(error);
      });
  }
}

const placesobject = new Placesapi();
export default placesobject;
