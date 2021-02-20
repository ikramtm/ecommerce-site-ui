import Head from 'next/head'

import Nav from '../components/Nav/index'
import Hero from '../components/Hero/index'
import ProductCard from '../components/ProductCard/index'
import Voucher from '../components/Voucher/index'

import styles from '../styles/Home.module.scss'
import { getInventory, getSalesVouchers } from '../services/stocks'

const Home = ({ flashSale, vouchers }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Hero />
      <main className={styles.main}>
        <div className={styles.flexContainer}>
          { flashSale.map((product) => {
            return <ProductCard key={product.name} {...product} />
          })}
        </div>
        <div className={styles.flexContainer}>
          {vouchers.map((voucher) => {
            return <Voucher key={voucher.title} {...voucher} />
          })}
        </div>
        
        <div className={styles.flexContainer}>
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
    const { vouchers } = await getSalesVouchers()

    return {
      vouchers,
      flashSale
    }
  } catch (err) {
    return {
      errorPageLoad: true
    }
  }
}

export default Home
