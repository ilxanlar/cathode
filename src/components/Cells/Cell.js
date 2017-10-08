import React from 'react';
import PropTypes from 'prop-types';
import Div from '../Utility/Div';
import Config from '../Config';
import classNames from '../../utils/classname';

export default class Cell extends React.Component {
  static propTypes = {
    containerClassName: PropTypes.string,
    size: PropTypes.number,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number
  };

  static defaultProps = {
    containerClassName: ''
  };

  sizeClassName(columnSize, screenSize) {
    if (columnSize === 0 || columnSize >= 1 || columnSize <= Config.cellsColumnsCount) {
      return screenSize ? `cell-${screenSize}-${columnSize}` : `cell-${columnSize}`;
    }

    return undefined;
  }

  render() {
    const { containerClassName, size, xs, sm, md, lg, xl, children } = this.props;
    const className = classNames([
      'cell-container',
      containerClassName,
      this.sizeClassName(size),
      this.sizeClassName(xs, 'xs'),
      this.sizeClassName(sm, 'sm'),
      this.sizeClassName(md, 'md'),
      this.sizeClassName(lg, 'lg'),
      this.sizeClassName(xl, 'xl')
    ]);

    return (
      <div className={className}>
        <Div children={children} className="cell" />
      </div>
    );
  }
}
