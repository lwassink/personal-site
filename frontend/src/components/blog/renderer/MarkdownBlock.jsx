import React from 'react';
import ReactMarkdown from 'react-markdown';
import TexBlock from './TexBlock';

export default ({ content }) => {
  return (
    <ReactMarkdown
    source={content}
    containerProps={{ className: "markdown" }}
    renderers={{ Code: InlineCode }}/>
  );
};

const InlineCode = (source) => {
  const code = source.literal
  if (code.startsWith('math '))
    return <TexBlock content={code} display={false} />
  return <code>{code}</code>
}
