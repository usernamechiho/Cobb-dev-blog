import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import FeedIcon from '@mui/icons-material/Feed';
import Link from 'next/link';

function BlogIntroIcon() {
  return (
    <Link href='/blog-description'>
      <a>
        <MenuItem>
          <ListItemIcon>
            <FeedIcon fontSize='medium' style={{ color: 'black' }} />
          </ListItemIcon>
          <ListItemText style={{ color: '#666666' }}>블로그소개</ListItemText>
        </MenuItem>
      </a>
    </Link>
  );
}

export default BlogIntroIcon;
