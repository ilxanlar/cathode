import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../../src';
import Doc from 'components/Doc';
import Example from 'components/Example';

const LinkButton = Button.withComponent(Link);
const AnchorButton = Button.withComponent('a');

const ButtonsWrapper = styled.div`
  ${Button}, ${LinkButton}, ${AnchorButton} {
    margin: 0 5px 5px 0;
  }
`;

const moodCode = `<Button mood="primary">Primary</Button>
<Button mood="secondary">Secondary</Button>
<Button mood="tertiary">Tertiary</Button>
<Button mood="info">Info</Button>
<Button mood="success">Success</Button>
<Button mood="error">Error</Button>
<Button mood="warning">Warning</Button>`;

const sizeCode = `<Button size="xxs">XXS</Button>
<Button size="xs">XS</Button>
<Button size="sm">SM</Button>
<Button size="md">MD</Button>
<Button size="lg">LG</Button>
<Button size="xl">XL</Button>
<Button size="xxl">XXL</Button>`;

const glassGhostCode = `<Button>Normal</Button>
<Button ghost>Ghost</Button>
<Button glass>Glass</Button>`;

const widthCode = `<Button>Normal</Button>
<Button wide>Wide</Button>
<Button block>Block</Button>`;

const interactivityCode = `<Button>Normal</Button>
<Button disableHoverStyles>No hover</Button>
<Button disablePressStyles>No press</Button>
<Button disableHoverStyles disablePressStyles>No hover and press</Button>
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>
<Button loading disabled>Loading and Disabled...</Button>`;

const customComponentAnchorCode = `const AnchorButton = Button.withComponent('a');\n
<AnchorButton mood="warning" href="..." target="_blank">
  Give me a Star
</AnchorButton>`;

const customComponentLinkCode = `const LinkButton = Button.withComponent(Link);\n
<LinkButton mood="tertiary" to="/intro">
  Read Cathode introduction
</LinkButton>`;

export default () => (
  <div>
    <h1>Button</h1>

    <h3>Mood</h3>

    <p>
      Available moods are:&nbsp;
      <code>primary</code>,&nbsp;
      <code>secondary</code>,&nbsp;
      <code>tertiary</code>,&nbsp;
      <code>info</code>,&nbsp;
      <code>success</code>,&nbsp;
      <code>error</code>,&nbsp;
      <code>warning</code>.
    </p>

    <Example code={moodCode}>
      <ButtonsWrapper>
        <Button mood="primary">Primary</Button>
        <Button mood="secondary">Secondary</Button>
        <Button mood="tertiary">Tertiary</Button>
        <Button mood="info">Info</Button>
        <Button mood="success">Success</Button>
        <Button mood="error">Error</Button>
        <Button mood="warning">Warning</Button>
      </ButtonsWrapper>
    </Example>

    <h3>Size</h3>

    <p>
      Available sizes are:&nbsp;
      <code>xxs</code>,&nbsp;
      <code>xs</code>,&nbsp;
      <code>sm</code>,&nbsp;
      <code>md</code>,&nbsp;
      <code>lg</code>,&nbsp;
      <code>xl</code>,&nbsp;
      <code>xxl</code>.
    </p>

    <Example code={sizeCode}>
      <ButtonsWrapper>
        <Button size="xxs">XXS</Button>
        <Button size="xs">XS</Button>
        <Button size="sm">SM</Button>
        <Button size="md">MD</Button>
        <Button size="lg">LG</Button>
        <Button size="xl">XL</Button>
        <Button size="xxl">XXL</Button>
      </ButtonsWrapper>
    </Example>

    <h3>Glass and Ghost</h3>

    <Example code={glassGhostCode}>
      <ButtonsWrapper>
        <Button>Normal</Button>
        <Button ghost>Ghost</Button>
        <Button glass>Glass</Button>
      </ButtonsWrapper>
    </Example>

    <h3>Width</h3>

    <Example code={widthCode}>
      <ButtonsWrapper>
        <Button>Normal</Button>
        <Button wide>Wide</Button>
        <Button block>Block</Button>
      </ButtonsWrapper>
    </Example>

    <h3>Interactivity</h3>

    <Example code={interactivityCode}>
      <ButtonsWrapper>
        <Button>Normal</Button>
        <br />
        <Button disableHoverStyles>No hover</Button>
        <Button disablePressStyles>No press</Button>
        <Button disableHoverStyles disablePressStyles>No hover and press</Button>
        <br />
        <Button loading>Loading...</Button>
        <Button disabled>Disabled</Button>
        <Button loading disabled>Loading and Disabled...</Button>
      </ButtonsWrapper>
    </Example>

    <h3>Custom Components</h3>

    <p>
      All the examples above use <code>button</code> HTML element for the component.
      If you want to use an element other than <code>button</code>,
      you can create your desired component with <code>Button.withComponent(COMPONENT)</code>.
      If you're not familiar with <code>withComponent</code>, you can refer to&nbsp;
      <a className="link" href="https://styled-components.com" target="_blank">Styled Components Documentation</a>.
    </p>

    <p>For example, if you want to use <code>a</code> element, do this:</p>

    <Example code={customComponentAnchorCode}>
      <AnchorButton mood="warning" href="https://github.com/ilxanlar/cathode" target="_blank">
        Give me a Star
      </AnchorButton>
    </Example>

    <p>
      Or if you, for example, use React Router and want to style your <code>Link</code> components like Cathode buttons,
      you can do this:
    </p>

    <Example code={customComponentLinkCode}>
      <LinkButton mood="tertiary" to="/intro">
        Read Cathode introduction
      </LinkButton>
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
