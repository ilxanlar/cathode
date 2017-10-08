import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field/Field';
import CheckboxOnly from './CheckboxOnly';
import Checklist from './Checklist';
import { formFieldPropTypes, selectableFieldPropTypes } from '../../utils/proptypes';
import optionsHelper from '../../utils/selectable';

export default class CheckboxGroup extends React.Component {
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
      let nextValue = [];
      const previousValue = input && input.value ? input.value : [];

      if (previousValue.some(item => item === value)) {
        nextValue = previousValue.filter(item => item !== value);
      } else {
        nextValue = [...previousValue, value];
      }

      input.onChange(nextValue);
    }
  }

  render() {
    const { size, options, optionLabel, optionValue, optionDisabled, input, inline } = this.props;
    const { optionsWrapperComponent: Options, optionComponent: Option } = this.props;
    const selectedValues = input ? input.value : [];

    let Wrapper = Checklist;
    let wrapperProps = { size, inline };

    if (Options) {
      Wrapper = Options;
      wrapperProps = {};
    }

    return (
      <Field {...this.props} fieldType="checkbox-group">
        <Wrapper {...wrapperProps}>
          {
            options.map((option, key) => {
              const value = optionsHelper.value(option, optionValue);
              const disabled = optionsHelper.disabled(option, optionDisabled);
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
                label = optionsHelper.label(option, optionLabel);
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
