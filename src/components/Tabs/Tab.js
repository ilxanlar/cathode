import React, { Component, PropTypes, Children } from 'react';

export default class Tab extends Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    label: PropTypes.node,
    children: PropTypes.any
  };

  static defaultProps = {
    className: '',
    name: null,
    label: null
  };

  render() {
    const { className, children } = this.props;
    const classNames = `tab-tab ${className}`;

    return (
      <div className={classNames}>
        { Children.map(children, child => child) }
      </div>
    );
  }
}
