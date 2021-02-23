import Head from 'next/head'

import Nav from '../components/Nav/index'
import Hero from '../components/Hero/index'
import ProductCard from '../components/ProductCard/index'
import Voucher from '../components/Voucher/index'
import TimerCountdown from '../components/Countdown/index'

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
        <div className={styles.flashSales}>
          <img className={styles.flashSales__icon} src='/flash.svg' alt='' />
          <p className={styles.flashSales__title}>Flash Sales</p>
          <TimerCountdown time={20000}/>
        </div>
        <div className={styles.gridz}>
          { flashSale.map((product) => {
            return (
              <ProductCard key={product.name} {...product} />
            )
          })}
        </div>
        <div className={`${styles['gridz-vouchers']} ${styles.gridz}`}>
            {vouchers.map((voucher) => {
              return (
                <Voucher key={voucher.title} {...voucher} />
              )
            })}
        </div>        
        <div className={styles.gridz}>
          { flashSale.map((product) => {
            return (
              <ProductCard key={product.name} {...product} />
            )
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
