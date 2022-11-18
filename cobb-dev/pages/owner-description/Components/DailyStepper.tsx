import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import styles from './dailystepper.module.scss';

const DAILY_STEP = ['기상', '코딩', '취침'];

function DailyStepper() {
  return (
    <Stepper alternativeLabel className={styles.stepper}>
      {DAILY_STEP.map((daily) => (
        <Step key={daily}>
          <StepLabel>
            <span>{daily}</span>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default DailyStepper;
