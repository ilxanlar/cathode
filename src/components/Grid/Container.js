import React, { Component, PropTypes, Children } from 'react';

export default class Container extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any
  };

  render() {
    const { className, children, ...otherProps } = this.props;
    let classNames = 'container';

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
