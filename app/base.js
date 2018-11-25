var React = require('react-native');
const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
const width  = Dimensions.get('window').width
const height = Dimensions.get('window').height
export const colors = {
  c1: "#D9CBA3",
  blackDark: "#222",
  c2: "#2c3647",
  c3: "#3a5467",
  c4: "#8DA593",
  c5: "#CBD9D6",
  white: "#fff",
  green: "#59CF39",
  red: "#FF0001",
  redc: "#FE6464",
  greenc: "#00AE46"
};

export const uris = {
  url: "http://192.168.43.31:3003/",
  reverseapi: "https://maps.googleapis.com/maps/api/geocode/json?address="
};

export const dist ={
  sl : 10,
  ll: 30,
  xl: 60,
  xxl: 100
}

export const defaultdist = {
  maxwidth: width,
  maxheight: height
}
