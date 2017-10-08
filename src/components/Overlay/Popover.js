import React from 'react';
import PropTypes from 'prop-types';
import { overlayProps, sizes, styles } from '../../utils/proptypes';
import Overlay from './Overlay';

export default class Popover extends React.Component {
  static propTypes = {
    ...overlayProps,
    style: PropTypes.oneOf(styles),
    gutter: PropTypes.oneOf(sizes)
  };

  static defaultProps = {
    style: styles[0],
    gutter: sizes[0],
    trigger: 'hover',
    placement: 'top'
  };

  render() {
    const { content, style, gutter, children, ...props } = this.props;

    return (
      <Overlay
        content={
          <div className={`popover-container popover-${props.placement || 'screwed'} style-${style} gutter-${gutter}`}>
            {content}
          </div>
        }
        {...props}
      >
        {children}
      </Overlay>
    );
  }
}
