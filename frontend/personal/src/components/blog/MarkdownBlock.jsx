import React from 'react';
import ReactMarkdown from 'react-markdown';
import TexBlock from './TexBlock';

export default ({ content }) => {
  return (
    <ReactMarkdown source={content} skipHtml={true} />
  )
};
