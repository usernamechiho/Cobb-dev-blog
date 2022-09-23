import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import FaceIcon from '@mui/icons-material/Face';
import Link from 'next/link';

function IntroIcon() {
  return (
    <Link href='/owner-description'>
      <a>
        <MenuItem>
          <ListItemIcon>
            <FaceIcon fontSize='medium' style={{ color: 'black' }} />
          </ListItemIcon>
          <ListItemText style={{ color: '#666666' }}>주인 소개</ListItemText>
        </MenuItem>
      </a>
    </Link>
  );
}

export default IntroIcon;
