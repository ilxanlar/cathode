import React from 'react';
import ReactDOM from 'react-dom';
import { Config } from '../../src';
import Buttons from './containers/Buttons';
import FormCreateArticle from './containers/FormCreateArticle';
import Message from './containers/Message';
import Alert from './containers/Alert';
import Modal from './containers/Modal';
import Tooltip from './containers/Tooltip';
import Popover from './containers/Popover';
import Card from './containers/Panel';
import '../../src/style/style.scss';

Config.fieldWarningType = 'icon';
Config.fieldErrorType = 'icon';

class Example extends React.Component {
  state = {
    ui: {
      size: 'md'
    }
  };

  handleChangeUI(name, value) {
    if (this.state.ui[name] !== value) {
      const ui = {
        ...this.state.ui,
        [name]: value
      };

      this.setState({ ui });
    }
  }

  render() {
    const { ui } = this.state;

    return (
      <div>
        <header id="nav">
          <ul>
            <li><a href="#alert">Alert</a></li>
            <li><a href="#message">Message</a></li>
            <li>
              <a href="#form">Form</a>
              <ul>
                <li><a href="#text-input">Text Input</a></li>
                <li><a href="#dropdown-input">Dropdown Input</a></li>
              </ul>
            </li>
            <li><a href="#card">Card</a></li>
          </ul>
        </header>

        <div id="components">
          <div id="alert">
            <Alert />
          </div>

          <div id="message">
            <Message />
          </div>

          <div id="form">
            <FormCreateArticle ui={ui} />
          </div>

          <div id="card">
            <Card />
          </div>

          <Modal />

          <Popover />

          <Tooltip />

          <Buttons />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('example')
);
