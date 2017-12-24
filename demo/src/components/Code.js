import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { hopscotch as theme } from 'react-syntax-highlighter/styles/prism';

const CodeUnStyled = ({ children, className, ...props }) => {
  return (
    <div className="example-code">
      <SyntaxHighlighter language="jsx" style={theme}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default styled(CodeUnStyled)`
  pre {
    font-size: 13px !important;
    line-height: 18px !important;
    margin: 0 !important;
  }

  code {
    font-size: 13px !important;
    line-height: 18px !important;
  }
`;
