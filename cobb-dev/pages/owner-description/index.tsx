import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import DailyStepper from './Components/DailyStepper';
import styles from './ownerDescription.module.scss';
import Arrow from './Components/Arrow';
import Card from './Components/Card';
import Description from './Components/Description';

const CARD_PROPS = [
  {
    title: 'Graduate of',
    desc: '서울과학기술대학교 영어영문학',
  },
  {
    title: 'Tech Stacks',
    desc: 'TypeScript, React, Next.JS',
  },
  {
    title: 'Experience',
    desc: '1년, 다수의 협업 프로젝트',
  },
  {
    title: 'Collaborative',
    desc: '혼자보단 같이',
  },
  {
    title: 'Flexible',
    desc: '유연하게, 상황에 따라',
  },
  {
    title: 'Straightforward',
    desc: '객관적으로, 솔직하게',
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

  const Cards = CARD_PROPS.map((card, index) => <Card info={card} key={card.desc} index={index} />);

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
