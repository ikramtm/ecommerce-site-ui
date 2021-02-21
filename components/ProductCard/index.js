import { Carousel } from 'react-responsive-carousel'
import { useState } from 'react'
import Modal from 'react-modal'
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

  const closeModal = (e) => {
    console.log(e)
    e.stopPropagation();
    setModalOpen(false)
  }


  let subtitle

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
              <Carousel showThumbs={false} infiniteLoop={true}>
                <div className={styles.productCard__img}>
                  <img className={styles.productCard__img} src={img.src} alt={img.label} />
                </div>
                <div>
                  <img className={styles.productCard__img} src={img.src} alt={img.label} />
                </div>
                <div>
                  <img className={styles.productCard__img} src={img.src} alt={img.label} />
                </div>
              </Carousel>
            <img className={styles.productCard__img} src={img.src} alt={img.label} />
          </div>
          <div className={styles.modalProduct__info}>
            {discount > 0 && <span>{discount}%</span>}
            <span>{rating}</span>
            <p>SKU: {sku}</p>
            <p>Brand: {brand}</p>
            <p>${price}</p>
            <p>Colors: {selectedColor}</p>
            <div>
              {colors.map((color) => {
                return <button key={color} onClick={() => setColor(color)}>{color}</button>
              })}
            </div>
            <p>Size</p>
            <div>
              {sizes.map((size) => {
                return <button key={size} onClick={() => setSize(color)}>{size}</button>
              })}
            </div>
            <a href="/size-guide" target="_blank">Size Guide</a>
            <p>Quantity</p>
            <div className={styles.modalProduct}>
              <span>{quantity}</span>
              <button>+</button>
              <button>-</button>
            </div>
            <div className={styles.modalProduct}>
              <button>Love</button>
              <button>Add to Cart</button>
              <button>Buy</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ProductCard