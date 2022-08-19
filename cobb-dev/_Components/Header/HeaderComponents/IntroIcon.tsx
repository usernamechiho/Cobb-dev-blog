import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import FaceIcon from '@mui/icons-material/Face'

function IntroIcon() {
  return (
    <MenuItem>
      <ListItemIcon>
        <FaceIcon fontSize='medium' style={{ color: 'black' }} />
      </ListItemIcon>
      <ListItemText style={{ color: '#666666' }}>주인 소개</ListItemText>
    </MenuItem>
  )
}

export default IntroIcon
