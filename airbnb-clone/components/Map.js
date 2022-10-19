import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function ReactMap({ searchResults }) {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewState, setViewState] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 10,
  });

  return (
    <ReactMapGL
      {...viewState}
      mapStyle="mapbox://styles/kyljmk/cl9ffu9q200ci14paikzqe6zm"
      mapboxAccessToken={process.env.mapbox_key}
      style={{ width: 500, height: 500 }}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat} anchor="center">
            <p>📍</p>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
}

export default ReactMap;
