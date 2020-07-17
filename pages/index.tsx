import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Map from '../components/Map'
import { getLocation } from '../helpers/getLocation';

function HomePage() {
  const [userLocation, setUserLocation] = useState([])

  useEffect(() => {
    getLocation(response => {
      const { latitude, longitude } = response?.coords;
      setUserLocation([ longitude, latitude ])
    }, err => console.log(err))
  }, [])

  return (
    <>
      <Head>
        <title>Breathtaker</title>
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <Map userLocation={userLocation} setUserLocation={setUserLocation} />
    </>
  )
}

export default HomePage