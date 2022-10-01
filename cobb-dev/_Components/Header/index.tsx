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
  const [isMenu, setIsMenu] = useState(false);

  const handleOpenMenu = () => setIsMenu((prev) => !prev);
  const handleClickAway = () => setIsMenu(false);

  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <header className={styles.headerComponent}>
        <div className={styles.headerIcon}>
          <p>
            <WorkspacesOutlinedIcon />
          </p>
          <p>Cobb.dev</p>
        </div>
        <div className={styles.hamburgerContainer}>
          <Tooltip title='Menu'>
            <IconButton aria-label='sidebar-open' onClick={handleOpenMenu}>
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </div>
      </header>
      <AnimatePresence>{isMenu && <Sidebar handleOpenMenu={handleOpenMenu} />}</AnimatePresence>
    </>
  );
}

export default Header;
