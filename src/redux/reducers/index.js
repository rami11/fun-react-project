import { combineReducers } from "redux";
import surfaceReducer from "./surfaceReducer";

export default combineReducers({
  surfaces: surfaceReducer
});
