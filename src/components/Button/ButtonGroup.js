import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classname';

export default class ButtonGroup extends React.Component {
  static propTypes = {
    containerClassName: PropTypes.string,
    gutter: PropTypes.string,
    vAlign: PropTypes.string,
    multiCell: PropTypes.bool
  };

  static defaultProps = {
    containerClassName: '',
    gutter: 'md',
    vAlign: 'top',
    multiCell: false
  };

  render() {
    const { containerClassName, gutter, vAlign, multiCell, children } = this.props;
    const className = classNames([
      'button-group',
      containerClassName
    ]);

    return (
      <div className={className}>
        {React.Children.map(children, child => child)}
      </div>
    );
  }
}
