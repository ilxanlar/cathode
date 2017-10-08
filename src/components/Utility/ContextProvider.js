import React from 'react';
import PropTypes from 'prop-types';

export default class ContextProvider extends React.PureComponent {
  static propTypes = {
    context: PropTypes.object,
    children: PropTypes.node.isRequired
  };

  static childContextTypes = {};

  getChildContext() {
    return this.props.context;
  }

  render() {
    return React.Children.only(this.props.children);
  }
}
