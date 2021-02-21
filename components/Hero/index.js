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
            <div key={hero.title}>
              <img src={hero.img} alt={hero.title} />
              <p className="legend">{hero.title}</p>
            </div>
          )
        })}
      </Carousel>
      <div className={styles.hero__ctrl}>
        <button className={styles.hero__ctrlBtn} onClick={prevSlide}>
          <img src='/left.svg' alt='right' />
        </button>
        <ul className={styles.hero__dots}>
          {heroImages.map((img, i) => {
            return (
              <li
                className={styles[`${i === currentSlide ? 'hero__dot--active': 'hero__dot--inactive'}`]}
                onClick={() => setCurrentSlide(i)}
                key={i}
                value={i}
                role="button"
                tabIndex="0"
              />
            )
          })}
        </ul>
        <button className={styles.hero__ctrlBtn} onClick={nextSlide}>
          <img src='/right.svg' alt='right' />
        </button>
      </div>
    </div>
  )
}

export default Hero