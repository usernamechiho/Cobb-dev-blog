import Link from 'next/link';
import styles from './headerNav.module.scss';

const NAV_ITEMS = [
  { title: '# COBB', path: '/owner-description' },
  { title: '# BLOG', path: '/blog-description' },
];

const HeaderNav = () => {
  return (
    <nav className={styles.sidebarNavContainer}>
      <ul>
        {NAV_ITEMS.map((list) => (
          <Link href={list.path}>
            <a>
              <li>{list.title}</li>
            </a>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
