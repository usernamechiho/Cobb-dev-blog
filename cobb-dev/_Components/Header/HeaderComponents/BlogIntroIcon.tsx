import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import FeedIcon from '@mui/icons-material/Feed';
import Link from 'next/link';

interface IIsMenu {
  isMenu: boolean;
  pathname: string;
}

function BlogIntroIcon({ isMenu, pathname }: IIsMenu) {
  const isActive = Boolean(pathname === '/blog-description');

  if (isMenu) {
    return (
      <Link href='/blog-description'>
        <a>
          <MenuItem>
            <ListItemIcon>
              <FeedIcon fontSize='medium' style={{ color: isActive ? '#007aff' : 'black' }} />
            </ListItemIcon>
            <ListItemText style={{ color: '#666666' }}>블로그소개</ListItemText>
          </MenuItem>
        </a>
      </Link>
    );
  }

  return (
    <Link href='/blog-description'>
      <a>
        <FeedIcon fontSize='medium' style={{ color: isActive ? '#007aff' : 'black', marginLeft: '20px' }} />
      </a>
    </Link>
  );
}

export default BlogIntroIcon;
