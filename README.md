# How to Use

To start, do something like this:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle, Theme } from 'cathode';
import App from './App'; // Your web app

ReactDom.render(
  <Theme>
    <GlobalStyle />
    <App />
  </Theme>,
  document.getElementById('root')
);
```

## Mood

Available moods are `primary`, `secondary`, `tertiary`, `info`, `success`, `warning`, `error`. Some components only implement some of these moods. For instance:

| Component | Moods |
| --- | --- |
| Button | `primary`, `secondary`, `tertiary`, `info`, `success`, `warning`, `error` |
| Message | `info`, `success`, `warning`, `error` |

## Size

Cathode uses `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl` or `none` for sizing values. 

| Property Group | Possible Values |
| --- | --- |
| Gutter | `none`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl` |
| Margin | `none`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl` |
| Padding | `none`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl` |
| Font | `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl` |
| Screen | `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl` |

In some components you can address a specific screen size when passing props. Let's make `gutter` property responsive:

| Prop-Value | Screen Size | Gutter Value
| --- | --- | --- |
| `gutterXxs="none"` | `xxs` to `xxl` | `none`
| `gutterLg="xs"` | `lg` to `xxl` | `xs`
| `gutterXxl="xl"` | `xxl` | `xl`

And in action:
```javascript
<Grid.Row gutterXxs="none" gutterLg="xs" gutterXxl="xl">
  ...
</Grid.Row>
```

## Media Query

Available media query shortcuts:

| Screen | Description |
| --- | --- |
| xxs | xxs to xxl |
| xs | xs to xxl |
| sm | sm to xxl |
| md | md to xxl |
| lg | lg to xxl |
| xl | xl to xxl |
| xxl | xxl |
| xsOnly | xs |
| smOnly | sm |
| mdOnly | md |
| lgOnly | lg |
| xlOnly | xl |
| xxlOnly | xxl |

## Customization

All the exported components are `styled-components`! So to override the styles, you treat them as any normal styled component. For example, you can extend them:
```javascript
import React from 'react';
import { Button as BaseButton } from 'cathode';

export default BaseButton.extend`
  font-size: 16px;
  font-weight: bold;
`;
```

# Components

## Feedback Components

Feedback components are used to display messages, alerts or any content.

## Message Component

### `Message`

| Prop Name | Prop Type | Default |
| --- | --- | --- |
| `mood` | `oneOf: 'info', 'success', 'error', 'warning'` | `'info'` |
| `moodyBg` | `bool` | `false` |
| `sideBorders` | `bool` | `true` |
| `sideBordersWidth` | `number`  | `5` |
| `icon` | `oneOfType: string, node, bool` | `true` |
| `closable` | `bool` | `false` |
| `autoCloseAfter` | `number` | - |
| `onClose` | `func` | - |

### `Message.Title`

Use this component to wrap the message title.

### `Message.Description` or shortly `Message.Desc`

Use this component to wrap the message body.

### Example Usage
```javascript
import React from 'react';
import { Icon, Message } from 'cathode';

const icon = (<Icon name="attention-filled" />);

export default () => (
  <Message icon={icon} mood="warning" moodyBg>
    <Message.Title>
      You need to login!
    </Message.Title>

    <Message.Description>
      In order to make use of these features you need to be logged-in.
    </Message.Description>
  </Message>
);
```
