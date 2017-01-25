import React, { Component, PropTypes, Children } from 'react';

export default class Div extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any
  };

  baseClassName = '';

  render() {
    const { className, children, ...otherProps } = this.props;
    let classNames = this.baseClassName;

    if (className) {
      classNames = `${classNames} ${className}`;
    }

    return (
      <div className={classNames} {...otherProps}>
        { Children.map(children, child => child) }
      </div>
    );
  }
}
