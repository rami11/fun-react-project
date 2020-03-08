import { SELECT_SIDER_ELEMENT } from "./types";

export function selectSiderElement(elementKey) {
  console.log(elementKey);

  return dispatch => {
    dispatch({ type: SELECT_SIDER_ELEMENT, payload: elementKey });
  };
}
