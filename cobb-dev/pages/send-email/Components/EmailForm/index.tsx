import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import { useState, MouseEvent, ChangeEvent, useEffect } from 'react';
import styles from './emailForm.module.scss';

const EmailForm = () => {
  const [title, setTitle] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value);
  const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.currentTarget.value);

  const notifyError = () =>
    toast.error('입력을 확인해주세요.', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const notifySuccess = () =>
    toast.success('전송을 완료했습니다.', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const handleSubmitEmail = (e: MouseEvent<HTMLButtonElement>) => {
    if (!title.length || !email.length || !message.length) {
      notifyError();
      return;
    }

    emailjs
      .send(
        'service_4mquxy2',
        'template_c98c29r',
        {
          title,
          from_email: email,
          message,
        },
        '16eWOhhsJIXcTkcm4'
      )
      .then(() => {
        notifySuccess();
        setTitle('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {});
  };

  return (
    <>
      <div className={styles.emailFormContainer}>
        <form className={styles.emailForm}>
          <label htmlFor='title'>Title</label>
          <input id='title' className={styles.titleInput} value={title} onChange={handleChangeTitle} />
          <DriveFileRenameOutlineOutlinedIcon className={styles.titleIcon} />

          <label htmlFor='email' className={styles.label}>
            Your Email
          </label>
          <input id='email' type='email' className={styles.emailInput} value={email} onChange={handleChangeEmail} />
          <EmailOutlinedIcon className={styles.yourEmailIcon} />

          <label htmlFor='message' className={styles.label}>
            Message
          </label>
          <textarea id='message' onChange={handleChangeMessage} value={message} />

          <Button className={styles.sendButton} onClick={handleSubmitEmail}>
            <SendRoundedIcon />
            Send Message
          </Button>
        </form>
      </div>

      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
    </>
  );
};

export default EmailForm;
