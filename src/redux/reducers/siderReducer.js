import { SELECT_SIDER_ELEMENT } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SELECT_SIDER_ELEMENT:
      return { ...state, elementKey: action.payload };
    default:
      return state;
  }
}
