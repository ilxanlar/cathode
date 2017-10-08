import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field/Field';
import SwitchOnly from './SwitchOnly';
import { formFieldPropTypes } from '../../utils/proptypes';

export default class Switch extends React.Component {
  static propTypes = {
    ...formFieldPropTypes,
    description: PropTypes.node,
    trueValue: PropTypes.any,
    falseValue: PropTypes.any
  };

  static defaultProps = {
    size: 'md'
  };

  handleChange(value) {
    const { input } = this.props;

    if (input && input.onChange) {
      input.onChange(value);
    }
  }

  render() {
    const { size, description, trueValue, falseValue, input, disabled } = this.props;
    const switchValue = input ? input.value : undefined;

    return (
      <Field {...this.props} fieldType="switch">
        <SwitchOnly
          size={size}
          disabled={disabled}
          description={description}
          value={switchValue}
          onChange={this.handleChange.bind(this)}
          trueValue={trueValue}
          falseValue={falseValue}
        />
      </Field>
    );
  }
}
