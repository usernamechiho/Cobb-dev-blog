import Typewriter from 'typewriter-effect';
import Home from 'public/imgs/Home.png';
import styles from './blogDescription.module.scss';

const blog_description = () => {
  return (
    <div className={styles.blogDescContainer}>
      <div
        className={styles.home}
        style={{
          backgroundImage: `url(${Home.src})`,
        }}
      />
      <div className={styles.typewriter}>
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
      </div>
    </div>
  );
};

export default blog_description;
