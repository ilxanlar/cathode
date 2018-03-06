import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism as theme } from 'react-syntax-highlighter/styles/prism';

const Actions = styled.div`
  background-color: #eee;
  font-size: 12px;
  line-height: 14px;
  padding: 10px 20px;

  a {
    
  }
`;

const Columns = styled.div``;

const Wrapper = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 2px;
  margin-bottom: 1.5em;
  margin-top: 1.5em;
  position: relative;

  ${Columns} {
    display: flex;
    flex-direction: row;

    .example-code {
      ${props => props.codeHeight ? `max-height: ${props.codeHeight}px;` : undefined}
      padding: 15px 20px;
      overflow: auto;
      width: 50%;

      pre {
        background-color: transparent !important;
        font-size: 16px !important;
        line-height: 24px !important;
        margin: 0 !important;
        overflow: visible !important;
        padding: 0 20px 0 0 !important;
        white-space: nowrap !important;
      }
  
      code {
        font-size: 16px !important;
        line-height: 24px !important;
      }
    }
  
    .example-view {
      background-color: #fff;
      border-left: 1px solid #eee;
      padding: 20px;
      width: 50%;
    }
  }
`;

export default class Example extends React.Component {
  state = {
    mounted: true
  };

  handleReRender(e) {
    e.preventDefault();

    this.setState({ mounted: false }, () => {
      this.setState({ mounted: true });
    });
  }

  render() {
    const { children, code, codeHeight } = this.props;
    const { mounted } = this.state;

    return (
      <Wrapper codeHeight={codeHeight}>
        {/*<Actions>
          <a onClick={this.handleReRender.bind(this)}>
            Re-render
          </a>
        </Actions>*/}

        <Columns>
          <div className="example-code">
            <SyntaxHighlighter language="jsx" style={theme}>
              {code}
            </SyntaxHighlighter>
          </div>

          <div className="example-view">
            {mounted ? children : null}
          </div>
        </Columns>
      </Wrapper>
    );
  }
}
