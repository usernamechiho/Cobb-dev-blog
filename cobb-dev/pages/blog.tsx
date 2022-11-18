import Posts from '_Components/Posts';
import axios from 'axios';
import dayjs from 'dayjs';
import styles from './blog.module.scss';

function Blog({ posts }: any) {
  const articles = posts.data;

  const today = dayjs().format('MMMM DD, YYYY');

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

  return { props: { posts: posts.data } };
}

export default Blog;
