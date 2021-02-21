import styles from '../../styles/Home.module.scss'

const Button = ({
  title,
  variant,
  icon,
  callback
}) => {
  let buttonStyle = 'button--default'
  if (variant === 'primary') {
    buttonStyle = 'button--primary'
  }
  if (variant === 'secondary') {
    buttonStyle = 'button--secondary'
  }
  return (
    <button onClick={callback} className={styles[buttonStyle]}>
      {icon && <img className={styles.button__img} src={icon} alt={title}/>}
      {title}
    </button>
  )
}

export default Button