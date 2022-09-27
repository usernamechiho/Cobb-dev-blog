import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './greeting.module.scss';

const Greeting = () => {
  return (
    <div className={styles.greetingContainer}>
      <section style={{ height: '40%' }}>
        <h1>Inform Me.</h1>
        <p>
          이메일을 보내주세요. <br /> 24시간내로 답장 드리겠습니다 ☻
        </p>
      </section>

      <section className={styles.emailIconAndDesc}>
        <p>
          <BugReportOutlinedIcon /> 개선점, 문제점
        </p>
        <p>
          <WorkspacesOutlinedIcon /> 자유로운 질문
        </p>
        <p>
          <AlternateEmailOutlinedIcon /> iamchho1@gmail.com
        </p>
      </section>

      <section className={styles.githubButtonContainer}>
        <button type='button' className={styles.githubButton}>
          <GitHubIcon className={styles.emailFormIcon} />
        </button>
      </section>
    </div>
  );
};

export default Greeting;
