import Head from 'next/head'
import Map from '../components/Map'

function HomePage() {
  return (
    <>
      <Head>
        <title>Breathtaker</title>
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <Map />
    </>
  )
}

export default HomePage