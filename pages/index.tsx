import { useState, useEffect } from 'react'
import { getLocation } from '../helpers/getLocation'
import Head from 'next/head'
import Map from '../components/Map'
interface Location {
  accuracy: number,
  longitude: number,
  latitude: number
}

function HomePage() {
  const [userLocation, setUserLocation] = useState<Location>({ latitude: 0, longitude: 0, accuracy: 0} )

  const onSuccess = (data) => {
    setUserLocation(data.coords)
  } 
  const onFailure = (err) => console.log(err)

  useEffect(() => {
    const asyncGetLocation = async () => {
      getLocation(onSuccess, onFailure)
    }
 
    asyncGetLocation()
  }, [])

  return (
    <>
      <Head>
        <title>Breathtaker</title>
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <div>Welcome to Breathtaker</div>
      <p>Your latitude: {userLocation.latitude}</p>
      <p>Your longitude: {userLocation.longitude}</p>
      <Map />
    </>
  )
}

export default HomePage