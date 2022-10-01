import { useState } from 'react';
import { useRouter } from 'next/router';

import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import MenuIcon from '@mui/icons-material/Menu';

import styles from './header.module.scss';

function Header() {
  const [isMenu, setIsMenu] = useState(false);

  const handleOpenMenu = () => setIsMenu((prev) => !prev);
  const handleClickAway = () => setIsMenu(false);

  const router = useRouter();
  const { pathname } = router;

  return (
    <header className={styles.headerComponent}>
      <div className={styles.headerIcon}>
        <p>
          <WorkspacesOutlinedIcon />
        </p>
        <p>Cobb.dev</p>
      </div>
      <div className={styles.hamburgerContainer}>
        <p>
          <MenuIcon />
        </p>
      </div>
    </header>
  );
}

export default Header;
