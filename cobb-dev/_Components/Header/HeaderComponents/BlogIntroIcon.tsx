import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import FeedIcon from '@mui/icons-material/Feed'

function BlogIntroIcon() {
  return (
    <MenuItem>
      <ListItemIcon>
        <FeedIcon fontSize='medium' style={{ color: 'black' }} />
      </ListItemIcon>
      <ListItemText style={{ color: '#666666' }}>블로그 소개</ListItemText>
    </MenuItem>
  )
}

export default BlogIntroIcon
