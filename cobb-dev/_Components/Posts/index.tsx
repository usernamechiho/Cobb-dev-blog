import Image from 'next/image';
import Link from 'next/link';
import { dateFormat } from '_Utils/Helper';
import styles from './posts.module.scss';

const Posts = ({ articles }: any) => {
  console.log(articles);

  return (
    <main className={styles.postContainer}>
      {articles.map((article: any) => {
        const src = `${process.env.NEXT_PUBLIC_BASE_URL}${article.attributes.thumbnail.data[0].attributes.url}`;
        const publishedDate = dateFormat(articles[0].attributes.publishedAt);
        const { tag } = article.attributes.tag.data.attributes;

        return (
          <Link
            href={{
              pathname: `/blog/${article.id}`,
              query: { title: article.attributes.title },
            }}
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
