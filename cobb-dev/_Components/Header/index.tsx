import { useState } from 'react';
import { useRouter } from 'next/router';

import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Sidebar from '_Components/Sidebar';
import { AnimatePresence } from 'framer-motion';

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
            <WorkspacesOutlinedIcon /> Cobb.dev
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
