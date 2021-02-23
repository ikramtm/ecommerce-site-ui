import { useState } from 'react'
import Head from 'next/head'

import Nav from '../components/Nav/index'
import Hero from '../components/Hero/index'
import ProductCard from '../components/ProductCard/index'
import Voucher from '../components/Voucher/index'
import TimerCountdown from '../components/Countdown/index'

import styles from '../styles/Home.module.scss'
import { getInventory, getSalesVouchers } from '../services/stocks'

const Home = ({ flashSale, bestSeller, allProducts, vouchers }) => {
  const featuredProducts = [bestSeller, allProducts]
  const [selectedSales, setSelectedSales] = useState(0)
  return (
    <div className={styles.container}>
      <Head>
        <title>Ikram's Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Hero />
      <main className={styles.main}>
        <div className={styles.circle}>
          <div className={styles.circle__outer}>
            <div className={styles.circle__inner} />
          </div>
        </div>
        <div className={styles.flashSales}>
          <img className={styles.flashSales__icon} src='/flash.svg' alt='' />
          <p className={styles.flashSales__title}>Flash Sales</p>
          {/* 12 hours countdown */}
          <TimerCountdown time={43200000}/>
        </div>
        <div className={styles.gridz}>
          { flashSale.map((product) => {
            return (
              <ProductCard key={product.name} {...product} />
            )
          })}
        </div>
        <a className={styles.home__link} href='/vouchers' target='blank'>More Vouchers</a>
        <div className={`${styles['gridz-vouchers']} ${styles.gridz}`}>
            {vouchers.map((voucher) => {
              return (
                <Voucher key={voucher.title} {...voucher} />
              )
            })}
        </div>
        <div className={styles.salesCtaContainer}>
          <span>
            <button
              onClick={() => setSelectedSales(0)}
              className={`${styles.salesCtaContainer__btn} ${styles[selectedSales === 0 ? 'salesCtaContainer__btn-active' : '']}`}
            >
              Best Seller
            </button>
            <button
              onClick={() => setSelectedSales(1)}
              className={`${styles.salesCtaContainer__btn} ${styles[selectedSales === 1 ? 'salesCtaContainer__btn-active' : '']}`}
            >
              New Product
            </button>
          </span>
          <a className={styles.salesCtaContainer__link} href='/products' target='blank'>All Products</a>
        </div>
        <div className={styles.gridz}>
          { featuredProducts[selectedSales].map((product) => {
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
    const { flashSale, bestSeller, allProducts } = await getInventory()
    const { vouchers } = await getSalesVouchers()

    return {
      bestSeller,
      allProducts,
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
