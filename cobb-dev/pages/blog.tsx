import Posts from '_Components/Posts';
import axios from 'axios';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from './blog.module.scss';

function Blog({ posts }: any) {
  const articles = posts.data;

  const today = dayjs().format('MMMM DD, YYYY');

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  useEffect(() => {
    refreshData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.blogContainer}>
      <p>{today} — BY COBB</p>
      <h1>Published posts</h1>

      <Posts articles={articles} />
    </div>
  );
}

export async function getStaticProps() {
  const posts = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/articles?populate[0]=thumbnail&populate[1]=tag`
  );

  return { props: { posts: posts.data }, revalidate: 60 };
}

export default Blog;
