import React, { useState, useEffect, useRef } from 'react';
import { featureCollection, point, feature } from '@turf/helpers';
import { assembleQueryURL } from '../helpers/assembleQueryURL';
import { generateLocation } from '../helpers/genereateRandomLocation';
import { randomCircumferencePoint } from 'random-location'
import axios from 'axios';
import mapboxgl from 'mapbox-gl';

const mapBoxToken = "pk.eyJ1IjoiaXNha2ZhZ2VybHVuZCIsImEiOiJjazk0N3Fmb2IwNzE3M2ZueW5xMTlyNHZ0In0.C6orLl-bf2DeGZP1T2fMWQ";
mapboxgl.accessToken = mapBoxToken;

// Create an empty GeoJSON feature collection for drop-off locations
const dropoffs = featureCollection([]);
const nothing = featureCollection([]);

const Map = ({ userLocation, setUserLocation }) => {
  const [routeDetails, setRouteDetails] = useState({})
  const mapContainer = useRef(null);
  let map;

  const getNavigation = coords => {
    const stopOne = randomCircumferencePoint({ latitude: userLocation[0], longitude: userLocation[1] }, 500)
    const stopOneArray = [stopOne.latitude, stopOne.longitude]
    const stopTwo = randomCircumferencePoint({ latitude: userLocation[0], longitude: userLocation[1] }, 500);
    const stopTwoArray = [stopTwo.latitude, stopTwo.longitude]

    axios.get(`https://api.mapbox.com/directions/v5/mapbox/walking/${userLocation};${stopOneArray};${stopTwoArray};${userLocation}?&annotations=duration&continue_straight=true&overview=full&steps=true&geometries=geojson&access_token=${mapBoxToken}`)
      .then(({data}) => {
        console.log(data)
        // Create a GeoJSON feature collection
        const route = data.routes[0];
        const { distance, duration } = route;
        var routeGeoJSON = featureCollection([feature(route.geometry)]);
        
        map.getSource('route')
          .setData(routeGeoJSON);
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    if(userLocation.length > 0) {
      map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v10',
        center: userLocation,
        zoom: 11
      });
  
      // Add geolocate control to the map.
      const geoLocate = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        showAccuracyCircle: false,
        trackUserLocation: true
      })
  
      map.addControl(geoLocate);

      geoLocate.on('geolocate', () => {
        map.setZoom(15);
      });
  
      map.on('load', () => {
        map.addSource('route', {
          type: 'geojson',
          data: nothing
        });
        
        map.addLayer({
          id: 'routeline-active',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#3887be',
            'line-width': [
              "interpolate",
              ["linear"],
              ["zoom"],
              12, 3,
              22, 12
            ]
          }
        }, 'waterway-label');
  
        map.addLayer({
          id: 'routearrows',
          type: 'symbol',
          source: 'route',
          layout: {
            'symbol-placement': 'line',
            'text-field': '▶',
            'text-size': [
              "interpolate",
              ["linear"],
              ["zoom"],
              12, 24,
              22, 60
            ],
            'symbol-spacing': [
              "interpolate",
              ["linear"],
              ["zoom"],
              12, 30,
              22, 160
            ],
            'text-keep-upright': false
          },
          paint: {
            'text-color': '#3887be',
            'text-halo-color': 'hsl(55, 11%, 96%)',
            'text-halo-width': 3
          }
        }, 'waterway-label');
      });
    }
  }, [userLocation])

  return (
    <>
      <div ref={el => (mapContainer.current = el)} className="mapContainer" />
      <div className="button">
        <button onClick={() => getNavigation()}>Get route</button>
      </div>   
    </>
  )
}

export default Map;