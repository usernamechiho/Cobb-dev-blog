/* eslint-disable react/no-danger */
import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import { dateFormat } from '_Utils/Helper';
import MarkdownRenderer from '_Components/MarkdownRenderer';
import HeadMeta from '_Components/HeadMeta';
import dynamic from 'next/dynamic';
import { IPostsDataProps } from 'Types/type';
import styles from './blog.module.scss';
import 'github-markdown-css/github-markdown-light.css';

const Comment = dynamic(() => import('_Components/Comment'), {
  ssr: false,
});

interface IArticleProps {
  article: {
    data: IPostsDataProps;
    meta: {};
  };
}

interface ICtxProps {
  params: {
    params: string | number;
    id: number;
  };
}

const Article = ({ article }: IArticleProps) => {
  return (
    <>
      <HeadMeta
        title={article.data.attributes.title}
        description={article.data.attributes.subtitle}
        image={article.data.attributes.thumbnail.data.attributes.url}
      />
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.tag}>{article.data.attributes.tag.data.attributes.tag}</p>
          <h1>{article.data.attributes.title}</h1>
          <p className={styles.publishedDate}>Published at {dateFormat(article.data.attributes.publishedAt)}</p>
        </div>
        <main
          className='markdown-body'
          ref={(node) => {
            if (node) {
              node.style.setProperty('background', '#FCFDFC', 'important');
            }
          }}
        >
          <MarkdownRenderer markdown={article.data.attributes.content} />
          <Comment />
        </main>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const articlePaths = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/?populate[0]=*`);

  const paths = articlePaths.data.data.map((path: { id: string | number }) => ({
    params: { id: `${path.id}` },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(ctx: ICtxProps) {
  const { params } = ctx;
  const { id } = params;

  const article = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${id}?populate[1]=tag&populate[0]=thumbnail`
  );

  return {
    props: { article: article.data },
    revalidate: 60
  };
}

export default Article;
