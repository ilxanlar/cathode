import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { hopscotch as theme } from 'react-syntax-highlighter/styles/prism';

const Code = ({ children }) => {
  return (
    <div className="example-code">
      <SyntaxHighlighter language="jsx" style={theme}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  .example-code {
    background-color: #2b2b2b;
    max-height: 400px;
    width: 40%;
    
    pre {
      font-size: 13px !important;
      line-height: 18px !important;
      margin: 0 !important;
    }
  
    code {
      font-size: 13px !important;
      line-height: 18px !important;
    }
  }

  .example-view {
    padding-left: 30px;
    width: 60%;
  }
`;

export default ({ children, code }) => (
  <Wrapper>
    <Code>
      {code}
    </Code>

    <div className="example-view">
      {children}
    </div>
  </Wrapper>
);
