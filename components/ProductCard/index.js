import { useState, useEffect } from 'react'
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
  price,
  discount,
  sizes = [],
  img = {},
  colors = [],
  rating
}) => {
  const [selectedColor, setColor] = useState(colors[0])
  const [selectedSize, setSize] = useState(sizes[0])
  const [modalOpen, setModalOpen] = useState(false)

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
        <h2>Hello</h2>
          <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  )
}

export default ProductCard