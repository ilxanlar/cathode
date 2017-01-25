import React, { Component, PropTypes, Children } from 'react';

export default class Row extends Component {
  static propTypes = {
    className: PropTypes.string,
    mode: PropTypes.oneOf([
      'float',
      'inline'
    ]),
    vAlign: PropTypes.oneOf([
      'top',
      'middle',
      'bottom'
    ]),
    gutter: PropTypes.oneOf([
      'none',
      'tiny',
      'small',
      'normal',
      'large'
    ]),
    multiRow: PropTypes.bool,
    children: PropTypes.any
  };

  static defaultProps = {
    mode: 'float',
    gutter: 'normal',
    multiRow: false
  };

  render() {
    const { className, mode, vAlign, gutter, multiRow, children, ...otherProps } = this.props;
    const classNames = [
      'row',
      `gutter-${gutter}`
    ];

    if (mode === 'inline') {
      classNames.push('mode-inline');
      if (vAlign) {
        classNames.push(`columns-v-align-${vAlign}`);
      }
    } else if (mode === 'float') {
      classNames.push('mode-float');
    }

    if (multiRow) {
      classNames.push('multi-row');
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
