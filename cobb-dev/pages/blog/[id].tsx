import axios from 'axios';
import styles from './blog.module.scss';

const Article = ({ article }: any) => {
  console.log(article);

  return (
    <div className={styles.container}>
      <div className={styles.header}>header</div>
      <main>main</main>
    </div>
  );
};

export async function getStaticPaths() {
  const articlePaths: any = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/?populate[0]=*`);

  const paths = articlePaths.data.data.map((path: any) => ({
    params: { id: `${path.id}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(ctx: any) {
  const { params } = ctx;
  const { id } = params;

  const article = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${id}?populate[0]=*`);

  return {
    props: { article: article.data },
  };
}

export default Article;
