import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import styles from './blogDescription.module.scss';

const blog_description = () => {
  return (
    <div className={styles.blogDescContainer}>
      <section className={styles.imageContainer}>
        <Image src='/imgs/Home.png' alt='Cobb Home' className={styles.home} layout='fill' />
      </section>

      <section className={styles.typewriter}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('It depends.')
              .pauseFor(3500)
              .deleteAll()
              .pauseFor(3000)
              .typeString('It happens.')
              .pauseFor(3500)
              .deleteAll()
              .start();
          }}
          options={{ loop: true }}
        />
      </section>
    </div>
  );
};

export default blog_description;
