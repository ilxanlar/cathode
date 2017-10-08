import React from 'react';
import PropTypes from 'prop-types';
import Div from '../Utility/Div';
import classNames from '../../utils/classname';

export default class Form extends React.Component {
  static propTypes = {
    containerClassName: PropTypes.string,
    vertical: PropTypes.bool
  };

  static defaultProps = {
    vertical: false
  };

  static Heading = (props) => (
    <Div {...props} className="form-heading" />
  );

  static Buttons = (props) => (
    <Div {...props} className="form-buttons" />
  );

  render() {
    const { containerClassName, vertical, ...otherProps } = this.props;
    const className = classNames([
      'form-container',
      vertical ? 'form-vertical' : undefined,
      containerClassName
    ]);

    return (
      <Div {...otherProps} className={className} />
    );
  }
}
