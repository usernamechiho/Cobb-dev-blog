import ThemeToggle from '_Components/ThemeToggle'
import styles from './header.module.scss'

function Header() {
  return (
    <header className={styles.globalHeader}>
      This Is Global Header
      <ThemeToggle />
    </header>
  )
}

export default Header
