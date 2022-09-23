import { useState } from 'react';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import IntroIcon from '_Components/Header/HeaderComponents/IntroIcon';
import BlogIntroIcon from '_Components/Header/HeaderComponents/BlogIntroIcon';
import EmailIcon from '_Components/Header/HeaderComponents/EmailIcon';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import styles from './header.module.scss';

function Header() {
  const [isMenu, setIsMenu] = useState(false);

  const handleOpenMenu = () => setIsMenu((prev) => !prev);
  const handleClickAway = () => setIsMenu(false);

  return (
    <header className={styles.headerComponent}>
      <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
        Cobb-dev
      </Typography>
      <nav className={styles.headerNavSection}>
        <IntroIcon />
        <BlogIntroIcon />
        <EmailIcon />
      </nav>
      <IconButton
        edge='start'
        color='default'
        aria-label='menu'
        onClick={handleOpenMenu}
        className={styles.hamburgerIcon}
      >
        <MenuIcon style={{ fontSize: 35 }} />
      </IconButton>

      {isMenu && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className={styles.menuSelectBox}>
            <Paper sx={{ width: 200 }}>
              <MenuList>
                <IntroIcon />
                <BlogIntroIcon />
                <Divider />
                <EmailIcon />
              </MenuList>
            </Paper>
          </div>
        </ClickAwayListener>
      )}
    </header>
  );
}

export default Header;
