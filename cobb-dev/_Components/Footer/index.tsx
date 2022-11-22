import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>ⓒ Cobb reserves all rights.</div>
      <div className={styles.right}>
        <Tooltip title='Open Instagram'>
          <a target='_blank' href='https://github.com/usernamechiho' rel='noopener noreferrer'>
            <InstagramIcon />
          </a>
        </Tooltip>
        <Tooltip title='Open Github'>
          <a
            target='_blank'
            href='https://www.instagram.com/sinsastation/'
            rel='noopener noreferrer'
            className={styles.github}
          >
            <GitHubIcon />
          </a>
        </Tooltip>
      </div>
    </footer>
  );
};

export default Footer;
