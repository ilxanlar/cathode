import React, { Component, PropTypes } from 'react';

export default class Button extends Component {
  static propTypes = {
    href: PropTypes.string,
    component: PropTypes.func,
    componentProps: PropTypes.object,
    className: PropTypes.string,
    type: PropTypes.oneOf([
      'button',
      'submit',
      'anchor'
    ]),
    size: PropTypes.oneOf([
      'tiny',
      'small',
      'normal'
    ]),
    color: PropTypes.oneOf([
      'primary',
      'success',
      'warning',
      'danger',
      'info',
      'black',
      'gray',
      'default',
      'white',
      'transparent'
    ]),
    wide: PropTypes.bool,
    block: PropTypes.bool,
    vAlign: PropTypes.oneOf([
      'top',
      'middle',
      'button'
    ]),
    buttonRef: PropTypes.func,
    children: PropTypes.node
  };

  static defaultProps = {
    type: 'button',
    size: 'normal',
    color: 'default',
    wide: false,
    block: false,
    vAlign: 'middle'
  };

  render() {
    const {
      type, size, color, wide, block, href, className, vAlign, buttonRef,
      component: Link, componentProps, children, ...otherProps
    } = this.props;

    let classNames = [
      'button',
      `button-${color}`,
      `button-${type}`,
      `button-${size}`
    ];

    if (className) {
      classNames.push(className);
    }

    if (block) {
      classNames.push('button-block');
    } else if (wide) {
      classNames.push('button-wide');
    }

    if (vAlign) {
      classNames.push(`v-align-${vAlign}`);
    }

    classNames = classNames.join(' ');

    if (buttonRef) {
      otherProps.ref = buttonRef;
    }

    if (type === 'anchor') {
      return Link ?
        <Link className={classNames} {...componentProps} {...otherProps}>
          { children }
        </Link> :
        <a className={classNames} href={href} {...otherProps}>
          { children }
        </a>;
    }

    return (
      <button className={classNames} type={type} {...otherProps}>
        { children }
      </button>
    );
  }
}
