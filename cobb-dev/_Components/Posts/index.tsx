import Image from 'next/image';
import Link from 'next/link';
import { dateFormat } from '_Utils/Helper';
import styles from './posts.module.scss';

const Posts = ({ articles }: any) => {
  return (
    <main className={styles.postContainer}>
      {articles.map((article: any) => {
        const src = `${process.env.NEXT_PUBLIC_BASE_URL}${article.attributes.thumbnail.data.attributes.url}`;
        const publishedDate = dateFormat(article.attributes.publishedAt);
        const { tag } = article.attributes.tag.data.attributes;
        const key = article.attributes.title;

        return (
          <Link
            href={{
              pathname: `/blog/${article.id}`,
              query: { title: article.attributes.title },
            }}
            key={key}
          >
            <div className={styles.postBox}>
              <div className={styles.imageContainer}>
                <Image loader={() => src} src={src} layout='fill' />
              </div>

              <div className={styles.listBlock} />

              <div className={styles.contentContainer}>
                <h2>{article.attributes.title}</h2>
                <div className={styles.subtitle}>{article.attributes.subtitle}</div>
                <div className={styles.dateAndTag}>
                  <span>{tag}</span> - {publishedDate}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </main>
  );
};

export default Posts;
