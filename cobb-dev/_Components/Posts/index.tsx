import Image from 'next/image';
import styles from './posts.module.scss';

const Posts = ({ articles }: any) => {
  console.log(articles[0].attributes.thumbnail.data[0].attributes.url);

  return (
    <main className={styles.postContainer}>
      {articles.map((article: any) => {
        const src = `${process.env.NEXT_PUBLIC_BASE_URL}${article.attributes.thumbnail.data[0].attributes.url}`;

        return (
          <div className={styles.postBox}>
            <Image loader={() => src} src={src} width={180} height={130} />
            <h2>{article.attributes.title}</h2>
          </div>
        );
      })}
    </main>
  );
};

export default Posts;
