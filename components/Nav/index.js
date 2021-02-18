import styles from '../../styles/Home.module.scss'

const topNavLink = [
  {
    label: 'Client Services',
    link: '/client-services'
  },
  {
    label: 'FAQ',
    link: '/faq'
  },
  {
    label: 'About',
    link: '/about'
  },
  {
    label: 'ENG',
    link: '/eng'
  }
]

const midNavItems = [
  {
    label: 'Men\'s',
    link: '/men'
  },
  {
    label: 'Women\'s',
    link: '/women'
  },
  {
    label: 'Fav',
    icon: 'sd',
    link: '/favourites'
  },
  {
    label: 'Profile',
    icon: 'sdsa',
    link: '/profile'
  }
]

const btmNavItems = [
  {
    label: 'Top',
    link: '/top'
  },
  {
    label: 'Bottom',
    link: '/bottom'
  },
  {
    label: 'Swimwear',
    icon: 'sd',
    link: '/swimwear'
  },
  {
    label: 'Watch',
    link: '/watch'
  },
  {
    label: 'Shoes',
    link: '/shoes'
  },
  {
    label: 'Bag',
    link: '/bag'
  },
  {
    label: 'Accessories',
    link: '/accessories'
  },
  {
    label: 'Sports',
    link: '/sports'
  },
  {
    label: 'Cosmetic',
    link: '/cosmetic'
  },
  {
    label: 'Muslim Wear',
    link: '/muslim-wear'
  }
]

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__top}>
        {topNavLink.map(link => {
          return <a key={link.label} className={styles.nav__link} href={link.link}>{link.label}</a>
        })}
      </div>

      <div className={styles.nav__mid}>
        <h3 className={styles.nav__logo}>Blizoo.</h3>
        <input className={styles.nav__input} type="text"/>
        {midNavItems.map(link => {
          return <a key={link.label} className={styles.nav__link} href={link.link}>{link.label}</a>
        })}
        <button className={styles.nav__btn}>
          Cart (0)
        </button>
      </div>

      <div className={styles.nav__btm}>
        {btmNavItems.map(link => {
          return <a key={link.label} className={styles.nav__link} href={link.link}>{link.label}</a>
        })}
      </div>
    </nav>
  )
}

export default Nav