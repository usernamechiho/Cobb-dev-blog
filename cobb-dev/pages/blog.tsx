import Posts from '_Components/Posts';
import axios from 'axios';
import styles from './blog.module.scss';

function Blog({ posts }: any) {
  const articles = posts.data.reverse();

  return (
    <div className={styles.blogContainer}>
      <p>OCTOBER 01, 2022 — BY COBB</p>
      <h1>Published posts</h1>

      <Posts articles={articles} />

      {false && <div>헤응</div>}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles?populate[0]=thumbnail`);

  return { props: { posts: posts.data } };
}

export default Blog;
