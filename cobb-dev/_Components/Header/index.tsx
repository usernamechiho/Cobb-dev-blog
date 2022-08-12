import styles from './header.module.scss'
import ThemeToggle from '_Components/ThemeToggle'

const Header = () => {
  return (
    <header className={styles.globalHeader}>
      This Is Global Header
      <ThemeToggle />
    </header>
  )
}

export default Header
