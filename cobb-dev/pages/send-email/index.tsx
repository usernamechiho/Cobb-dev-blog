import Paper from '@mui/material/Paper';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import styles from './sendEmail.module.scss';
import Greeting from './Components/Greeting';

function Send_email() {
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmitEmail = (e: any) => {
    e.preventDefault();
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
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.emailContainer}>
      <div className={styles.emailContentContainer}>
        <section className={styles.emailDesc}>
          <Greeting />
        </section>
        <section className={styles.emailFormContainer}>
          <div className={styles.emailForm}>1</div>
        </section>
      </div>
    </div>
  );
}

export default Send_email;
