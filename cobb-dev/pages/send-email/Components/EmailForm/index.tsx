import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Button from '@mui/material/Button';
import styles from './emailForm.module.scss';

const EmailForm = () => {
  return (
    <div className={styles.emailFormContainer}>
      <form className={styles.emailForm}>
        <label htmlFor='title'>Title</label>
        <input id='title' className={styles.titleInput} />
        <DriveFileRenameOutlineOutlinedIcon className={styles.titleIcon} />

        <label htmlFor='email' className={styles.label}>
          Your Email
        </label>
        <input id='email' type='email' className={styles.emailInput} />
        <EmailOutlinedIcon className={styles.yourEmailIcon} />

        <label htmlFor='message' className={styles.label}>
          Message
        </label>
        <textarea id='message' />

        <Button className={styles.sendButton}>
          <SendRoundedIcon />
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default EmailForm;
