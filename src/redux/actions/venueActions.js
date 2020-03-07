import { FETCH_VENUES } from "./types";

export function fetchVenues() {
  return async dispatch => {
    const resp = await fetch(
      "https://2hsjstzo71.execute-api.us-east-1.amazonaws.com/prod/livebarn-interview-project"
    );
    const venues = await resp.json();

    dispatch({ type: FETCH_VENUES, payload: venues });
  };
}
