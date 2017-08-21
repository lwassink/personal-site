import React from 'react';
import ReactMarkdown from 'react-markdown';
import TexBlock from './TexBlock';

export default ({ content }) => {
  return (
    <ReactMarkdown
    source={content}
    containerProps={{ className: "markdown" }}
    renderers={{
       Code: InlineCode,
       Link: props => <a href={props.href} target="_blank">{props.children}</a>
     }}/>
  );
};

const InlineCode = (source) => {
  const code = source.literal
  if (code.startsWith('math '))
    return <TexBlock content={code.substr(5)} display={false} />
  return <code>{code}</code>
}
