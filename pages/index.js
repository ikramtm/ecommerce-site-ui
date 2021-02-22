import Head from 'next/head'
import Grid from '@material-ui/core/Grid';

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
        Flash Sales
        <Grid container spacing={5}>
          { flashSale.map((product) => {
            return (
              <Grid item xs={12} md={3}>
                <ProductCard key={product.name} {...product} />
              </Grid>
            )
          })}
        </Grid>
        <Grid container spacing={2}>
          {vouchers.map((voucher) => {
            return (
              <Grid item xs={12} md={3}>
                <Voucher key={voucher.title} {...voucher} />
              </Grid>
            )
          })}
        </Grid>
        
        <Grid container spacing={2}>
          { flashSale.map((product) => {
            return (
              <Grid item xs={12} md={3}>
                <ProductCard key={product.name} {...product} />
              </Grid>
            )
          })}
        </Grid>
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
