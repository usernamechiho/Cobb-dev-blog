import chiho from 'public/imgs/chiho.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
        <p>
          I'm an enthusiastic and collaborative Frontend Software Engineer seeking an entry-level position with company
          to use my skills in coding, troubleshooting complex problems and assisting in the timley completion of
          projects.
        </p>
        <p>
          I communicate well with teammates, co-workers and Back End Developers. I have a year experience in programming
          and have been used HTML, CSS, JavaScript, React and Next.js.
        </p>
        <p>I'm a graduate of SEOUL TECH(S.Korea), majored in English Literature & Language.</p>
        <p>
          Feel free to{' '}
          <Link href='/send-email'>
            <a>connect</a>
          </Link>{' '}
          with me on questions or exiting opportunities.
        </p>
        <p>Thank you and Have fun!</p>
      </motion.div>
    </section>
  );
};

export default Description;
