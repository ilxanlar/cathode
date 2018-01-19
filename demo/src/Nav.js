import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
  background-color: #fff;
  border-right: 1px solid #eee;
  bottom: 0;
  left: 0;
  padding: 50px 0;
  position: fixed;
  top: 0;
  width: 180px;
  z-index: 99;

  small {
    color: #999;
    display: block;
    padding: 5px 20px;
  }

  ul {
    list-style: none;
    margin: 0 0 20px;
    padding: 0;

    li {
      a {
        display: block;
        padding: 5px 20px;
      }
    }
  }
`;

export default () => (
  <Nav>
    <small>Feedback</small>

    <ul>
      <li><Link to="/message">Message</Link></li>
    </ul>

    <small>Layout</small>

    <ul>
      <li><Link to="/container">Container</Link></li>
      <li><Link to="/grid">Grid</Link></li>
    </ul>

    <small>Button</small>

    <ul>
      <li><Link to="/button">Button</Link></li>
      <li><Link to="/button-group">Button Group</Link></li>
    </ul>

    <small>Dropdown</small>

    <ul>
      <li><Link to="/dropdown">Dropdown</Link></li>
    </ul>

    <small>Overlay</small>

    <ul>
      <li><Link to="/modal">Modal</Link></li>
      <li><Link to="/popover">Popover</Link></li>
      <li><Link to="/tooltip">Tooltip</Link></li>
    </ul>

  </Nav>
);
