import { motion } from 'framer-motion';
import BlogOpenReason from './Components/BlogOpenReason';
import BlogTechStacks from './Components/BlogTechStacks';
import FE_Environment from './Components/FE-Environment';
import RecommendedDevice from './Components/Recommended-device';
import BlogIssue from './Components/BlogIssue';
import styles from './blogDesc.module.scss';

const blog_description = () => {
  return (
    <main className={styles.blogDescContainer}>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <section className={styles.blogReasonContainer}>
          <BlogOpenReason />
        </section>
        <section className={styles.typewriterSection}>
          <FE_Environment />
        </section>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
        <section className={styles.blogStacks}>
          <BlogTechStacks />
        </section>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <div className={styles.recommendedDevice}>
          <h1>💻 추천 디바이스 환경</h1>
        </div>
        <section className={styles.iphoneImageContainer}>
          <RecommendedDevice />
        </section>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <section className={styles.blogProblem}>
          <BlogIssue />
        </section>
      </motion.div>
    </main>
  );
};

export default blog_description;
