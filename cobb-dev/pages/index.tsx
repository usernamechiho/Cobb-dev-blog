import { useEffect } from 'react';
import axios from 'axios';

function Home() {
  const getArticle = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/?populate[0]=*`);

    console.log(res);
  };

  useEffect(() => {
    getArticle();
  }, []);

  return <div>1</div>;
}

export default Home;
