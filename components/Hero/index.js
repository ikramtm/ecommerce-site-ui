import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from '../../styles/Home.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Carousel showThumbs={false} infiniteLoop={true}>
        <div className={styles.hero__img}>
          <img src="/accessories.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="/tools.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
        <img src="/clothes.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Hero