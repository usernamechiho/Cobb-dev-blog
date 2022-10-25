import Image from 'next/image';

const Posts = ({ articles }: any) => {
  console.log(articles[0].attributes.thumbnail.data[0].attributes.url);

  return (
    <div>
      {articles.map((article: any) => {
        const src = `${process.env.NEXT_PUBLIC_BASE_URL}${article.attributes.thumbnail.data[0].attributes.url}`;

        return (
          <>
            <Image loader={() => src} src={src} width={200} height={150} />
            <div>{article.attributes.title}</div>
          </>
        );
      })}
    </div>
  );
};

export default Posts;
