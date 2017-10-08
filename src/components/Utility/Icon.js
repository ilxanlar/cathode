import React from 'react';
import PropTypes from 'prop-types';
import { sizes } from '../../utils/proptypes';
import classNames from '../../utils/classname';

export default class Icon extends React.Component {
  static propTypes = {
    containerClassName: PropTypes.string,
    name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]),
    size: PropTypes.oneOf([...sizes, 'block'])
  };

  static defaultProps = {
    containerClassName: '',
    size: 'md'
  };

  render() {
    const { containerClassName, name, size } = this.props;

    if (typeof name === 'string') {
      const className = classNames([
        `icon icon-${name} icon-size-${size}`,
        containerClassName
      ]);

      return (
        <i className={className} />
      );
    }

    return name || null;
  }
}
