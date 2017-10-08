import React from 'react';
import PropTypes from 'prop-types';
import Div from '../Utility/Div';
import { sizes } from '../../utils/proptypes';
import classNames from '../../utils/classname';

export default class Card extends React.Component {
  static propTypes = {
    containerClassName: PropTypes.string,
    padding: PropTypes.oneOf(sizes),
    loading: PropTypes.bool
  };

  static defaultProps = {
    padding: 'md',
    loading: false
  };

  static Cover = (props) => (
    <Div {...props} className="card-cover" />
  );

  static Content = (props) => (
    <Div {...props} className="card-content" />
  );

  render() {
    const { padding, containerClassName, loading, children } = this.props;
    const className = classNames([
      'card-container',
      `padding-${padding}`,
      loading ? 'card-loading' : undefined,
      containerClassName
    ]);

    return (
      <Div children={children} className={className} />
    );
  }
}
