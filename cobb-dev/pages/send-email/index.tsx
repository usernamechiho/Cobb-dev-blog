import { motion } from 'framer-motion';
import styles from './sendEmail.module.scss';
import EmailForm from './EmailForm';

function Send_email() {
  return (
    <div className={styles.emailContainer}>
      <section className={styles.intro}>
        <h1>CONTACT</h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Let's get to know each other.
        </motion.p>
      </section>

      <section className={styles.areYou}>
        <div className={styles.areYouIntro}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
          >
            I'd love to hear from you.
          </motion.p>
        </div>

        <div className={styles.areYouHaving}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <p>Have</p>
            <ul>
              <li>• Technical Drawback ?</li>
              <li>• Inquiry ?</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            <p>Need</p>
            <ul>
              <li>• Blog Improvement ?</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            viewport={{ once: true }}
          >
            <p>Want</p>
            <ul>
              <li>• Collaborate With ?</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className={styles.emailForm}>
        <EmailForm />
      </section>
    </div>
  );
}

export default Send_email;
