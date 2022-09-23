import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { motion } from 'framer-motion';
import DailyStepper from './Components/DailyStepper';
import styles from './ownerDescription.module.scss';
import TechStacks from './Components/TechStacks';
import OwnerDesc from './Components/OwnerDesc';
import EducationDesc from './Components/EducationDesc';

const owner_description = () => {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.stepperContainer}>
        <DailyStepper />
      </section>

      <section className={styles.ownerAndEducation}>
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <div>
            <OwnerDesc />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <div className={styles.educationIconBox}>
            <SchoolOutlinedIcon className={styles.educationIcon} />
            <EducationDesc />
          </div>
        </motion.div>
      </section>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <section className={styles.techStacksBox}>
          <CodeIcon className={styles.codeIcon} />
          <CodeOffIcon className={styles.codeOffIcon} />
          <TechStacks />
        </section>
      </motion.div>
    </div>
  );
};

export default owner_description;
