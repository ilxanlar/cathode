import React from 'react';
import PropTypes from 'prop-types';
import Div from '../Utility/Div';
import classNames from '../../utils/classname';

export default class Cells extends React.Component {
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
      'cells-container',
      `gutter-${gutter}`,
      `v-align-${vAlign}`,
      multiCell ? 'multi-cell' : '',
      containerClassName
    ]);

    return (
      <Div children={children} className={className} />
    );
  }
}
