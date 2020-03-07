import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import surfaceReducer from "./surfaceReducer";

export default combineReducers({
  data: dataReducer,
  surfaces: surfaceReducer
});
