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

const ColorsSelector = ({ colors, setColor, selectedColor }) => {
  return (
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
  )
}

const SizeSelector = ({ sizes, setSize, selectedSize }) => {
  return (
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
  )
}

const arrowStyles = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 15px)',
  width: 40,
  height: 40,
  borderRadius: '50%',
  boxShadow: '11px 11px 17px -2px rgba(0, 0, 0, 0.24)',
  cursor: 'pointer',
};

const getDiscountedPrice = (fullPrice, discount = 0) => {
  const discountedPrice = ((100 - discount) / 100) * fullPrice
  return discountedPrice.toFixed(2)
}
const ProductCard = ({
  addProduct,
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
  const [currentSlide, setCurrentSlide] = useState(0)

  const addToCart = () => {
    addProduct({
      sku,
      color: selectedColor,
      size: selectedSize,
      qty: quantity
    })
  }

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


  return (
    <div onClick={openModal} className={styles.productCard}>
      {discount > 0 &&
        <div className={styles.productCard__discount}>
          <span className={styles.discount}>-{discount}%</span>
        </div>
      }
      <div className={styles[`productCard__btn--fav`]}>
        <button className={styles.modalProduct__icon} onClick={() => setLike(!liked)} variant='icon'>
          <img src={liked ? '/heart-red.svg' : '/heart.svg'} alt='' />
        </button>
      </div>
      <img className={styles.productCard__img} src={img.src} alt={img.label} />
      <div className={styles['productCard__flexContainer--spcBtwn']}>
        <h3 className={styles.productCard__name}>{name}</h3>
        <div className={styles['productCard__price']}>
          <p className={styles['modalProduct__price--final']}>${getDiscountedPrice(price, discount)}</p>
          <p className={styles['modalProduct__price--initial']}>${price.toFixed(2)}</p>
        </div>
      </div>
      <div className={styles['productCard__flexContainer--spcBtwn']}>
      <ColorsSelector colors={colors} setColor={setColor} selectedColor={selectedColor} />
      <SizeSelector sizes={sizes} setSize={setSize} selectedSize={selectedSize} />
      </div>
      <div className={styles['productCard__flexContainer--spcBtwn']}>
        <div className={styles.rating}>
          <img className={styles.rating__icon} src='/star.svg' alt='' />
          <span className={styles.rating__label}>{rating}</span>
        </div>
        <a href='/buy' target='_blank' className={styles.productCard__link}>BUY +</a>
      </div>
      {/* TODO: refactor this into its own component, but in interest of time, leave it as is */}
      <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
      >
        <div className={styles.modalProduct}>
          <div className={styles.modalProduct__carousel}>
              <ul className={styles.modalProduct__thumbnailContainer}>
                {colors.map((colors, i) => {
                  return (
                    <li
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`${styles.modalProduct__thumbnail} ${styles[currentSlide === i ? 'modalProduct__thumbnail-active' : '']}`}>
                      <img className={styles.modalProduct__thumbnailImg} src={img.src} alt={img.label} />
                    </li>
                  )
                })}
              </ul>
              <Carousel
                showThumbs={false}
                selectedItem={currentSlide}
                infiniteLoop={true}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  hasPrev && (
                    <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                      {'<'}
                    </button>
                )
              }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                  hasNext && (
                    <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                      {'>'}
                    </button>
                  )
              }
              >
                {colors.map((colors, i) => {
                  return (
                    <div key={i} className={styles.modalProduct__imgContainer}>
                      <img className={styles.modalProduct__img} src={img.src} alt={img.label} />
                    </div>
                  )
                })}
              </Carousel>
          </div>
          <div className={styles.modalProduct__info}>
            <div className={styles['modalProduct__container']}>
              {discount > 0 && <span className={styles.discount}>-{discount}%</span>}
              <div className={`${styles.rating} ${styles.rating__modal}`}>
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
              <p className={styles['modalProduct__price--final']}>${getDiscountedPrice(price, discount)}</p>
              <p className={styles['modalProduct__price--initial']}>${price.toFixed(2)}</p>
            </span>
            <span className={styles.modalProduct__container}>
              <p className={styles.modalProduct__label}>Colors:</p>
              <p className={styles.modalProduct__value}>{selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}</p>
            </span>
            <ColorsSelector colors={colors} setColor={setColor} selectedColor={selectedColor} />
            <p>Size</p>
            <SizeSelector sizes={sizes} setSize={setSize} selectedSize={selectedSize} />
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
              <Button callback={addToCart} title='Add to Cart' variant='secondary' />
              <Button title='Buy Now' variant='primary' />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ProductCard