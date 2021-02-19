import Head from 'next/head'

import Nav from '../components/Nav/index'
import Hero from '../components/Hero/index'
import ProductCard from '../components/ProductCard/index'
import styles from '../styles/Home.module.scss'

import { getInventory } from '../services/stocks'

const Home = ({ flashSale }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Hero />
      <main className={styles.main}>
        <div className={styles.salesContainer}>
        { flashSale.map((product) => {
          return <ProductCard key={product.name} {...product} />
        })}
        </div>
      </main>
    </div>
  )
}


Home.getInitialProps = async () => {
  try {
    const { flashSale } = await getInventory()
    return {
      flashSale
    }
  } catch (err) {
    return {
      errorPageLoad: true
    }
  }
}

export default Home
