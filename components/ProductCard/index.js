import { Carousel } from 'react-responsive-carousel'
import { useState } from 'react'
import Modal from 'react-modal'

import Button from '../Button/index'
import styles from '../../styles/Home.module.scss'

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const ProductCard = ({
  name,
  sku,
  price,
  brand,
  discount,
  sizes = [],
  img = {},
  colors = [],
  rating
}) => {
  const [selectedColor, setColor] = useState(colors[0])
  const [selectedSize, setSize] = useState(sizes[0])
  const [modalOpen, setModalOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [liked, setLike] = useState(false)

  const closeModal = (e) => {
    e.stopPropagation();
    setModalOpen(false)
  }


  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const openModal = (e) => {
    setModalOpen(true)
  }

  // const afterOpenModal = () => {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  return (
    <div onClick={openModal} className={styles.productCard}>
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
      <Modal
          isOpen={modalOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
      >
        <div className={styles.modalProduct}>
          <div className={styles.modalProduct__carousel}>
              {/* <Carousel showThumbs={false} infiniteLoop={true}>
                <div className={styles.productCard__img}>
                  <img className={styles.productCard__img} src={img.src} alt={img.label} />
                </div>
                <div>
                  <img className={styles.productCard__img} src={img.src} alt={img.label} />
                </div>
                <div>
                  <img className={styles.productCard__img} src={img.src} alt={img.label} />
                </div>
              </Carousel> */}
            <img className={styles.productCard__img} src={img.src} alt={img.label} />
          </div>
          <div className={styles.modalProduct__info}>
            <div className={styles['modalProduct__container']}>
              {discount > 0 && <span className={styles.discount}>-{discount}%</span>}
              <div className={styles.rating}>
                <img className={styles.rating__icon} src='/star.svg' alt='' />
                <span className={styles.rating__label}>{rating}</span>
              </div>
            </div>
            <h3>{name}</h3>
            <span className={styles.modalProduct__container}>
              <p className={styles.modalProduct__label}>SKU:</p>
              <p className={styles.modalProduct__value}>{sku}</p>
            </span>
            <span className={styles.modalProduct__container}>
              <p className={styles.modalProduct__label}>Brand:</p>
              <p className={styles.modalProduct__value}>{brand}</p>
            </span>
            <span className={styles['modalProduct__container--price']}>
              <p className={styles['modalProduct__price--final']}>${price.toFixed(2)}</p>
              <p className={styles['modalProduct__price--initial']}>${price.toFixed(2)}</p>
            </span>
            <span className={styles.modalProduct__container}>
              <p className={styles.modalProduct__label}>Colors:</p>
              <p className={styles.modalProduct__value}>{selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}</p>
            </span>
            <div className={styles.modalProduct__container}>
              {colors.map((color) => {
                return (
                  <div
                    key={color}
                    className={`${styles.modalProduct__selectorBorder} ${selectedColor !== color ? styles['modalProduct__selectorBorder-active'] : ''}`}
                  >
                    <div
                      className={`${styles.modalProduct__selectorColor} ${styles[color]}`}
                      onClick={() => setColor(color)}
                    />
                  </div>
                )
              })}
            </div>
            <p>Size</p>
            <div className={styles.modalProduct__container}>
              {sizes.map((size) => {
                return (
                  <div
                    key={size}
                    className={`${styles.modalProduct__selectorSize} ${selectedSize === size ? styles['modalProduct__selectorSize-active'] : ''}`}
                    onClick={() => setSize(size)}
                  >
                    {size}
                  </div>
                )
              })}
            </div>
            <a href="/size-guide" target="_blank">Size Guide</a>
            <p>Quantity</p>
            <div className={styles.modalProduct__container}>
              <span className={styles.modalProduct__qty}>
                {quantity}
              </span>
              <button onClick={decreaseQty} className={styles.modalProduct__qtyBtn}>-</button>
              <button onClick={() => setQuantity(quantity + 1)} className={styles.modalProduct__qtyBtn}>+</button>
            </div>
            <div className={styles.modalProduct__containerBtn}>
              <button className={styles.modalProduct__icon} onClick={() => setLike(!liked)} variant='icon'>
                <img src={liked ? '/heart-red.svg' : '/heart.svg'} alt='' />
              </button>
              <Button title='Add to Cart' variant='secondary' />
              <Button title='Buy Now' variant='primary' />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ProductCard