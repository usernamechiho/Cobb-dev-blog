import styles from './themeToggle.module.scss'
import { useState } from 'react'

const ThemeToggle = () => {
  const [isTheme, setIsTheme] = useState<'light' | 'dark'>('light')

  const handleToggleState = () => {
    if (isTheme === 'light') setIsTheme('dark')
    else setIsTheme('light')
  }

  return <button className={isTheme === 'light' ? styles.light : styles.dark}></button>
}

export default ThemeToggle
