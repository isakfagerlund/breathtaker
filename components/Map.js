import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1IjoiaXNha2ZhZ2VybHVuZCIsImEiOiJjazk0N3Fmb2IwNzE3M2ZueW5xMTlyNHZ0In0.C6orLl-bf2DeGZP1T2fMWQ"

const initialMapState = {
  lng: 5,
  lat: 34,
  zoom: 2
};

const Map = () => {
  const [mapState, setMapState] = useState(initialMapState);
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [mapState.lng, mapState.lat],
      zoom: mapState.zoom
    });

    map.on('move', () => {
      setMapState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      }) 
    });
  }, [])

  return (
    <>
      <div className="sidebarStyle">
        <div>Longitude: {mapState.lng} | Latitude: {mapState.lat} | Zoom: {mapState.zoom}</div>
      </div>
      <div ref={el => (mapContainer.current = el)} className="mapContainer" />
    </>
  )
}

export default Map;