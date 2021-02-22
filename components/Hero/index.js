import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from '../../styles/Home.module.scss'

const heroImages = [
  {
    img: '/accessories.jpg',
    title: 'Accessories'
  },
  {
    img: '/tools.jpg',
    title: 'Tools'
  },
  {
    img: '/clothes.jpg',
    title: 'Clothes'
  }
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < 2) {
      setCurrentSlide(currentSlide + 1)
    } else {
      setCurrentSlide(0)
    }
  }
  const prevSlide = () => {
    if (currentSlide > -1) {
      setCurrentSlide(currentSlide - 1)
    } else {
      setCurrentSlide(2)
    }
  }

  return (
    <div className={styles.hero}>
      <Carousel
        selectedItem={currentSlide}
        showArrows={false}
        showThumbs={false}
        infiniteLoop={true}
        renderIndicator={false}
      >
        {heroImages.map((hero) => {
          return (
            <div key={hero.title} className={styles.hero__imgContainer}>
              <img src={hero.img} alt={hero.title} />
              <div className={styles.hero__infoContainer}>
                <p className={styles.hero__eyebrow}>New Arrival</p>
                <p className={styles.hero__title}>{hero.title}</p>
                <a className={styles.hero__link} href={`/${hero.title}`} target='_blank'>
                  Shop Now
                </a>
              </div>
            </div>
          )
        })}
      </Carousel>
      <div className={styles.hero__ctrl}>
        <button className={styles.hero__ctrlBtn} onClick={prevSlide}>
          <img src='/left.svg' alt='right' />
        </button>
        <div className={styles.hero__dots}>
          {heroImages.map((img, i) => {
            return (
              <div key={i} className={`${styles.hero__dotBorder} ${styles[`${i === currentSlide ? 'hero__dotBorder-active': ''}`]}`}>
                <div
                  className={`${styles.hero__dot} ${styles[`${i === currentSlide ? 'hero__dot-active': ''}`]}`}
                  onClick={() => setCurrentSlide(i)}
                  value={i}
                  role="button"
                  tabIndex="0"
                />
              </div>
            )
          })}
        </div>
        <button className={styles.hero__ctrlBtn} onClick={nextSlide}>
          <img src='/right.svg' alt='right' />
        </button>
      </div>
    </div>
  )
}

export default Hero