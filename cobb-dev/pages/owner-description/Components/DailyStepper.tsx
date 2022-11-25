// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import styles from './dailystepper.module.scss';

// const DAILY_STEP = ['기상', '코딩', '취침'];

// function DailyStepper() {
//   return (
//     <Stepper alternativeLabel className={styles.stepper}>
//       {DAILY_STEP.map((daily) => (
//         <Step key={daily}>
//           <StepLabel>
//             <span>{daily}</span>
//           </StepLabel>
//         </Step>
//       ))}
//     </Stepper>
//   );
// }

// export default DailyStepper;

import styles from './dailystepper.module.scss';

const Divider1 = () => {
  return <div className={styles.divider1} />;
};

const Divider2 = () => {
  return <div className={styles.divider2} />;
};

function DailyStepper() {
  return (
    <>
      <article className={styles.container}>
        <section>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </section>
        <section>
          <p>기상</p>
          <p>코딩</p>
          <p>취침</p>
        </section>
      </article>
      <Divider1 />
      <Divider2 />
    </>
  );
}

export default DailyStepper;
