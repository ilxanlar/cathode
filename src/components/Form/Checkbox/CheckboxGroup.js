import React from 'react';
import Field from '../Field';
import CheckboxOnly from './CheckboxOnly';
import Checklist from '../Checklist';
import PropProvider from '../FieldPropProvider';
import { fieldCheckboxGroup as propTypes } from '../../../helpers/propTypes';
import { selectableHelper } from '../../../helpers/utils';

class CheckboxGroupRaw extends React.Component {
  handleChange = (value) => {
    const { input } = this.props;

    if (input && input.onChange) {
      let nextValue = [];
      const previousValue = input && input.value ? input.value : [];

      if (previousValue.some(item => item === value)) {
        nextValue = previousValue.filter(item => item !== value);
      } else {
        nextValue = [...previousValue, value];
      }

      input.onChange(nextValue);
    }
  };

  render() {
    const { size, options, optionLabel, optionValue, optionDisabled, input } = this.props;
    const { optionsWrapperComponent: Options, optionComponent: Option } = this.props;
    const selectedValues = input ? input.value : [];
    const Wrapper = Options || Checklist;
    const wrapperProps = { ...this.props };

    return (
      <Field {...this.props} fieldType="checkbox-group">
        <Wrapper {...wrapperProps}>
          {
            options.map((option, key) => {
              const value = selectableHelper.value(option, optionValue);
              const disabled = selectableHelper.disabled(option, optionDisabled);
              const selected = selectedValues && selectedValues.some(item => item === value);

              let label;
              let customMarkup;
              if (Option) {
                customMarkup = (
                  <Option
                    option={option}
                    value={value}
                    disabled={disabled}
                    selected={selected}
                  />
                );
              } else {
                label = selectableHelper.label(option, optionLabel);
              }

              return (
                <CheckboxOnly
                  key={key}
                  description={label}
                  customMarkup={customMarkup}
                  value={selected}
                  onChange={this.handleChange.bind(this, value)}
                  disabled={disabled}
                  size={size}
                />
              );
            })
          }
        </Wrapper>
      </Field>
    );
  }
}

const CheckboxGroup = PropProvider.withComponent(CheckboxGroupRaw);

CheckboxGroup.propTypes = propTypes;

CheckboxGroup.defaultProps = {
  size: 'md',
  ...Checklist.defaultProps
};

export default CheckboxGroup;