import React, { Component, PropTypes, Children } from 'react';
import InputHead from './InputHead';
import InputBody from './InputBody';
import InputFoot from './InputFoot';

export default class Select extends Component {
  static propTypes = {
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    label: PropTypes.node,
    popupHelp: PropTypes.node,
    help: PropTypes.node,
    required: PropTypes.bool,
    description: PropTypes.string,
    optional: PropTypes.bool,
    options: PropTypes.array,
    optionValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
    ]),
    optionLabel: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
    ]),
    optionDisabled: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
    ]),
    input: PropTypes.object,
    meta: PropTypes.object,
    children: PropTypes.array
  };

  static defaultProps = {
    className: '',
    containerClassName: '',
    required: false,
    optional: true,
    options: [],
    optionValue: 'value',
    optionLabel: 'label',
    optionDisabled: 'disabled',
    description: null
  };

  handleChange = (event) => {
    const { input } = this.props;
    if (input && input.onChange) {
      input.onChange(event.target.value);
    }
  };

  renderOption = (option, key) => {
    const { optionValue, optionLabel, optionDisabled } = this.props;
    const value = typeof optionValue === 'string' ? option[optionValue] : optionValue(option);
    const label = typeof optionLabel === 'string' ? option[optionLabel] : optionLabel(option);

    let disabled = false;
    if (optionDisabled) {
      disabled = typeof optionDisabled === 'string' ? option[optionDisabled] : optionDisabled(option);
    }

    return (
      <option key={key} value={value} disabled={disabled}>
        {label}
      </option>
    );
  };

  render() {
    const {
      className, containerClassName, label, help, popupHelp, required,
      description, optional, options, meta, input, children
    } = this.props;
    const selectClassName = `html-input ${className}`;
    const errorClassName = meta && meta.touched && meta.error ? 'field-has-error' : '';

    let selectTag;
    if (Children.count(children) > 0) {
      selectTag = (
        <select className={selectClassName} {...input}>
          { Children.map(children, child => child) }
        </select>
      );
    } else {
      selectTag = (
        <select className={selectClassName} {...input}>
          { description ? <option disabled={!optional} value="">{description}</option> : null }
          { options.map(this.renderOption) }
        </select>
      );
    }

    return (
      <div className={`form-field form-select ${containerClassName} ${errorClassName}`}>
        <InputHead
          label={label}
          popupHelp={popupHelp}
          required={required}
        />

        <InputBody meta={meta}>
          { selectTag }
        </InputBody>

        <InputFoot help={help}/>
      </div>
    );
  }
}
