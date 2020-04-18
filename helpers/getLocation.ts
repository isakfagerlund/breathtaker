import { checkWindowExists } from './checkWindow'

export const getLocation = () => {
  const showPosition = position => console.log(position)
  if (!checkWindowExists) return
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  } else {
    console.log("Browser not supporting location")
  }
}