import { useSetRecoilState } from 'recoil'
import { isEmailModal } from 'Atoms/atom'
import { MouseEventHandler } from 'react'
import styles from './emailModal.module.scss'

function EmailModal() {
  const setIsEmailModal = useSetRecoilState(isEmailModal)

  const handleCloseEmailModal: MouseEventHandler<HTMLButtonElement> = () => setIsEmailModal(false)

  return (
    <div className={styles.emailModalContainer}>
      <div className={styles.emailContent}>
        <button type='button' onClick={handleCloseEmailModal} style={{ color: 'black', paddingTop: '80px' }}>
          X
        </button>
      </div>
    </div>
  )
}

export default EmailModal
