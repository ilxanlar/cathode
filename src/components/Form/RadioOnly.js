import React from 'react';
import BooleanField from './BooleanField';
import { booleanFieldPropTypes } from '../../utils/proptypes';

export default class RadioOnly extends React.Component {
  static propTypes = {
    ...booleanFieldPropTypes
  };

  render() {
    return (
      <BooleanField
        fieldType="radio"
        dotClassName="radio-dot"
        {...this.props}
      />
    );
  }
}
