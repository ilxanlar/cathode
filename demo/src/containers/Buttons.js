import React from 'react';
import { Button, ButtonGroup, Dropdown } from '../../../src';

const sizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

const Set = ({ size }) => (
  <div>
    <ButtonGroup>
      <Button style="tertiary" size={size}>Write an Article</Button>
      <Button style="tertiary" size={size}>Edit an Article</Button>
      <Dropdown title="Other..." style="tertiary" size={size}>
        <Dropdown.Item href="https://google.com" target="__blank">Introduction</Dropdown.Item>
        <Dropdown.Item href="https://google.com" target="__blank">Components</Dropdown.Item>
        <Dropdown.Item href="https://google.com" target="__blank">Helpers</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item href="https://google.com" target="__blank">Appendix</Dropdown.Item>
      </Dropdown>
    </ButtonGroup>

    <br />
  </div>
);

export default () => (
  <div>
    {sizes.map((size, key) => (<Set key={key} size={size} />))}
  </div>
);
