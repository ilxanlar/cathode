import React from 'react';
import ReactDOM from 'react-dom';
import Alert from '../components/Alert/Alert';

function getWrapper() {
  let wrapper = document.getElementById('messages-container');

  if (!wrapper) {
    wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'messages-container');
    document.body.appendChild(wrapper);
  }

  return wrapper;
}

function render({ title, content, style, duration }) {
  const wrapper = getWrapper();
  const container = document.createElement('div');

  // container.setAttribute('class', 'message-container');

  if (wrapper.firstChild) {
    wrapper.insertBefore(container, wrapper.firstChild);
  } else {
    wrapper.appendChild(container);
  }

  ReactDOM.render(
    <Alert style={style}>
      <Alert.Title>
        {title}
      </Alert.Title>

      {
        content ?
          <Alert.Desc>
            {content}
          </Alert.Desc> : null
      }
    </Alert>,
    container
  );

  window.setTimeout(() => {
    wrapper.removeChild(container);
  }, duration || 10000);
}

export default {
  open: ({ ...params }) => {
    render({ ...params });
  },
  warning: (title, content = '') => {
    render({ title, content, style: 'warning' });
  },
  error: (title, content = '') => {
    render({ title, content, style: 'error' });
  },
  success: (title, content = '') => {
    render({ title, content, style: 'success' });
  },
  info: (title, content = '') => {
    render({ title, content, style: 'info' });
  }
};
