import Head from 'next/head'
import Thumbnails from '../features/thumbnails/Thumbnails'

const Home = () => (
  <div>
    <Head>
      <title>Rijksmusem</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <div>M U S E U M</div>
      <Thumbnails />
    </div>
  </div>
)

export default Home
