import { FETCH_DATA } from "./types";

export function fetchData() {
  return async dispatch => {
    const resp = await fetch(
      "https://2hsjstzo71.execute-api.us-east-1.amazonaws.com/prod/livebarn-interview-project"
    );
    const surfaces = await resp.json();
    const servers = [];
    for (const surface of surfaces) {
      servers.push({
        key: surface.server.id,
        ip4: surface.server.ip4,
        dns: surface.server.dns
      });
    }
    const data = { surfaces, servers };
    console.log(data);

    dispatch({ type: FETCH_DATA, payload: data });
  };
}
