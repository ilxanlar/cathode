import React from 'react';
import BooleanField from './BooleanField';
import { booleanFieldPropTypes } from '../../utils/proptypes';

export default class CheckboxOnly extends React.Component {
  static propTypes = {
    ...booleanFieldPropTypes
  };

  render() {
    return (
      <BooleanField
        fieldType="checkbox"
        dotClassName="checkbox-tick"
        {...this.props}
      />
    );
  }
}
