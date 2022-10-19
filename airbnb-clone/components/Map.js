import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

function ReactMap() {
  const [viewState, setViewState] = useState({
    width: "100%",
    height: "100%",
    longitude: 0,
    latitude: 51.5,
    zoom: 13,
  });

  return (
    <ReactMapGL
      {...viewState}
      mapStyle="mapbox://styles/kyljmk/cl9ffu9q200ci14paikzqe6zm"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(evt) => setViewState(evt.viewState)}
    />
  );
}

export default ReactMap;
