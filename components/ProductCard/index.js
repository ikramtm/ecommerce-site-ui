import { useState } from 'react'
import styles from '../../styles/Home.module.scss'

const ProductCard = ({
  name,
  price,
  discount,
  sizes = [],
  img = {},
  colors = [],
  rating
}) => {
  const [selectedColor, setColor] = useState(colors[0])
  const [selectedSize, setSize] = useState(sizes[0])

  return (
    <div className={styles.productCard}>
      {discount > 0 && <span className={styles.productCard__discount}>{discount}%</span>}
      <button className={styles[`productCard__btn--fav`]}>Love</button>
      <img className={styles.productCard__img} src={img.src} alt={img.label} />
      <div className={styles['productCard__flexContainer--spcBtwn']}>
        <p>{name}</p>
        <p>$ {price}</p>
      </div>
      <div className={styles['productCard__flexContainer--spcBtwn']}>
        <div>
          {colors.map((color) => {
            return <button key={color} onClick={() => setColor(color)}>{color}</button>
          })}
        </div>
        <div>
          {sizes.map((size) => {
            return <button key={size} onClick={() => setSize(color)}>{size}</button>
          })}
        </div>
      </div>
      <div className={styles['productCard__flexContainer--spcBtwn']}>
        <p>{rating}</p>
        <button className={styles[`card__btn--buy`]}>BUY +</button>
      </div>
    </div>
  )
}

export default ProductCard