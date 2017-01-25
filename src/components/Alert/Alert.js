import React, { Component, PropTypes, Children } from 'react';

export default class Alert extends Component {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf([
      'primary',
      'success',
      'warning',
      'danger',
      'info',
      'black',
      'gray',
      'white',
      'default'
    ]),
    icon: PropTypes.node,
    children: PropTypes.any
  };

  static defaultProps = {
    color: 'default'
  };

  render() {
    const { className, color, icon, children, ...otherProps } = this.props;
    let classNames = `alert alert-${color}`;

    if (icon) {
      classNames = `${classNames} alert-has-icon`;
    }

    if (className) {
      classNames = `${classNames} ${className}`;
    }

    return (
      <div className={classNames} {...otherProps}>
        {
          icon ?
            <div className="alert-icon">
              { icon }
            </div> : null
        }

        <div className="alert-content">
          { Children.map(children, child => child) }
        </div>
      </div>
    );
  }
}
