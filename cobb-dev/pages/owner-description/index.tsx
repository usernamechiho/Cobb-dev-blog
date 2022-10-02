import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import DailyStepper from './Components/DailyStepper';
import styles from './ownerDescription.module.scss';
import Arrow from './Components/Arrow';
import Description from './Components/Description';

const Owner_description = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const scroll = () => {
      setScrollY(window.scrollY / 100);
    };
    window.addEventListener('scroll', scroll, false);
    return () => window.removeEventListener('scroll', scroll, false);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <section className={styles.pageDescriptionSec} style={{ opacity: 1 - scrollY / 3 }}>
        <h1>INFORMATION, COBB / 2022</h1>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          Hello World !
        </motion.p>
        <Arrow />
      </section>

      <section className={styles.overlayParent}>
        <section className={styles.stepperContainer}>
          <DailyStepper />
        </section>

        <section className={styles.descriptionContainer}>
          <Description />
        </section>
      </section>
    </div>
  );
};

export default Owner_description;
