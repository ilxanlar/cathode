import React from 'react';
import { Grid, Message } from '../../../src';
import Example from 'components/Example';

const codeBasic = `<Message>
  <Message.Title>...</Message.Title>
  <Message.Desc>...</Message.Desc>
</Message>`;

const codeAddProps = `<Message mood="error" moodyBg sideBorders closable>
  <Message.Title>...</Message.Title>
  <Message.Desc>...</Message.Desc>
</Message>`;

export default () => (
  <div>
    <h1>Message</h1>

    <Example code={codeBasic}>
      <Message>
        <Message.Title>
          Message title goes here
        </Message.Title>

        <Message.Desc>
          Here goes some description. Here goes some description. Here goes some description.
        </Message.Desc>
      </Message>
    </Example>

    <Example code={codeAddProps}>
      <Message mood="error" moodyBg sideBorders closable>
        <Message.Title>
          Message title goes here
        </Message.Title>

        <Message.Desc>
          Here goes some description. Here goes some description. Here goes some description.
        </Message.Desc>
      </Message>
    </Example>

    <Example code={' '}>
      <Grid.Row multi>
        <Grid.Column md={12}>
          <Message mood="info">
            <Message.Title>
              Info
            </Message.Title>
          </Message>
        </Grid.Column>

        <Grid.Column md={12}>
          <Message mood="success">
            <Message.Title>
              Success
            </Message.Title>
          </Message>
        </Grid.Column>

        <Grid.Column md={12}>
          <Message mood="warning">
            <Message.Title>
              Warning
            </Message.Title>
          </Message>
        </Grid.Column>

        <Grid.Column md={12}>
          <Message mood="error">
            <Message.Title>
              Error
            </Message.Title>
          </Message>
        </Grid.Column>
      </Grid.Row>
    </Example>
  </div>
);
