import { motion } from 'framer-motion';
import styles from './card.module.scss';

interface IInfoType {
  info: {
    title: string;
    desc: string;
  };
  index: number;
}

const Card = ({ info, index }: IInfoType) => {
  return (
    <motion.div
      className={styles.cardContainer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index / 2 }}
      viewport={{ once: true }}
    >
      <h1>{info?.title}</h1>
      <div />
      <p>{info?.desc}</p>
    </motion.div>
  );
};

export default Card;
