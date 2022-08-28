import { useState, useCallback, useEffect, useRef } from 'react'
import styles from './progressBar.module.scss'

function ProgressBar() {
  const [progressWidth, setProgressWidth] = useState<number>(0)
  const progressRef = useRef(null)

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement

    if (scrollTop === 0) {
      setProgressWidth(0)
    }

    const windowHeight = scrollHeight - clientHeight

    const currentPercent = scrollTop / windowHeight

    setProgressWidth(currentPercent * 100)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true)

    return () => {
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [handleScroll])

  return (
    <div className={styles.scrollProgress} ref={progressRef}>
      <div className={styles.progressWidth} style={{ width: `${progressWidth}%` }} />
    </div>
  )
}

export default ProgressBar
