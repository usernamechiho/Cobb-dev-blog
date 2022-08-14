import { useState } from 'react'

import DayIcon from 'public/svgs/light.svg'
import NightIcon from 'public/svgs/dark.svg'
import classnames from 'classnames'
import styles from './themeToggle.module.scss'

function ThemeToggle() {
  const [isLight, setIsLight] = useState<boolean>(true)

  const handleChangeTheme = () => setIsLight((prev) => !prev)

  return (
    <button
      type='button'
      onClick={handleChangeTheme}
      className={classnames(styles.toggleButton, { [styles.lightMode]: isLight })}
    >
      {isLight && <DayIcon />}
      {!isLight && <NightIcon className={styles.nightIcon} />}
    </button>
  )
}

export default ThemeToggle
