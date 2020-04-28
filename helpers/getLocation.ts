import { checkWindowExists } from './checkWindow'

interface Location {
  coords: {
    accuracy: number,
    longitude: number,
    latitude: number
  };
}


export const getLocation = (onSuccess, onFailure): Location => {
  if (!checkWindowExists) return
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onFailure)
  } else {
    console.log("Browser not supporting location")
  }
}