import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import DailyStepper from './Components/DailyStepper';
import styles from './ownerDescription.module.scss';
import Arrow from './Components/Arrow';
import Card from './Components/Card';
import Description from './Components/Description';

const CARD_PROPS = [
  {
    title: 'Experience',
    desc: 'A year experience in Front End environment',
  },
  {
    title: 'Experience',
    desc: 'A year experience in Front End environment',
  },
  {
    title: 'Experience',
    desc: 'A year experience in Front End environment',
  },
  {
    title: 'Experience',
    desc: 'A year experience in Front End environment',
  },
  {
    title: 'Experience',
    desc: 'A year experience in Front End environment',
  },
  {
    title: 'Experience',
    desc: 'A year experience in Front End environment',
  },
];

const Owner_description = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const scroll = () => {
      setScrollY(window.scrollY / 100);
    };
    window.addEventListener('scroll', scroll, false);
    return () => window.removeEventListener('scroll', scroll, false);
  }, []);

  const Cards = CARD_PROPS.map((card) => <Card info={card} />);

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

        <section className={styles.cardContainer}>{Cards}</section>
      </section>
    </div>
  );
};

export default Owner_description;
