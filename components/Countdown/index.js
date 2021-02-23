import Countdown from 'react-countdown'
import styles from '../../styles/Home.module.scss'

const Completionist = () => <span>You are good to go!</span>

const renderer = ({ formatted: { hours, minutes, seconds } }) => {
    return (
      <span className={styles.timer}>
        <div className={styles.timer__display}>{hours}</div>
        <div className={styles.timer__display}>{minutes}</div>
        <div className={styles.timer__display}>{seconds}</div>
      </span>
    )
}

const TimerCountdown = ({ time }) => {
  return (
    <Countdown
      date={Date.now() + (time)}
      renderer={renderer}
    />
  )
}

export default TimerCountdown