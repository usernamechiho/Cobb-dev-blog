import { useState } from 'react';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Sidebar from '_Components/Sidebar';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import styles from './header.module.scss';

function Header() {
  const router = useRouter();

  const [isMenu, setIsMenu] = useState(false);

  const handleOpenMenu = () => setIsMenu((prev) => !prev);
  const handleCloseMenu = () => setIsMenu(false);

  const handleRoutingToMainPage = () => {
    router.push('/blog');
    handleCloseMenu();
  };

  return (
    <>
      <header className={styles.headerComponent}>
        <div className={styles.headerIcon}>
          <button type='button' onClick={handleRoutingToMainPage}>
            <Image src='/imgs/dots.png' alt='Cobb Logo' width='20px' height='20px' />
            <span>코브</span>
          </button>
        </div>
        <div className={styles.hamburgerContainer}>
          <Tooltip title='Menu'>
            <IconButton aria-label='sidebar-open' onClick={handleOpenMenu}>
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </div>
      </header>
      <AnimatePresence>{isMenu && <Sidebar handleCloseMenu={handleCloseMenu} />}</AnimatePresence>
    </>
  );
}

export default Header;
