import React from 'react';
import styled from 'styled-components';
import { Icon, Message } from '../../../src';
import Doc from 'components/Doc';
import Example from 'components/Example';

const MessagesWrapper = styled.div`
  ${Message}:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const iconPropTypeText = `PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.node,
  PropTypes.bool
])`;

const moodCode = `<Message mood="info">
  <Message.Title>Info message</Message.Title>
  <Message.Desc>description...</Message.Desc>
</Message>

<Message mood="success">
  <Message.Title>Success message</Message.Title>
  <Message.Desc>description...</Message.Desc>
</Message>

<Message mood="error">
  <Message.Title>Error message</Message.Title>
  <Message.Desc>description...</Message.Desc>
</Message>

<Message mood="warning">
  <Message.Title>Warning message</Message.Title>
  <Message.Desc>description...</Message.Desc>
</Message>`;

const moodyBgCode = `<Message mood="info" moodyBg>
  <Message.Title>Info message</Message.Title>
  <Message.Desc>description...</Message.Desc>
</Message>

<Message mood="success" moodyBg>
  <Message.Title>Success message</Message.Title>
  <Message.Desc>description...</Message.Desc>
</Message>

<Message mood="error" moodyBg>
  <Message.Title>Error message</Message.Title>
  <Message.Desc>description...</Message.Desc>
</Message>

<Message mood="warning" moodyBg>
  <Message.Title>Warning message</Message.Title>
  <Message.Desc>description...</Message.Desc>
</Message>`;

const iconCode = `<Message icon={false}>
  <Message.Title>Crop required!</Message.Title>
  <Message.Desc>description...</Message.Desc>
</Message>

<Message icon="crop">
  <Message.Title>Crop required!</Message.Title>
  <Message.Desc>description...</Message.Desc>
</Message>

const customMarkup = <Icon name="crop" />;

<Message icon={customMarkup}>
  <Message.Title>Crop required!</Message.Title>
  <Message.Desc>description...</Message.Desc>
</Message>`;

const closableCode = `<Message closable>
  <Message.Title>Info message</Message.Title>
  <Message.Desc>description...</Message.Desc>
</Message>`;

const closableOnCloseCode = `const handleClose = () => {
  alert('Message closed!');
};

<Message onClose={handleClose} closable>
  <Message.Title>Info message</Message.Title>
  <Message.Desc>description...</Message.Desc>
</Message>`;

export default () => (
  <div>
    <h1>Message</h1>

    <h3>Mood</h3>

    <p>
      Available moods are:&nbsp;
      <code>info</code>,&nbsp;
      <code>success</code>,&nbsp;
      <code>error</code>,&nbsp;
      <code>warning</code>.
    </p>

    <Example code={moodCode}>
      <MessagesWrapper>
        <Message mood="info">
          <Message.Title>Info message</Message.Title>
          <Message.Desc>Info message description goes here.</Message.Desc>
        </Message>

        <Message mood="success">
          <Message.Title>Success message</Message.Title>
          <Message.Desc>Success message description goes here.</Message.Desc>
        </Message>

        <Message mood="error">
          <Message.Title>Error message</Message.Title>
          <Message.Desc>Error message description goes here.</Message.Desc>
        </Message>

        <Message mood="warning">
          <Message.Title>Warning message</Message.Title>
          <Message.Desc>Warning message description goes here.</Message.Desc>
        </Message>
      </MessagesWrapper>
    </Example>

    <h3>Moody Background</h3>

    <Example code={moodyBgCode}>
      <MessagesWrapper>
        <Message mood="info" moodyBg>
          <Message.Title>Info message</Message.Title>
          <Message.Desc>Info message description goes here.</Message.Desc>
        </Message>

        <Message mood="success" moodyBg>
          <Message.Title>Success message</Message.Title>
          <Message.Desc>Success message description goes here.</Message.Desc>
        </Message>

        <Message mood="error" moodyBg>
          <Message.Title>Error message</Message.Title>
          <Message.Desc>Error message description goes here.</Message.Desc>
        </Message>

        <Message mood="warning" moodyBg>
          <Message.Title>Warning message</Message.Title>
          <Message.Desc>Warning message description goes here.</Message.Desc>
        </Message>
      </MessagesWrapper>
    </Example>

    <h3>Icon</h3>

    <p>
      As you see in the above examples, Message has a predefined icon for each mood.
      By default, <code>icon</code> prop is set to <code>true</code> which means to use predefined icons.
    </p>

    <ul className="list">
      <li>If you want to remove the icon, pass boolean <code>false</code>.</li>
      <li>If you want to use an icon other than the predefined ones, pass your icon name as string.</li>
      <li>If you want to use custom markup, pass your markup as a node.</li>
    </ul>

    <Example code={iconCode}>
      <MessagesWrapper>
        <Message icon={false}>
          <Message.Title>Crop required!</Message.Title>
          <Message.Desc>You should crop this image before uploading.</Message.Desc>
        </Message>

        <Message icon="crop">
          <Message.Title>Crop required!</Message.Title>
          <Message.Desc>You should crop this image before uploading.</Message.Desc>
        </Message>

        <Message icon={<Icon name="crop" />}>
          <Message.Title>Crop required!</Message.Title>
          <Message.Desc>You should crop this image before uploading.</Message.Desc>
        </Message>
      </MessagesWrapper>
    </Example>

    <h3>Closable</h3>

    <Example code={closableCode}>
      <Message closable>
        <Message.Title>Info message</Message.Title>
        <Message.Desc>Info message description goes here.</Message.Desc>
      </Message>
    </Example>

    <Example code={closableOnCloseCode}>
      <Message
        onClose={() => {
          alert('Message closed!');
        }}
        closable
      >
        <Message.Title>Info message</Message.Title>
        <Message.Desc>Info message description goes here.</Message.Desc>
      </Message>
    </Example>

    <hr className="line" />

    <h2>Styled components</h2>

    <Doc id="doc-message" component="Message">
      <tr>
        <td>mood</td>
        <td>PropTypes.oneOf(['info', 'success', 'error', 'warning'])</td>
        <td>info</td>
      </tr>

      <tr>
        <td>moodyBg</td>
        <td>PropTypes.bool</td>
        <td>false</td>
      </tr>

      <tr>
        <td>icon</td>
        <td>
          <pre>{iconPropTypeText}</pre>
        </td>
        <td>true</td>
      </tr>

      <tr>
        <td>closable</td>
        <td>PropTypes.bool</td>
        <td>false</td>
      </tr>

      <tr>
        <td>autoCloseAfter</td>
        <td>PropTypes.number</td>
        <td />
      </tr>

      <tr>
        <td>onClose</td>
        <td>PropTypes.func</td>
        <td />
      </tr>
    </Doc>

    <Doc
      id="doc-message.title"
      component="Message.Title"
      description="Use this component to wrap message title."
    />

    <Doc
      id="doc-message.description"
      component="Message.Description (Message.Desc)"
      description="Use this component to wrap message description."
    />
  </div>
);
