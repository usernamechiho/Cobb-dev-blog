import desktop from 'public/imgs/desktop.png';
import mobile from 'public/imgs/mobile.png';
import styles from '../../blogDesc.module.scss';

function RecommendedDevice() {
  return (
    <>
      <img
        alt='hello'
        src='https://i.pinimg.com/originals/54/b9/72/54b972c504b660f6e7905ff1242245c9.png'
        width={300}
        height={400}
        className={styles.iphoneImageTag}
      />
      <img alt='hello' src='/imgs/imac.png' className={styles.desktopImageTag} />
      <div
        className={styles.desktopImage}
        style={{
          backgroundImage: `url(${desktop.src})`,
        }}
      />
      <div className={styles.mobileHeader}>
        LG U+
        <span className={styles.mobileHeaderTime}>11:01</span>
      </div>
      <div
        className={styles.mobileImage}
        style={{
          backgroundImage: `url(${mobile.src})`,
        }}
      />
    </>
  );
}

export default RecommendedDevice;
