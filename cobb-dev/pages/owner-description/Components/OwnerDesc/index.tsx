import Image from 'next/image'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'
import styles from './ownerDesc.module.scss'

const INFORMATION = [
  {
    icon: <FaceOutlinedIcon style={{ color: 'white' }} fontSize='medium' />,
    desc: 'Cobb (코브)',
  },
  {
    icon: <HomeOutlinedIcon style={{ color: 'white' }} fontSize='medium' />,
    desc: '용인시 수지구',
  },
  {
    icon: <ComputerOutlinedIcon style={{ color: 'white' }} fontSize='medium' />,
    desc: '프론트엔드 개발',
  },
  {
    icon: <BusinessCenterOutlinedIcon style={{ color: 'white' }} fontSize='medium' />,
    desc: '구직 중',
  },
  {
    icon: <GitHubIcon style={{ color: 'white' }} fontSize='medium' />,
    desc: '깃허브 방문하기',
  },
]

function OwnerDesc() {
  return (
    <div className={styles.ownerDescContainer}>
      <div>
        <Image src='/imgs/chiho.JPG' width={300} height={330} />
      </div>
      <div className={styles.introDesc}>
        <Typography variant='h5'>주인 소개</Typography>
        <List>
          {INFORMATION.map((info) => (
            <>
              <ListItem>
                <ListItemIcon>{info.icon}</ListItemIcon>
                <ListItemText primary={`${info.desc}`} />
              </ListItem>

              <Divider className={styles.divider} />
            </>
          ))}
        </List>
      </div>
    </div>
  )
}

export default OwnerDesc
