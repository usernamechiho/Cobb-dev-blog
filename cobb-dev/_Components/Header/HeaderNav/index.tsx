import { useRouter } from 'next/router';
import { IHandleProps } from 'Types/type';
import styles from './headerNav.module.scss';

const NAV_ITEMS = [
  { title: '# COBB', path: '/owner-description' },
  { title: '# BLOG', path: '/blog-description' },
];

const HeaderNav = ({ handleCloseMenu }: IHandleProps) => {
  const router = useRouter();

  const handleNavigateAndCloseMenu = (url: string) => {
    router.push(url);
    handleCloseMenu();
  };

  return (
    <nav className={styles.sidebarNavContainer}>
      <ul>
        {NAV_ITEMS.map((list) => (
          <li>
            <button
              type='button'
              onClick={() => {
                handleNavigateAndCloseMenu(list.path);
              }}
            >
              {list.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
