import React from 'react';
import Field from '../Field';
import { SelectInput } from '../FieldBox';
import PropProvider from '../FieldPropProvider';
import { fieldSelect as propTypes } from '../../../helpers/propTypes';
import { selectableHelper } from '../../../helpers/utils';

class SelectRaw extends React.Component {
  handleChange = (event) => {
    const { input } = this.props;

    if (input && input.onChange) {
      input.onChange(event.target.value);
    }
  };

  render() {
    const { disabled, input, options, optionDisabled, optionLabel, optionValue, placeholder, required } = this.props;
    const value = input && typeof input.value !== 'undefined' ? input.value : undefined;
    const selectProps = {
      ...input,
      disabled,
      onChange: this.handleChange,
      placeholder,
      required: false,
      value
    };

    return (
      <Field {...this.props} fieldType="select" fieldIsBox>
        <SelectInput {...this.props} {...selectProps}>
          {
            placeholder ?
              <option disabled={required} value="">
                {placeholder}
              </option> : null
          }

          {
            options.map((opt, key) => {
              const optLabel = selectableHelper.label(opt, optionLabel);
              const optValue = selectableHelper.value(opt, optionValue);
              const optDisabled = selectableHelper.disabled(opt, optionDisabled);

              return (
                <option key={key} value={optValue} disabled={optDisabled}>
                  {optLabel}
                </option>
              );
            })
          }
        </SelectInput>
      </Field>
    );
  };
}

const Select = PropProvider.withComponent(SelectRaw);

Select.propTypes = propTypes;

Select.defaultProps = {
  options: [],
  size: 'md'
};

export default Select;