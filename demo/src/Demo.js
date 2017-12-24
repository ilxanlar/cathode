import React from 'react';
import { Container, GlobalStyle, Theme } from '../../src';
import Message from './containers/Message';
import Button from './containers/Button';
import Card from './containers/Card';
import Dropdown from './containers/Dropdown';
import Form from './containers/Form';
import Grid from './containers/Grid';
import Modal from './containers/Modal';
import Popover from './containers/Popover';
import Tabs from './containers/Tabs';
import Tooltip from './containers/Tooltip';

export default () => (
  <Theme>
    <GlobalStyle />

    <Container paddingXxs="md">
      <div id="components">
        <div id="message">
          <Message />
        </div>

        <div id="button">
          <Button />
        </div>

        <div id="card">
          <Card />
        </div>

        <div id="dropdown">
          <Dropdown />
        </div>

        <div id="form">
          <Form />
        </div>

        <div id="grid">
          <Grid />
        </div>

        <div id="modal">
          <Modal />
        </div>

        <div id="popover">
          <Popover />
        </div>

        <div id="tooltip">
          <Tooltip />
        </div>

        <div id="tabs">
          <Tabs />
        </div>
      </div>
    </Container>
  </Theme>
);
