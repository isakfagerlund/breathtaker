import React, { useState } from 'react';
import MapGL, { Marker, Layer } from 'react-map-gl';
import { featureCollection, point } from '@turf/helpers';

const initialViewport = {
  width: 500,
  height: 500,
  latitude: 42.376,
  longitude: -83.093,
  zoom: 12
}

const Map = () => {
  const [viewport, setViewport] = useState(initialViewport)

  const url = "https://api.mapbox.com/optimized-trips/v1/mapbox/walking/-122.42,37.78;-122.45,37.91;-122.48,37.73?access_token=pk.eyJ1IjoiaXNha2ZhZ2VybHVuZCIsImEiOiJjazk0N3Fmb2IwNzE3M2ZueW5xMTlyNHZ0In0.C6orLl-bf2DeGZP1T2fMWQ"

  return (
    <MapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1IjoiaXNha2ZhZ2VybHVuZCIsImEiOiJjazk0N3Fmb2IwNzE3M2ZueW5xMTlyNHZ0In0.C6orLl-bf2DeGZP1T2fMWQ"
      onViewportChange={(view) => setViewport(view)}
    >
    </MapGL>
  )
}

export default Map;