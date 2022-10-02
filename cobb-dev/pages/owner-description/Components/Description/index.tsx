import Image from 'next/image';
import chiho from 'public/imgs/chiho.jpg';
import styles from './description.module.scss';

const Description = () => {
  return (
    <section className={styles.ownerDescContainer}>
      <div className={styles.mainDescription}>
        <p>About</p>
        <h1>
          Interested in client-side development.
          <br />
          Transforming ideas into reality.
          <br />I enjoy being interlinked with people !
        </h1>
      </div>

      <div className={styles.imageAndIntro}>
        <div
          className={styles.chihoJpg}
          style={{
            backgroundImage: `url(${chiho.src})`,
          }}
        />
      </div>
    </section>
  );
};

export default Description;
