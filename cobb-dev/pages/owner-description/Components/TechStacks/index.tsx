import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import styles from './techStacks.module.scss'

const STACKS = [
  {
    tech: 'Typescript',
    src: '/imgs/TS.png',
  },
  {
    tech: 'ReactJS',
    src: '/imgs/REACT.png',
  },
  {
    tech: 'NEXT.js',
    src: '/imgs/NEXT.png',
  },
]

function TechStacks() {
  return (
    <div className={styles.techStacksContainer}>
      <List className={styles.listContainer}>
        {STACKS.map((stack) => (
          <ListItem key={stack.tech}>
            <ListItemAvatar>
              <Avatar src={`${stack.src}`} sx={{ width: 50, height: 50, borderRadius: 3 }} variant='square' />
            </ListItemAvatar>
            <ListItemText primary={`${stack.tech}`} style={{ marginLeft: 20 }} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default TechStacks
