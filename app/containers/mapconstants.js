import { Dimensions } from "react-native";
const screen = Dimensions.get("window");

module.exports = {
  LATITUDE: 20.5937,
  LONGITUDE: 78.9629,
  LATITUDE_DELTA: 0.0922,
  LONGITUDE_DELTA: 0.33 * (screen.width / screen.height),
  nextUserId: 0,
  myApiKey: "AIzaSyC"
};
