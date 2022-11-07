/* eslint-disable react/no-danger */
import axios from 'axios';
import { dateFormat } from '_Utils/Helper';
import MarkdownRenderer from '_Components/MarkdownRenderer';
import styles from './blog.module.scss';

const Article = ({ article }: any) => {
  console.log(article);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.tag}>{article.data.attributes.tag.data.attributes.tag}</p>
        <h1>{article.data.attributes.title}</h1>
        <p className={styles.publishedDate}>{dateFormat(article.data.attributes.publishedAt)}</p>
      </div>
      <main>
        <MarkdownRenderer markdown={article.data.attributes.content} />
      </main>
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

  const article = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${id}?populate[1]=tag`);

  return {
    props: { article: article.data },
  };
}

export default Article;
