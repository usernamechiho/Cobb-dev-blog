import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { ToastContainer, toast } from 'react-toastify';
import { styled } from '@mui/material/styles';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import { useState, ChangeEvent, FormEvent } from 'react';
import TextField from '@mui/material/TextField';
import styles from './emailForm.module.scss';

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#313135',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#313135',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#313135',
    },
    '&:hover fieldset': {
      borderColor: '#313135',
      boxShadow: 'none',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#313135',
    },
  },
});

const EmailForm = () => {
  const [name, setName] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value);
  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value);
  const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.currentTarget.value);

  const notifyError = () =>
    toast.error('Check your input.', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifySuccess = () =>
    toast.success('Successfully sent.', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleSubmitEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.length || !title.length || !email.length || !message.length) {
      notifyError();
      return;
    }

    emailjs
      .send(
        'service_4mquxy2',
        'template_c98c29r',
        {
          name,
          title,
          from_email: email,
          message,
        },
        '16eWOhhsJIXcTkcm4'
      )
      .then(() => {
        setName('');
        setTitle('');
        setEmail('');
        setMessage('');
        notifySuccess();
      })
      .catch((error) => {});
  };

  return (
    <>
      <div className={styles.emailFormContainer}>
        <p>FORM</p>
        <form onSubmit={handleSubmitEmail}>
          <CustomTextField label='Name' variant='standard' value={name} onChange={handleChangeName} />
          <CustomTextField
            label='Your Email'
            variant='standard'
            value={email}
            style={{ marginTop: '20px' }}
            onChange={handleChangeEmail}
          />
          <CustomTextField
            label='Title'
            variant='standard'
            style={{ marginTop: '20px' }}
            value={title}
            onChange={handleChangeTitle}
          />
          <CustomTextField
            multiline
            rows={10}
            label='Message'
            variant='standard'
            style={{ marginTop: '50px' }}
            value={message}
            onChange={handleChangeMessage}
          />
          <Button type='submit' variant='contained'>
            <SendRoundedIcon /> Send Email
          </Button>
        </form>
      </div>

      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    </>
  );
};

export default EmailForm;
