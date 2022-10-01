import styles from './home.module.scss';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <p>
        OCTOBER 01, 2022 — BY COBB — VISIT <span>GITHUB</span>
      </p>
      <h1>Published posts</h1>
    </div>
  );
}

export default Home;
