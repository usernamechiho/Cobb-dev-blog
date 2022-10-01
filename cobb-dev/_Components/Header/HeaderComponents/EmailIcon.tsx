import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link';

interface IIsMenu {
  isMenu: boolean;
  pathname: string;
}

function EmailIcon({ isMenu, pathname }: IIsMenu) {
  const isActive = Boolean(pathname === '/send-email');

  if (isMenu) {
    return (
      <Link href='send-email'>
        <a>
          <MenuItem>
            <ListItemIcon>
              <MailIcon fontSize='medium' style={{ color: isActive ? 'black' : '#aaaaaa' }} />
            </ListItemIcon>
            <ListItemText style={{ color: isActive ? 'black' : '#aaaaaa' }}>이메일 전송</ListItemText>
          </MenuItem>
        </a>
      </Link>
    );
  }

  return (
    <Link href='send-email'>
      <a>
        <MailIcon fontSize='medium' style={{ color: isActive ? 'black' : '#aaaaaa', marginLeft: '20px' }} />
      </a>
    </Link>
  );
}

export default EmailIcon;
