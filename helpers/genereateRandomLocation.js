// This was stolen from https://gis.stackexchange.com/questions/334297/generate-coordinates-with-minimum-maximum-distance-from-given-coordinates
export function generateLocation(latitude, longitude, max, min = 0) {
  if (min > max) {
    throw new Error(`min(${min}) cannot be greater than max(${max})`);
  }

  // earth radius in km
  const EARTH_RADIUS = 6371;

  // 1° latitude in meters
  const DEGREE = ((EARTH_RADIUS * 2 * Math.PI) / 360) * 1000;

  // random distance within [min-max] in km in a non-uniform way
  const maxKm = max * 1000;
  const minKm = min * 1000;
  const r = (maxKm - minKm + 1) * Math.random() ** 0.5 + minKm;

  // random angle
  const theta = Math.random() * 2 * Math.PI;

  const dy = r * Math.sin(theta);
  const dx = r * Math.cos(theta);

  let newLatitude = latitude + dy / DEGREE;
  let newLongitude = longitude + dx / (DEGREE * Math.cos(deg2rad(latitude)));

  const distance = getDistanceFromLatLonInKm(
    latitude,
    longitude,
    newLatitude,
    newLongitude
  );

  return [ newLatitude, newLongitude ];
}

// See https://stackoverflow.com/a/27943/10975709
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km

  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
