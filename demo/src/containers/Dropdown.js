import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from '../../../src';
import Doc from 'components/Doc';
import Example from 'components/Example';

const basicExample = `<Dropdown label="Choose an action">
  <Dropdown.Item>
    An action
  </Dropdown.Item>

  <Dropdown.Item active>
    Active action
  </Dropdown.Item>

  <Dropdown.Separator />

  <Dropdown.Item disabled>
    Disabled action
  </Dropdown.Item>

  <Dropdown.Item active disabled>
    Disabled active action
  </Dropdown.Item>
</Dropdown>`;

export default () => (
  <article>
    <h1>Dropdown</h1>

    <Example code={basicExample} codeHeight={200} description="This is a basic example for using dropdown menus.">
      <Dropdown label="Choose an action">
        <Dropdown.Item>An action</Dropdown.Item>
        <Dropdown.Item active>Active action</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item disabled>Disabled action</Dropdown.Item>
        <Dropdown.Item active disabled>Disabled active action</Dropdown.Item>
      </Dropdown>
    </Example>

    <Doc id="doc-dropdown" component="Dropdown">
      <tr>
        <td>buttonProps</td>
        <td>shape <Link to="/button#doc-button">Button.propTypes</Link></td>
        <td />
        <td />
      </tr>

      <tr>
        <td>label</td>
        <td>node (required)</td>
        <td />
        <td />
      </tr>

      <tr>
        <td>noCaret</td>
        <td>boolean</td>
        <td>false</td>
        <td />
      </tr>

      <tr>
        <td>overlayProps</td>
        <td>shape Overlay.propTypes</td>
        <td />
        <td />
      </tr>
    </Doc>

    <Doc id="doc-dropdown.item" component="Dropdown.Item">
      <tr>
        <td>active</td>
        <td>boolean</td>
        <td>false</td>
        <td />
      </tr>

      <tr>
        <td>disabled</td>
        <td>boolean</td>
        <td>false</td>
        <td />
      </tr>
    </Doc>

    <Doc
      id="doc-dropdown.separator"
      component="Dropdown.Separator"
      description="No props available."
    />
  </article>
);
