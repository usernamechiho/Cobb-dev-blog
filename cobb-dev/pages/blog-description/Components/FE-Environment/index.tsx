import Typewriter from 'typewriter-effect';
import styles from '../../blogDesc.module.scss';

function FE_Environment() {
  return (
    <>
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
              .start();
          }}
          options={{ loop: true }}
        />
      </div>
      <p>
        프론트엔드를 공부할 때마다 정답이 없음을 느꼈습니다. 똑같은 원리로 제각기 다른 코드를 작성하고 새로운 사이드
        이펙트를 관리하는 데 있어 원론의 중요성을 느끼고, 기록의 중요성을 느꼈습니다.
      </p>
      <p>
        개인적으론 라이브러리를 적극적으로 사용해보고 나중에 참고할 수 있을 만한 후기를 많이 남기고 싶습니다. 프로젝트
        레벨에서 라이브러리의 용이함과 성능에 대해 고민이 많았었습니다. 저와 비슷한 고민이 있는 개발자들에게 도움이 되는
        글을 작성하고 싶습니다.
      </p>
    </>
  );
}

export default FE_Environment;
