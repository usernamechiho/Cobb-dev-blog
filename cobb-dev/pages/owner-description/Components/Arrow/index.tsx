import { motion } from 'framer-motion';
import styles from './arrow.module.scss';

const Arrow = () => {
  return (
    <motion.div
      className={styles.arrow}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 2 }}
    />
  );
};

export default Arrow;
