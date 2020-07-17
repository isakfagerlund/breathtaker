let restaurantIndex = "";
let lastAtRestaurant = 0;
let keepTrack = [];

const objectToArray = obj => {
  const keys = Object.keys(obj);
  const routeGeoJSON = keys.map(key => obj[key]);
  return routeGeoJSON;
}

export const assembleQueryURL = (truckLocation, warehouseLocation, pointHopper, mapBoxToken) => {
  
  // Store the location of the truck in a variable called coordinates
  const coordinates = [truckLocation, warehouseLocation];
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

  // Set the profile to `walking`
  // Coordinates will include the current location of the truck,
  return `https://api.mapbox.com/optimized-trips/v1/mapbox/walking/${coordinates.join(';')}&overview=full&steps=true&geometries=geojson&source=first&access_token=${mapBoxToken}`;
}