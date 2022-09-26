import wind from 'public/imgs/wind.png';
import styles from './greeting.module.scss';

const Greeting = () => {
  return (
    <div className={styles.greetingContainer}>
      <section>
        <p>
          안녕하세요. <span>코브</span>입니다.
        </p>
        <p>
          블로그의 <span>문제점</span>, <span>개선점</span>이 보이시면 메일 부탁드려요.
        </p>
        <p>
          간단한 <span>질문</span>도 감사히 받겠습니다!
        </p>
        <p>
          다른 <span>용무</span>도 편하게 연락주세요.
        </p>
      </section>

      <section>
        <div
          className={styles.cloudImage}
          style={{
            backgroundImage: `url(${wind.src})`,
          }}
        />
      </section>
    </div>
  );
};

export default Greeting;
