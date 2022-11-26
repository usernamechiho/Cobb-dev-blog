import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import { motion } from 'framer-motion';
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

      <section className={styles.descriptionContainer}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          블로그를 개설하기 전, 다양한 블로그 플랫폼을 사용해봤습니다. 시간이 지날수록 블로그 플랫폼 사용이 지루해져
          갔습니다. 온전히 글쓰기에 집중할 수 있었지만, 내 것이 아니라는 생각에 블로그 관리를 소홀히 하게 됐습니다.
          약간의 책임감이 필요해 블로그를 직접 제작하기로 결심했습니다.
        </motion.p>
        <p>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            제 목적은 최고의 블로그를 만드는 게 아닙니다. 단순한 필요성과 흥미에 이끌려 만들었습니다. 처음부터 계획,
            디자인, 개발부터 배포까지 스스로 관리했습니다. Cobb-decdev 블로그는 다른 블로그 플랫폼과 비교했을 때 더 나은
            기능을 제공하지 않을 수 있습니다.
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            viewport={{ once: true }}
          >
            {' '}
            하지만 나만의 블로그를 소유하는 건 색다른 느낌을 줍니다.
          </motion.span>
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          viewport={{ once: true }}
        >
          개발엔 정답이 없습니다. 모든 코드는 고정된 상태로 사용되지 않습니다. 어떻게, 언제, 어디에 사용하냐에 따라
          정답 같은 코드도 오답처럼 보이곤 합니다. 그래서 코드를 기억하기보단 원론을 기록하고 이해하기 위해서 블로그가
          필요했습니다. 개발자로서의 여정에 도움이 될 참고서가 되면 좋겠습니다.
        </motion.p>
      </section>
    </div>
  );
};

export default blog_description;
