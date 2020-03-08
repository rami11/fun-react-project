import { FETCH_DATA, SELECT_SURFACE_ITEM } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case SELECT_SURFACE_ITEM:
      return { ...state, selectedSurfaceItem: action.payload };
    default:
      return state;
  }
}
