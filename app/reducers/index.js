import { combineReducers } from "redux";
import { places, textinput } from "./places";
export default combineReducers({ places: places, textinput: textinput });
