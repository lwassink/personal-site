import React from 'react';
import TexBlock from './TexBlock';
import CodeBlock from './CodeBlock';
import MarkdownBlock from './MarkdownBlock';

export default ({ text }) => {
  const LANGUGES = ['ruby', 'scala', 'sql', 'js'];

  function proccessRemainder(string, end, offset) {
    if (end === -1) {
      return [];
    } else {
      return proccessText(string.substr(end + offset));
    }
  }

  function proccessMath(text) {
    const end = text.indexOf('```');
    const content = text.slice(0, end).trim();
    const type = "math";
    return [{ type, content }, ...proccessRemainder(text, end, 3)];
  }

  function proccessCode(text) {
    const begin = text.search(/\s/);
    const end = text.indexOf('```');
    const type = text.slice(0, begin);
    const content = text.slice(begin, end).trim();
    return [{ type, content }, ...proccessRemainder(text, end, 3)];
  }

  function proccessMarkdown(text) {
    const end = text.indexOf('```');
    const content = text.slice(0, end);
    const type = "markdown";
    return [{ type, content }, ...proccessRemainder(text, end, 0)];
  }

  function proccessText(text) {
    if (text.startsWith('```math')) {
      return proccessMath(text.substr(7));
    } else if (text.startsWith('```')) {
      return proccessCode(text.substr(3));
    } else {
      return proccessMarkdown(text);
    }
  }

  function renderBlocks(blocks) {
    return blocks.map((block, idx) => {
      const { type, content } = block;

      switch (type) {
      case 'markdown':
        return <MarkdownBlock content={content} key={idx} />
      case 'math':
        return <TexBlock content={content} display={true} key={idx} />;
      default:
        if (LANGUGES.includes(type))
          return <CodeBlock content={content} language={type} key={idx} />
        throw `Content type: "${type}" not found`
      }
    })
  }

  return (
    <div className="renderer">
      {renderBlocks(proccessText(text))}
    </div>
  );
};
