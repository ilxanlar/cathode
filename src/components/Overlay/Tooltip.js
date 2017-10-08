import React from 'react';
import PropTypes from 'prop-types';
import { overlayProps, styles } from '../../utils/proptypes';
import Overlay from './Overlay';

export default class Tooltip extends React.Component {
  static propTypes = {
    ...overlayProps,
    style: PropTypes.oneOf(styles),
  };

  static defaultProps = {
    style: styles[0],
    trigger: 'hover',
    placement: 'top'
  };

  render() {
    const { content, style, children, ...props } = this.props;

    return (
      <Overlay
        content={
          <div className={`tooltip-container tooltip-${props.placement || 'screwed'} style-${style}`}>
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
