import Head from 'next/head';

const HeadMeta = ({ title, description, url, image }: any) => {
  return (
    <Head>
      <title>{title || 'Cobb.dev'}</title>
      <meta name='description' content={description || '프론트엔드에 관하여'} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta property='og:title' content={title || 'Cobb.dev'} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='www.google.com' />
      <meta property='og:image' content={`${process.env.NEXT_PUBLIC_BASE_URL}${image}`} />
      <meta property='og:article:author' content='Cobb.dev' />
    </Head>
  );
};

export default HeadMeta;

// http://localhost:1337/uploads/thumbnail_poster_7e2557163a.png
