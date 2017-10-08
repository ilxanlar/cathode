import React from 'react';
import PropTypes from 'prop-types';
import { sizes } from '../../utils/proptypes';

export default class Button extends React.Component {
  static propTypes = {
    href: PropTypes.string,
    component: PropTypes.func,
    componentProps: PropTypes.object,
    containerClassName: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'anchor']),
    size: PropTypes.oneOf(sizes),
    style: PropTypes.string,
    ghost: PropTypes.bool,
    wide: PropTypes.bool,
    block: PropTypes.bool,
    buttonRef: PropTypes.func,
    children: PropTypes.node
  };

  static defaultProps = {
    type: 'button',
    size: 'md',
    style: 'primary',
    ghost: false,
    wide: false,
    block: false
  };

  render() {
    const {
      type, size, style, ghost, wide, block, href, className, containerClassName, icon, buttonRef,
      component: Link, componentProps, children, ...otherProps
    } = this.props;

    let classNames = [
      'button',
      `button-${style}`,
      `button-${type}`,
      `button-${size}`,
      className
    ];

    if (containerClassName) {
      classNames.push(containerClassName);
    }

    if (ghost) {
      classNames.push(`button-ghost`);
    }

    if (block) {
      classNames.push('button-block');
    } else if (wide) {
      classNames.push('button-wide');
    }

    classNames = classNames.join(' ');

    if (buttonRef) {
      otherProps.ref = buttonRef;
    }

    if (type === 'anchor') {
      return Link ?
        <Link {...componentProps} {...otherProps} className={classNames}>
          {children}
        </Link> :
        <a href={href} {...otherProps} className={classNames}>
          {children}
        </a>;
    }

    return (
      <button type={type} {...otherProps} className={classNames}>
        {children}
      </button>
    );
  }
}
