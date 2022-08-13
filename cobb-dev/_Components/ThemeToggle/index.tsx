import { useState } from 'react'

import styles from './themeToggle.module.scss'

function ThemeToggle() {
  const [isTheme, setIsTheme] = useState<'light' | 'dark'>('light')

  const handleToggleState = () => {
    if (isTheme === 'light') setIsTheme('dark')
    else setIsTheme('light')
  }

  return (
    <>
      <button type='button' className={isTheme === 'light' ? styles.light : styles.dark} onClick={handleToggleState}>
        hi
      </button>
      <input />
    </>
  )
}

export default ThemeToggle
