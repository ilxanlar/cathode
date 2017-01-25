import React, { Component, PropTypes, Children } from 'react';

const maxColumns = 24;

export default class Column extends Component {
  static propTypes = {
    className: PropTypes.string,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    pullLeft: PropTypes.bool,
    pullRight: PropTypes.bool,
    children: PropTypes.any
  };

  static defaultProps = {
    pullLeft: false,
    pullRight: false
  };

  sizeClassName(screenSize, columnSize) {
    if (typeof columnSize === 'undefined' || columnSize === null || columnSize < 0 || columnSize > maxColumns) {
      return '';
    }

    return `column-${screenSize}-${columnSize}`;
  }

  render() {
    const { xs, sm, md, lg, xl, className, pullLeft, pullRight, children, ...otherProps } = this.props;
    const classNames = [
      'column',
      this.sizeClassName('xs', xs),
      this.sizeClassName('sm', sm),
      this.sizeClassName('md', md),
      this.sizeClassName('lg', lg),
      this.sizeClassName('xl', xl)
    ];

    if (pullLeft && !pullRight) {
      classNames.push('pull-left');
    }

    if (pullRight && !pullLeft) {
      classNames.push('pull-right');
    }

    if (className) {
      classNames.push(className);
    }

    return (
      <div className={classNames.join(' ')} {...otherProps}>
        <div className="column-content">
          { Children.map(children, child => child) }
        </div>
      </div>
    );
  }
}
