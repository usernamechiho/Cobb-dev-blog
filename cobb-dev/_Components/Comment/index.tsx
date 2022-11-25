import { useEffect, useRef } from 'react';
import styles from './comment.module.scss';

export default function Comment() {
  const commentsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const scriptEl = document.createElement('script');
    scriptEl.src = 'https://utteranc.es/client.js';
    scriptEl.async = true;
    scriptEl.crossOrigin = 'anonymous';
    scriptEl.setAttribute('repo', 'usernamechiho/Cobb-dev-blog');
    scriptEl.setAttribute('issue-term', 'title');
    scriptEl.setAttribute('theme', 'github-light');
    scriptEl.setAttribute('label', 'comment');

    commentsRef.current?.appendChild(scriptEl);
  }, []);

  return <section ref={commentsRef} className={styles.comment} />;
}
