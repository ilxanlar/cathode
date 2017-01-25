import React, { Component, PropTypes, Children } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class Panel extends Component {
  static propTypes = {
    className: PropTypes.string,
    gutter: PropTypes.oneOf([
      'none',
      'tiny',
      'small',
      'normal',
      'large'
    ]),
    loading: PropTypes.bool,
    children: PropTypes.any
  };

  static defaultProps = {
    gutter: 'normal',
    loading: false
  };

  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  render() {
    const { gutter, className, loading, children, ...otherProps } = this.props;
    const classNames = [
      'panel',
      `gutter-${gutter}`
    ];

    if (loading) {
      classNames.push('panel-loading');
    }

    if (className) {
      classNames.push(className);
    }

    return (
      <div className={classNames.join(' ')} {...otherProps}>
        { Children.map(children, child => child) }
      </div>
    );
  }
}
