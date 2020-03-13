import { FETCH_DATA, SELECT_SURFACE_ITEM } from "./types";

const baseUrl =
  "https://2hsjstzo71.execute-api.us-east-1.amazonaws.com/prod/livebarn-interview-project";

const filterSurfaces = (surfaces, text) => {
  if (text.trim().length !== 0) {
    surfaces = surfaces.filter(surface => {
      text = text.trim().toUpperCase();
      const venueName = surface.venueName.toUpperCase();
      const surfaceName = surface.surfaceName.toUpperCase();
      return venueName.includes(text) || surfaceName.includes(text);
    });
  }

  const servers = [];
  for (const surface of surfaces) {
    servers.push({
      key: surface.server.id,
      ip4: surface.server.ip4,
      dns: surface.server.dns
    });
  }
  const data = { surfaces, servers };
  return data;
};

export function fetchData(text = "") {
  return async dispatch => {
    const resp = await fetch(baseUrl);
    let surfaces = await resp.json();

    const data = filterSurfaces(surfaces, text);

    dispatch({ type: FETCH_DATA, payload: data });
  };
}

export function findSurfaceItem(surfaceId) {
  return async dispatch => {
    const resp = await fetch(baseUrl);
    const surfaces = await resp.json();
    const selectedItem = surfaces.find(surface => {
      return surface.id === surfaceId;
    });

    dispatch({ type: SELECT_SURFACE_ITEM, payload: selectedItem });
  };
}
