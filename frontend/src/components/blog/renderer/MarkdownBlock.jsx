import React from 'react';
import ReactMarkdown from 'react-markdown';

export default ({ content }) => {
  return (
    <ReactMarkdown source={content} containerProps={{ className: "markdown" }}/>
  );
};
