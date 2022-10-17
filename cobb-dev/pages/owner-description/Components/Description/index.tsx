import chiho from 'public/imgs/chiho.jpg';
import { motion } from 'framer-motion';
import styles from './description.module.scss';

const Description = () => {
  return (
    <section className={styles.ownerDescContainer}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={styles.mainDescription}
      >
        <p>About</p>
        <h1>
          Interested in client-side development.
          <br />
          Transforming ideas into reality.
          <br />I enjoy being interlinked with people !
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={styles.imageAndIntro}
      >
        <div
          className={styles.chihoJpg}
          style={{
            backgroundImage: `url(${chiho.src})`,
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={styles.intro}
      >
        <p>안녕하세요, 주니어 프론트엔드 개발자 Cobb입니다. Entry-level FE position에 관심 있습니다.</p>
      </motion.div>
    </section>
  );
};

export default Description;
