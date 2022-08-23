import Typewriter from 'typewriter-effect'
import Image from 'next/Image'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import FaceIcon from '@mui/icons-material/Face'
import GitHubIcon from '@mui/icons-material/GitHub'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import ComputerIcon from '@mui/icons-material/Computer'
import HomeIcon from '@mui/icons-material/Home'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import SchoolIcon from '@mui/icons-material/School'
import DailyStepper from './Components/DailyStepper'
import styles from './ownerDescription.module.scss'

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
        <div>
          <Image src='/imgs/chiho.JPG' width={300} height={350} />
        </div>

        <div className={styles.introDesc}>
          <Typography variant='h5'>주인 소개</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <FaceIcon style={{ color: 'white' }} fontSize='medium' />
              </ListItemIcon>
              <ListItemText primary='Cobb (코브)' />
            </ListItem>

            <Divider style={{ backgroundColor: 'white' }} />

            <ListItem>
              <ListItemIcon>
                <HomeIcon style={{ color: 'white' }} fontSize='medium' />
              </ListItemIcon>
              <ListItemText primary='용인시 수지구' />
            </ListItem>

            <Divider style={{ backgroundColor: 'white' }} />

            <ListItem>
              <ListItemIcon>
                <ComputerIcon style={{ color: 'white' }} fontSize='medium' />
              </ListItemIcon>
              <ListItemText primary='프론트엔드 개발' />
            </ListItem>

            <Divider style={{ backgroundColor: 'white' }} />

            <ListItem>
              <ListItemIcon>
                <BusinessCenterIcon style={{ color: 'white' }} fontSize='medium' />
              </ListItemIcon>
              <ListItemText primary='구직 중' />
            </ListItem>

            <Divider style={{ backgroundColor: 'white' }} />

            <ListItem>
              <ListItemIcon>
                <GitHubIcon style={{ color: 'white' }} fontSize='medium' />
              </ListItemIcon>
              <ListItemText primary='깃허브 구경하기' />
            </ListItem>
          </List>
        </div>
      </section>
      <section>
        <SchoolIcon className={styles.educationIcon} />
        <div className={styles.schoolBox}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar src='/imgs/TKA.png' sx={{ width: 50, height: 50 }} />
              </ListItemAvatar>
              <ListItemText style={{ marginLeft: 20 }}>The King's Academy (USA)</ListItemText>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar src='/imgs/SEOWON.jpeg' sx={{ width: 50, height: 50 }} />
              </ListItemAvatar>
              <ListItemText primary='서원고등학교' style={{ marginLeft: 20 }} />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar src='/imgs/SNUST.png' sx={{ width: 50, height: 50 }} />
              </ListItemAvatar>
              <ListItemText primary='서울과학기술대학교 영어영문학' style={{ marginLeft: 20 }} />
            </ListItem>
          </List>
        </div>
      </section>
      <footer>footer</footer>
    </div>
  )
}

export default owner_description
