import React from 'react';
import { Alert } from '../../../src';

const styles = ['default', 'info', 'success', 'error', 'warning'];

export default () => (
  <div>
    <h2>Alert</h2>

    {
      styles.map((style, key) => (
        <div>
          <Alert style={style}>
            <Alert.Title>
              Alert title goes here
            </Alert.Title>

            <Alert.Desc>
              Here goes some description about the alert. You can render JSX in title or description. Here goes some
              description about the alert. You can render JSX in title or description.
            </Alert.Desc>
          </Alert>
        </div>
      ))
    }

    <table className="component-doc">
      <thead>
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Default</th>
      </tr>

      </thead>
      <tbody>
      <tr>
        <td><code>style</code></td>
        <td>
          One of <code>default</code>, <code>info</code>, <code>error</code>. <code>warning</code> or
          <code>success</code>
        </td>
        <td><code>string</code></td>
        <td><code>default</code></td>
      </tr>

      <tr>
        <td><code>containerClassName</code></td>
        <td>Class name added to alert container</td>
        <td><code>string</code></td>
        <td></td>
      </tr>

      <tr>
        <td><code>icon</code></td>
        <td>
          If you pass string icon name, the <code>Icon</code> component will be used.
          <br />
          If you pass boolean <code>true</code>, the predefined icons will be used.
          <br />
          If you pass boolean <code>false</code>, no icon will be displayed.
          <br />
          You can also pass a node.
        </td>
        <td>
          <code>string</code>
          <br />
          <code>node</code>
          <br />
          <code>bool</code>
        </td>
        <td></td>
      </tr>

      <tr>
        <td><code>closable</code></td>
        <td>Add a close icon to alert</td>
        <td><code>bool</code></td>
        <td><code>false</code></td>
      </tr>

      <tr>
        <td><code>autoCloseAfter</code></td>
        <td>Automatically close alert (milliseconds)</td>
        <td><code>number</code></td>
        <td></td>
      </tr>

      <tr>
        <td><code>onClose</code></td>
        <td>A callback called just before closing the alert</td>
        <td>func</td>
        <td></td>
      </tr>
      </tbody>
    </table>
  </div>
);
