import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '../../../src';
import Doc from 'components/Doc';
import Example from 'components/Example';

const Button2 = Button.extend``;

const moodCode = `<Button mood="primary">Primary</Button>
<Button mood="secondary">Secondary</Button>
<Button mood="tertiary">Tertiary</Button>
<Button mood="info">Info</Button>
<Button mood="success">Success</Button>
<Button mood="error">Error</Button>
<Button mood="warning">Warning</Button>`;

export default () => (
  <div>
    <h1>Button Group</h1>

    <h3>Mood</h3>

    <Example code={moodCode}>
      <ButtonGroup>
        <Button2 mood="primary">Primary</Button2>
        <Button2 mood="secondary">Secondary</Button2>
        <Button2 mood="tertiary">Tertiary</Button2>
      </ButtonGroup>

      <br />

      <ButtonGroup>
        <Button2 mood="primary">Primary</Button2>
        <Button2 mood="primary">+</Button2>
      </ButtonGroup>
    </Example>

    <Doc id="doc-button" component="Button">
      <tr>
        <td>
          <pre>size</pre>
        </td>
        <td>oneOf: <pre>xxs, xs, sm, md, lg, xl, xxl</pre></td>
        <td>
          <pre>md</pre>
        </td>
        <td />
      </tr>

      <tr>
        <td>
          <pre>mood</pre>
        </td>
        <td>oneOf: <pre>primary, secondary, tertiary, success, info, error, warning</pre></td>
        <td>
          <pre>primary</pre>
        </td>
        <td />
      </tr>

      <tr>
        <td>
          <pre>glass</pre>
        </td>
        <td>
          <pre>boolean</pre>
        </td>
        <td>
          <pre>false</pre>
        </td>
        <td />
      </tr>

      <tr>
        <td>
          <pre>ghost</pre>
        </td>
        <td>
          <pre>boolean</pre>
        </td>
        <td>
          <pre>false</pre>
        </td>
        <td />
      </tr>

      <tr>
        <td>
          <pre>wide</pre>
        </td>
        <td>
          <pre>boolean</pre>
        </td>
        <td>
          <pre>false</pre>
        </td>
        <td />
      </tr>

      <tr>
        <td>
          <pre>block</pre>
        </td>
        <td>
          <pre>boolean</pre>
        </td>
        <td>
          <pre>false</pre>
        </td>
        <td />
      </tr>

      <tr>
        <td>
          <pre>disableHoverStyles</pre>
        </td>
        <td>
          <pre>boolean</pre>
        </td>
        <td>
          <pre>false</pre>
        </td>
        <td />
      </tr>

      <tr>
        <td>
          <pre>disablePressStyles</pre>
        </td>
        <td>
          <pre>boolean</pre>
        </td>
        <td>
          <pre>false</pre>
        </td>
        <td />
      </tr>

      <tr>
        <td>
          <pre>loading</pre>
        </td>
        <td>
          <pre>boolean</pre>
        </td>
        <td>
          <pre>false</pre>
        </td>
        <td />
      </tr>
    </Doc>
  </div>
);
