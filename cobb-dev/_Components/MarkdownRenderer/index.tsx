import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ markdown }: any) => {
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default MarkdownRenderer;
