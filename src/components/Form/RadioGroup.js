import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field/Field';
import RadioOnly from './RadioOnly';
import Checklist from './Checklist';
import { formFieldPropTypes, selectableFieldPropTypes } from '../../utils/proptypes';
import optionsHelper from '../../utils/selectable';

export default class RadioGroup extends React.Component {
  static propTypes = {
    ...formFieldPropTypes,
    ...selectableFieldPropTypes,
    inline: PropTypes.bool
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
    const { size, options, optionLabel, optionValue, optionDisabled, input, inline } = this.props;
    const { optionsWrapperComponent: Options, optionComponent: Option } = this.props;
    const selectedValue = input ? input.value : undefined;

    let Wrapper = Checklist;
    let wrapperProps = { inline };

    if (Options) {
      Wrapper = Options;
      wrapperProps = {};
    }

    return (
      <Field {...this.props} fieldType="radio-group">
        <Wrapper {...wrapperProps}>
          {
            options.map((option, key) => {
              const value = optionsHelper.value(option, optionValue);
              const disabled = optionsHelper.disabled(option, optionDisabled);
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
                label = optionsHelper.label(option, optionLabel);
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
