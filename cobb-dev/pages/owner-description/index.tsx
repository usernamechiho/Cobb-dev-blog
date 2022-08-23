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

      <section className={styles.ownerAndEducation}>
        <div>
          <OwnerDesc />
        </div>

        <div className={styles.educationIconBox}>
          <SchoolOutlinedIcon className={styles.educationIcon} />
          <EducationDesc />
        </div>
      </section>

      <section className={styles.techStacksBox}>
        <CodeIcon className={styles.codeIcon} />
        <CodeOffIcon className={styles.codeOffIcon} />
        <TechStacks />
      </section>
    </div>
  )
}

export default owner_description
