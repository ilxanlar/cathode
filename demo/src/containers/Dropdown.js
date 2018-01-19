import React from 'react';
import { ButtonGroup, Dropdown } from '../../../src';
import Code from 'components/Code';

const basicExample = `<Dropdown label="Options A">
  <Dropdown.Item>Option</Dropdown.Item>
  <Dropdown.Item active>Active option</Dropdown.Item>
  <Dropdown.Item disabled>Disabled option</Dropdown.Item>
  <Dropdown.Item active disabled>Disabled Active option</Dropdown.Item>
</Dropdown>`;

export default () => (
  <article>
    <h1>Dropdown</h1>

    <Code>
      {basicExample}
    </Code>

    <Dropdown label="Options A">
      <Dropdown.Item>Option</Dropdown.Item>
      <Dropdown.Item active>Active option</Dropdown.Item>
      <Dropdown.Item disabled>Disabled option</Dropdown.Item>
      <Dropdown.Item active disabled>Disabled Active option</Dropdown.Item>
    </Dropdown>

    <ButtonGroup>
      <Dropdown label="Options A">
        <Dropdown.Item>Option</Dropdown.Item>
        <Dropdown.Item active>Active option</Dropdown.Item>
        <Dropdown.Item disabled>Disabled option</Dropdown.Item>
        <Dropdown.Item active disabled>Disabled Active option</Dropdown.Item>
      </Dropdown>

      <Dropdown label="Options B">
        <Dropdown.Item>Option</Dropdown.Item>
        <Dropdown.Item>Option</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>Option</Dropdown.Item>
      </Dropdown>
    </ButtonGroup>
  </article>
);
