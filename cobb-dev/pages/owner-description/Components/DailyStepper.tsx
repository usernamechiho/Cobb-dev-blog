import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const DAILY_STEP = ['Wake up', 'Start coding', 'Sleep in'];

function DailyStepper() {
  return (
    <Stepper alternativeLabel sx={{ circle: { color: '#1c1c21' }, margin: '20px 0' }}>
      {DAILY_STEP.map((daily) => (
        <Step key={daily}>
          <StepLabel>
            <span style={{ color: '#1c1c21', fontSize: '12px', fontWeight: '500' }}>{daily}</span>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default DailyStepper;
