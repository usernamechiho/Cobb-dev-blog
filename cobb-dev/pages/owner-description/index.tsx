import Typewriter from 'typewriter-effect'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import CodeIcon from '@mui/icons-material/Code'
import CodeOffIcon from '@mui/icons-material/CodeOff'
import DailyStepper from './Components/DailyStepper'
import styles from './ownerDescription.module.scss'
import TechStacks from './Components/TechStacks'
import OwnerDesc from './Components/OwnerDesc'
import EducationDesc from './Components/EducationDesc'

const owner_description = () => {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.stepperContainer}>
        <DailyStepper />
      </section>
      <section className={styles.mainTypography}>
        <h1>
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
        </h1>
      </section>

      <section className={styles.imageDesc}>
        <OwnerDesc />
      </section>

      <section>
        <SchoolOutlinedIcon className={styles.educationIcon} />
        <EducationDesc />
      </section>

      <section>
        <CodeIcon className={styles.codeIcon} />
        <CodeOffIcon className={styles.codeOffIcon} />
        <TechStacks />
      </section>
    </div>
  )
}

export default owner_description
