import React from "react";

class Setroute extends React.Component<> {
  constructor() {
    super();
    this.state = {
      points: []
    };
  }

  calcCrow(lat1, lon1, lat2, lon2) {
    let x = (lat2 - lat1) * (lat2 - lat1);
    let y = (lon2 - lon1) * (lon2 - lon1);
    let d = Math.sqrt(x + y);
    return d;
  }

  calculateroute(arr, p) {
    let copy = this.state.points.length === 0 ? p : this.state.points;
    let pointscopy = this.state.points.length === 0 ? p : this.state.points;
    let id = 0;
    let small = this.calcCrow(
      arr[arr.length - 1].latlng.latitude,
      arr[arr.length - 1].latlng.longitude,
      pointscopy[0].latlng.latitude,
      pointscopy[0].latlng.longitude
    );
    for (var j = 0; j < pointscopy.length; j++) {
      let dist = this.calcCrow(
        arr[arr.length - 1].latlng.latitude,
        arr[arr.length - 1].latlng.longitude,
        pointscopy[j].latlng.latitude,
        pointscopy[j].latlng.longitude
      );
      if (dist < small) {
        small = dist;
        id = j;
      }
    }
    copy[id].dist = small;
    var toreturn = copy[id];
    pointscopy.splice(id, 1);
    this.setState({ points: pointscopy });
    return toreturn;
  }

  addtomyarray(arr, len, points) {
    this.setState({ points: points });
    var route = arr;
    for (var i = 0; i < len; i++) {
      var drr = this.calculateroute(route,points);
      route.push(drr);
    }
    return route;
  }
}
const setroute = new Setroute();
export default setroute;
