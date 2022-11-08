/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unstable-nested-components */
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import vscDarkPlus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import styles from './markdown.module.scss';

// eslint-disable-next-line react/prop-types
const MarkdownRenderer = ({ markdown }) => {
  return (
    <ReactMarkdown
      children={markdown}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      className={styles.markdown}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={vscDarkPlus}
              language={match[1]}
              PreTag='div'
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};

export default MarkdownRenderer;
