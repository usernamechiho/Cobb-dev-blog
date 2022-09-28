import EmailForm from './Components/EmailForm';
import styles from './sendEmail.module.scss';
import Greeting from './Components/Greeting';

function Send_email() {
  return (
    <div className={styles.emailContainer}>
      <div className={styles.emailContentContainer}>
        <section className={styles.emailDesc}>
          <Greeting />
        </section>
        <section className={styles.emailFormContainer}>
          <EmailForm />
        </section>
      </div>
    </div>
  );
}

export default Send_email;
