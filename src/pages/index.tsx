import Head from 'next/head'
import Thumbnails from '../features/thumbnails/Thumbnails'
import styles from './index.module.css'

const Header = () => (
  <div className={styles.header}>
    <div className={styles.text}>M U S E U M</div>
  </div>
)

const Home = () => (
  <div>
    <Head>
      <title>Rijksmusem</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <Header />
      <Thumbnails />
    </div>
  </div>
)

export default Home
