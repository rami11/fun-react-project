import { FETCH_SURFACES } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SURFACES:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
