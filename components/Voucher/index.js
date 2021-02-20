import styles from '../../styles/Home.module.scss'

const Voucher = ({ title, code, discount }) => {
  return (
    <div className={styles.voucher}>
      <span className={styles['voucher__container--left']}>
        <p>{title}</p>
        <p className={styles['voucher__label--hashtag']}>#{code}</p>
      </span>
      <span className={styles['voucher__container--right']}>
        <p className={styles['voucher__label--bold']}>{discount}%</p>
        <p>Off</p>
      </span>
    </div>
  )
}

export default Voucher