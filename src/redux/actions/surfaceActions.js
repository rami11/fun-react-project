import { FETCH_SURFACES } from "./types";

export function fetchSurfaces() {
  return async dispatch => {
    const resp = await fetch(
      "https://2hsjstzo71.execute-api.us-east-1.amazonaws.com/prod/livebarn-interview-project"
    );
    const surfaces = await resp.json();
    console.log(surfaces);
    const servers = [];
    for (const surface of surfaces) {
      servers.push({
        ip4: surface.server.ip4,
        dns: surface.server.dns
      });
    }
    console.log(servers);

    dispatch({ type: FETCH_SURFACES, payload: surfaces });
  };
}
