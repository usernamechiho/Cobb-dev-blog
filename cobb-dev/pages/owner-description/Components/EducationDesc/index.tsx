import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import styles from './educationDesc.module.scss'

const EDUCATIONS = [
  {
    institution: "The King's Academy (USA)",
    src: '/imgs/TKA.png',
  },
  {
    institution: '서원고등학교',
    src: '/imgs/SEOWON.jpeg',
  },
  {
    institution: '서울과학기술대학교 영어영문학과',
    src: '/imgs/SNUST.png',
  },
]

function EducationDesc() {
  return (
    <div className={styles.schoolBox}>
      <List>
        {EDUCATIONS.map((edu) => (
          <ListItem key={edu.institution}>
            <ListItemAvatar>
              <Avatar src={`${edu.src}`} sx={{ width: 50, height: 50 }} />
            </ListItemAvatar>
            <ListItemText style={{ marginLeft: 20 }} primary={`${edu.institution}`} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default EducationDesc
