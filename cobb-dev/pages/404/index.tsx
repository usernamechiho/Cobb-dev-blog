import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './c404.module.scss';

const Custom404 = () => {
  const router = useRouter();

  const [count, setCount] = useState(5);

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    if (!count) {
      clearInterval(countdown);
      router.push('/blog');
    }

    return () => clearInterval(countdown);
  }, [count, router]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        404 !
        <p>
          You'll be redirected within <span>{count}</span> seconds.
        </p>
      </div>
    </div>
  );
};

export default Custom404;
