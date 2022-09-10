import Paper from '@mui/material/Paper'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import wind from 'public/imgs/wind.png'
import styles from './sendEmail.module.scss'

const send_email = () => {
  const [emailFrom, setEmailFrom] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
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
    <div className={styles.emailContainer}>
      <Paper className={styles.emailModalContainer}>
        <header className={styles.modalHeader}>
          <div>
            <SendRoundedIcon className={styles.sendIcon} />
            Email to iamchho1@gmail.com
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
      <div
        style={{
          backgroundImage: `url(${wind.src})`,
          width: '250px',
          height: '250px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
      />
    </div>
  )
}

export default send_email
