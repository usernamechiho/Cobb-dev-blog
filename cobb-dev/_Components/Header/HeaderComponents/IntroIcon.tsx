import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import FaceIcon from '@mui/icons-material/Face';
import Link from 'next/link';

interface IIsMenu {
  isMenu: boolean;
  pathname: string;
}

function IntroIcon({ isMenu, pathname }: IIsMenu) {
  const isActive = Boolean(pathname === '/owner-description');

  if (isMenu) {
    return (
      <Link href='/owner-description'>
        <a>
          <MenuItem>
            <ListItemIcon>
              <FaceIcon fontSize='medium' style={{ color: isActive ? '#007aff' : 'black' }} />
            </ListItemIcon>
            <ListItemText style={{ color: '#666666' }}>주인 소개</ListItemText>
          </MenuItem>
        </a>
      </Link>
    );
  }

  return (
    <Link href='/owner-description'>
      <a>
        <FaceIcon fontSize='medium' style={{ color: isActive ? '#007aff' : 'black' }} />
      </a>
    </Link>
  );
}

export default IntroIcon;
