import { useState, useEffect } from 'react'
import { getLocation } from '../helpers/getLocation'
import Head from 'next/head'
import ReactMapGL from 'react-map-gl';
interface Location {
  accuracy: number,
  longitude: number,
  latitude: number
}

function HomePage() {
  const [viewport, setViewport] = useState({
    width: 500,
    height: 500,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  })

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
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiaXNha2ZhZ2VybHVuZCIsImEiOiJjazk0N3Fmb2IwNzE3M2ZueW5xMTlyNHZ0In0.C6orLl-bf2DeGZP1T2fMWQ"
        onViewportChange={(view) => setViewport(view)}
      />
    </>
  )
}

export default HomePage