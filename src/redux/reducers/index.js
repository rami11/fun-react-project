import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import siderReducer from "./siderReducer";

export default combineReducers({
  data: dataReducer,
  sider: siderReducer
});
