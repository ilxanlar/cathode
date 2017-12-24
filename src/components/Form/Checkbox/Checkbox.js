import React from 'react';
import Field from '../Field';
import PropProvider from '../FieldPropProvider';
import CheckboxOnly from './CheckboxOnly';
import { fieldCheckbox as propTypes } from '../../../helpers/propTypes';

class CheckboxRaw extends React.Component {
  handleChange = (value) => {
    const { input } = this.props;

    if (input && input.onChange) {
      input.onChange(value);
    }
  };

  render() {
    const { size, description, trueValue, falseValue, input, disabled } = this.props;
    const switchValue = input ? input.value : undefined;

    return (
      <Field {...this.props} fieldType="switch">
        <CheckboxOnly
          description={description}
          disabled={disabled}
          falseValue={falseValue}
          onChange={this.handleChange}
          size={size}
          trueValue={trueValue}
          value={switchValue}
        />
      </Field>
    );
  }
}

const Checkbox = PropProvider.withComponent(CheckboxRaw);

Checkbox.propTypes = propTypes;

Checkbox.defaultProps = {
  size: 'md'
};

export default Checkbox;