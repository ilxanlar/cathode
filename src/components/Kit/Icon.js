import React, { Component, PropTypes } from 'react';

export default class Icon extends Component {
  static propTypes = {
    name: PropTypes.oneOf([
      'check',
      'upload',
      'info-circle',
      'help-circle'
    ])
  };

  render() {
    return (
      <i className={`cathode-icon cathode-icon-${this.props.name}`}/>
    );
  }
}
