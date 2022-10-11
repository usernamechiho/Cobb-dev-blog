import styles from './sendEmail.module.scss';
import EmailForm from './EmailForm';

function Send_email() {
  return (
    <div className={styles.emailContainer}>
      <section className={styles.intro}>
        <h1>CONTACT</h1>
        <p>Let's get to know each other.</p>
      </section>

      <section className={styles.areYou}>
        <div className={styles.areYouIntro}>
          <p>I'd love to hear from you.</p>
        </div>

        <div className={styles.areYouHaving}>
          <div>
            <p>Have</p>
            <ul>
              <li>• Technical Drawback ?</li>
              <li>• Inquiry ?</li>
            </ul>
          </div>

          <div>
            <p>Need</p>
            <ul>
              <li>• Blog Improvement ?</li>
            </ul>
          </div>

          <div>
            <p>Want</p>
            <ul>
              <li>• Collaborate With ?</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.emailForm}>
        <EmailForm />
      </section>
    </div>
  );
}

export default Send_email;
