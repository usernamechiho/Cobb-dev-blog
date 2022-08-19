import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import FaceIcon from '@mui/icons-material/Face'

function IntroIcon() {
  return (
    <MenuItem>
      <ListItemIcon>
        <FaceIcon fontSize='medium' />
      </ListItemIcon>
      <ListItemText>주인 소개</ListItemText>
    </MenuItem>
  )
}

export default IntroIcon
