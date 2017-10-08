import React from 'react';
import BooleanField from './BooleanField';
import { booleanFieldPropTypes } from '../../utils/proptypes';

export default class SwitchOnly extends React.Component {
  static propTypes = {
    ...booleanFieldPropTypes
  };

  render() {
    return (
      <BooleanField
        fieldType="switch"
        dotClassName="switch-trigger"
        {...this.props}
      />
    );
  }
}
