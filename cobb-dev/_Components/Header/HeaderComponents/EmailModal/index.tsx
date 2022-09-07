import Paper from '@mui/material/Paper'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import CloseIconButton from '_Components/IconButton/CloseIconButton'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import styles from './emailModal.module.scss'

function EmailModal() {
  const form: any = useRef()

  const sendEmail = (e: any) => {
    e.preventDefault()

    emailjs
      .send(
        'service_4mquxy2',
        'template_c98c29r',
        {
          from_email: 'minepanorama@naver.com',
          message: 'this is kevin',
          title: 'hello',
        },
        '16eWOhhsJIXcTkcm4'
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
  }

  return (
    <Paper className={styles.emailModalContainer}>
      <header className={styles.modalHeader}>
        <div>
          <SendRoundedIcon className={styles.sendIcon} />
          Email to iamchho1@gmail.com
        </div>
        <div>
          <CloseIconButton />
        </div>
      </header>

      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor='user_name'>
          <span>Name</span>
          <input type='text' name='user_name' />
        </label>

        <label htmlFor='email_subject'>
          <span>Email</span>
          <input type='email' name='user_email' />
        </label>

        <label htmlFor='message'>
          <span>Message</span>
          <textarea name='message' />
        </label>

        <input type='submit' value='send' />
      </form>
    </Paper>
  )
}

export default EmailModal
