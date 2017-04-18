import React from 'react';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light"
import js from 'highlight.js/lib/languages/javascript';
import scala from 'highlight.js/lib/languages/scala';
import ruby from 'highlight.js/lib/languages/ruby';
import sql from 'highlight.js/lib/languages/sql';
import solarizedLight from 'react-syntax-highlighter/dist/styles/solarized-light';

registerLanguage('js', js);
registerLanguage('scala', scala);
registerLanguage('ruby', ruby);
registerLanguage('sql', sql);

export default ({ content, language }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={solarizedLight}>
      {content}
    </SyntaxHighlighter>
  );
};
