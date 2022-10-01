import { motion } from 'framer-motion';
import Link from 'next/link';

import HeaderNav from '_Components/Header/HeaderNav';
import styles from './sidebar.module.scss';

const Sidebar = ({ handleOpenMenu }: any) => {
  return (
    <>
      <motion.article
        className={styles.sidebarContainer}
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        exit={{ y: -400 }}
        transition={{ duration: 1 }}
      >
        <HeaderNav />
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
          <Link href='/send-email'>
            <a>Contact</a>
          </Link>
        </div>
      </motion.article>
    </>
  );
};

export default Sidebar;
