import React, { Component, PropTypes } from 'react';

export default class Spinner extends Component {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'info', 'black', 'gray', 'white']),
    size: PropTypes.oneOf(['xss', 'xs', 'sm', 'md', 'lg']),
    animation: PropTypes.oneOf(['scaleout']),
    speed: PropTypes.oneOf(['slow', 'normal', 'fast']),
    children: PropTypes.any
  };

  static defaultProps = {
    className: '',
    color: 'gray',
    size: 'md',
    animation: 'scaleout',
    speed: 'normal'
  };

  render() {
    const { className, color, size, animation, speed, ...otherProps } = this.props;
    const classNames = `spinner spinner-color-${color} spinner-size-${size} spinner-animation-${animation} spinner-speed-${speed} ${className}`;

    return (
      <div className={classNames} {...otherProps}/>
    );
  }
}
