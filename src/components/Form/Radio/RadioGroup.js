import React from 'react';
import Field from '../Field';
import RadioOnly from './RadioOnly';
import Checklist from '../Checklist';
import PropProvider from '../FieldPropProvider';
import { fieldRadioGroup as propTypes } from '../../../helpers/propTypes';
import { selectableHelper } from '../../../helpers/utils';

class RadioGroupRaw extends React.Component {
  handleChange = (value) => {
    const { input } = this.props;

    if (input && input.onChange) {
      input.onChange(value);
    }
  };

  render() {
    const { size, options, optionLabel, optionValue, optionDisabled, input } = this.props;
    const { optionsWrapperComponent: Options, optionComponent: Option } = this.props;
    const selectedValue = input ? input.value : undefined;
    const Wrapper = Options || Checklist;
    const wrapperProps = { ...this.props };

    return (
      <Field {...this.props} fieldType="radio-group">
        <Wrapper {...wrapperProps}>
          {
            options.map((option, key) => {
              const value = selectableHelper.value(option, optionValue);
              const disabled = selectableHelper.disabled(option, optionDisabled);
              const selected = value === selectedValue;

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
                <RadioOnly
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

const RadioGroup = PropProvider.withComponent(RadioGroupRaw);

RadioGroup.propTypes = propTypes;

RadioGroup.defaultProps = {
  size: 'md',
  ...Checklist.defaultProps
};

export default RadioGroup;