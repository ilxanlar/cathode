import React from 'react';
import styled from 'styled-components';
import { Icon, Tooltip } from '../../../src';

const Table = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  border-radius: 2px;
  border-spacing: 0;

  th, td {
    border: 1px solid #ddd;
    padding: 5px 10px;

    a {
      color: ${props => props.theme.colors.primary};
      
      &:hover {
        text-decoration: underline;
      }
    }

    pre {
      font-family: monospace;
      margin: 0;
    }
  }
`;

const Wrapper = styled.div`
  margin-bottom: 50px;

  h3 {
    font-family: monospace;
    font-weight: normal;
    margin: 0 0 10px;

    small {
      background-color: ${props => props.theme.colors.error};
      border-radius: 5px;
      color: #fff;
      display: inline-block;
      font-size: 12px;
      line-height: 14px;
      margin-left: 5px;
      padding: 3px 5px;
      vertical-align: middle;
    }
  }

  p {
    margin: 0 0 10px;
  }
`;

const Doc = ({ id, component, description, children }) => (
  <Wrapper>
    <h3 id={id}>
      <Icon name="file-code" /> {component}
    </h3>

    {description ? <p>{description}</p> : null}

    {
      children ?
        <Table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
          </thead>

          <tbody>
          {children}
          </tbody>
        </Table> : null
    }
  </Wrapper>
);

Doc.defaultProps = {
  styled: true
};

export default Doc;
