import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { IHandleProps } from 'Types/type';

import HeaderNav from '_Components/Header/HeaderNav';
import styles from './sidebar.module.scss';

const Sidebar = ({ handleCloseMenu }: IHandleProps) => {
  const router = useRouter();

  const handleNavigateAndCloseMenu = () => {
    router.push('/send-email');
    handleCloseMenu();
  };

  return (
    <>
      <motion.article
        className={styles.sidebarContainer}
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        exit={{ y: -400 }}
        transition={{ duration: 1 }}
      >
        <HeaderNav handleCloseMenu={handleCloseMenu} />
      </motion.article>
      <motion.article
        className={styles.sidebarChildContainer}
        initial={{ y: -520 }}
        animate={{ y: 0 }}
        exit={{ y: -520 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.childContentContainer}>
          <p>ⓒCOBB</p>
          <button type='button' onClick={handleNavigateAndCloseMenu}>
            Contact
          </button>
        </div>
      </motion.article>
    </>
  );
};

export default Sidebar;
