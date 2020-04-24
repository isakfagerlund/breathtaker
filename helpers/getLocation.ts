import { checkWindowExists } from './checkWindow'

interface Location {
  coords: {
    accuracy: number,
    longitude: number,
    latitude: number
  };
}


export const getLocation = (): Location => {
  const onSuccess = position => position
  const onFailure = err => err
  if (!checkWindowExists) return
  if (navigator.geolocation) {
    const getLocations = () => {
      navigator.geolocation.getCurrentPosition(onSuccess, onFailure).then( res => console.log(res))
    }
    
    console.log(getLocations())
  } else {
    console.log("Browser not supporting location")
  }
}