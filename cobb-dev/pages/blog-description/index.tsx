import Typewriter from 'typewriter-effect'
import desktop from 'public/imgs/desktop.png'
import mobile from 'public/imgs/mobile.png'
import styles from './blogDesc.module.scss'

const blog_description = () => {
  return (
    <main className={styles.blogDescContainer}>
      <section className={styles.blogReasonContainer}>
        <h1>✔️ 블로그 개설 이유</h1>
        <p>
          프론트엔드 생태계를 공부하면서 배운 내용들을 기록하고 싶었습니다. Velog, Tistory, Github.io등의 좋은 블로그
          플랫폼도 이용할 수 있었으나, 블로그 플랫폼 선택에 있어 차별을 원했고 결국엔 직접 블로그 플랫폼을 구축하기로
          결정했습니다.
        </p>
        <p>
          "차별은 좋지만, 당신 블로그가 더 좋은 기능을 제공하나?"라는 질문에 대한 답변은 "아닙니다." 입니다. 하지만
          '운영' 과 '제약없는 Customization'이 주는 즐거움이 다른 솔루션을 사용하는 것보다 더 의미있다고 생각해서
          블로그를 개설하게 됐습니다.
        </p>
      </section>
      <section className={styles.typewriterSection}>
        <h1>✔️ 복잡한 프론트엔드 생태계</h1>
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
                .start()
            }}
            options={{ loop: true }}
          />
        </div>
        <p>
          프론트엔드를 공부할 때마다 정답이 없음을 느꼈습니다. 똑같은 원리로 제각기 다른 코드를 작성하고 새로운 사이드
          이펙트를 관리하는 데 있어 원론의 중요성을 느끼고, 기록의 중요성을 느꼈습니다.
        </p>
        <p>

        </p>
      </section>
      <div className={styles.recommendedDevice}>
        <h1>✔️ 추천 디바이스 환경</h1>
      </div>
      <section className={styles.iphoneImageContainer}>
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
      </section>
    </main>
  )
}

export default blog_description
