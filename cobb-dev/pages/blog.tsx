import Posts from '_Components/Posts';
import axios from 'axios';
import styles from './blog.module.scss';

function Blog({ posts }: any) {
  const articles = posts.data.reverse();
  console.log(articles);

  return (
    <div className={styles.blogContainer}>
      <p>OCTOBER 01, 2022 — BY COBB</p>
      <h1>Published posts</h1>

      {articles.map((post: any) => (
        <div>{post.attributes.title}</div>
      ))}

      <Posts />
    </div>
  );
}

export async function getStaticProps() {
  const posts = await axios.get('http://localhost:1337/api/articles');

  return { props: { posts: posts.data } };
}

export default Blog;
