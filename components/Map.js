import React, { useState, useEffect, useRef } from 'react';
import { featureCollection, point, feature } from '@turf/helpers';
import axios from 'axios';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1IjoiaXNha2ZhZ2VybHVuZCIsImEiOiJjazk0N3Fmb2IwNzE3M2ZueW5xMTlyNHZ0In0.C6orLl-bf2DeGZP1T2fMWQ"

const truckLocation = [-83.093, 42.376];
const warehouseLocation = [-83.083, 42.363];
const lastQueryTime = 0;
const lastAtRestaurant = 0;
let keepTrack = [];
let restaurantIndex = "";
const currentSchedule = [];
const currentRoute = null;
const pointHopper = {};
const pause = true;
const speedFactor = 50;
const warehouse = featureCollection([point(warehouseLocation)]);
// Create an empty GeoJSON feature collection for drop-off locations
const dropoffs = featureCollection([]);
const nothing = featureCollection([]);

const initialMapState = {
  lng: 5,
  lat: 34,
  zoom: 2
};

// Here you'll specify all the parameters necessary for requesting a response from the Optimization API
const assembleQueryURL = () => {

  // Store the location of the truck in a variable called coordinates
  const coordinates = [truckLocation];
  const distributions = [];
  keepTrack = [truckLocation];

  // Create an array of GeoJSON feature collections for each point
  const restJobs = objectToArray(pointHopper);

  // If there are any orders from this restaurant
  if (restJobs.length > 0) {

    // Check to see if the request was made after visiting the restaurant
    const needToPickUp = restJobs.filter(function(d, i) {
      return d.properties.orderTime > lastAtRestaurant;
    }).length > 0;

    // If the request was made after picking up from the restaurant,
    // Add the restaurant as an additional stop
    if (needToPickUp) {
      restaurantIndex = coordinates.length;
      // Add the restaurant as a coordinate
      coordinates.push(warehouseLocation);
      // push the restaurant itself into the array
      keepTrack.push(pointHopper.warehouse);
    }

    restJobs.forEach(function(d, i) {
      // Add dropoff to list
      keepTrack.push(d);
      coordinates.push(d.geometry.coordinates);
      // if order not yet picked up, add a reroute
      if (needToPickUp && d.properties.orderTime > lastAtRestaurant) {
        distributions.push(restaurantIndex + ',' + (coordinates.length - 1));
      }
    });
  }

  // Set the profile to `driving`
  // Coordinates will include the current location of the truck,
  return 'https://api.mapbox.com/optimized-trips/v1/mapbox/driving/' + coordinates.join(';') + '?distributions=' + distributions.join(';') + '&overview=full&steps=true&geometries=geojson&source=first&access_token=' + mapboxgl.accessToken;
}

const objectToArray = obj => {
  const keys = Object.keys(obj);
  const routeGeoJSON = keys.map(key => obj[key]);
  return routeGeoJSON;
}

const Map = () => {
  const [mapState, setMapState] = useState(initialMapState);
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: truckLocation,
      zoom: 12
    });

    const newDropoff = coords => {
      // Store the clicked point as a new GeoJSON feature with
      // two properties: `orderTime` and `key`
      const pt = point(
        [coords.lng, coords.lat],
        {
          orderTime: Date.now(),
          key: Math.random()
        }
      );
      dropoffs.features.push(pt);
      pointHopper[pt.properties.key] = pt;
    
      axios.get(assembleQueryURL())
        .then(({data}) => {
          // Create a GeoJSON feature collection
          var routeGeoJSON = featureCollection([feature(data.trips[0].geometry)]);
    
          // If there is no route provided, reset
          if (!data.trips[0]) {
            routeGeoJSON = nothing;
          } else {
            // Update the `route` source by getting the route source
            // and setting the data equal to routeGeoJSON
            map.getSource('route')
              .setData(routeGeoJSON);
          }
    
          if (data.waypoints.length === 12) {
            window.alert('Maximum number of points reached. Read more at docs.mapbox.com/api/navigation/#optimization.');
          }
        })
        .catch(error => console.log(error))
    }

    const updateDropoffs = geojson => {
      map.getSource('dropoffs-symbol')
        .setData(geojson);
    }

    map.on('load', () => {
      map.on('click', e => {
        // When the map is clicked, add a new drop-off point
        // and update the `dropoffs-symbol` layer
        newDropoff(map.unproject(e.point));
        updateDropoffs(dropoffs);
      });

      const marker = document.createElement('div');
      marker.classList = 'truck';
    
      // Create a new marker
      const truckMarker = new mapboxgl.Marker(marker)
        .setLngLat(truckLocation)
        .addTo(map);

      // Create a circle layer
      map.addLayer({
        id: 'warehouse',
        type: 'circle',
        source: {
          data: warehouse,
          type: 'geojson'
        },
        paint: {
          'circle-radius': 20,
          'circle-color': 'white',
          'circle-stroke-color': '#3887be',
          'circle-stroke-width': 3
        }
      });

      // Create a symbol layer on top of circle layer
      map.addLayer({
        id: 'warehouse-symbol',
        type: 'symbol',
        source: {
          data: warehouse,
          type: 'geojson'
        },
        layout: {
          'icon-image': 'grocery-15',
          'icon-size': 1
        },
        paint: {
          'text-color': '#3887be'
        }
      });

      map.addLayer({
        id: 'dropoffs-symbol',
        type: 'symbol',
        source: {
          data: dropoffs,
          type: 'geojson'
        },
        layout: {
          'icon-allow-overlap': true,
          'icon-ignore-placement': true,
          'icon-image': 'marker-15',
        }
      });

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

  }, [])

  return (
    <>
      <div ref={el => (mapContainer.current = el)} className="mapContainer" />
    </>
  )
}

export default Map;