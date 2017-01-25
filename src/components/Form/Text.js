import React, { Component, PropTypes } from 'react';
import InputHead from './InputHead';
import InputBody from './InputBody';
import InputFoot from './InputFoot';
import { latinNumber } from '../../utils/number';

export default class Text extends Component {
  static propTypes = {
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    label: PropTypes.node,
    popupHelp: PropTypes.node,
    help: PropTypes.node,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf([
      'text',
      'password',
      'number',
      'date',
      'email',
      'textarea'
    ]),
    ltr: PropTypes.bool,
    latinNumbers: PropTypes.bool,
    input: PropTypes.object,
    meta: PropTypes.object
  };

  static defaultProps = {
    className: '',
    containerClassName: '',
    required: false,
    type: 'text',
    ltr: false,
    latinNumbers: false
  };

  handleChange(event) {
    const { input, latinNumbers } = this.props;
    if (input && input.onChange) {
      const value = latinNumbers ? latinNumber(event.target.value) : event.target.value;
      input.onChange(value);
    }
  }

  render() {
    const { className, containerClassName, label, help, popupHelp, required, placeholder, type, ltr, input, meta } = this.props;
    const errorClassName = meta && meta.touched && meta.error ? 'field-has-error' : '';
    const directionClassName = ltr ? 'form-ltr' : 'form-rtl';

    return (
      <div className={`form-field form-text ${directionClassName} ${containerClassName} ${errorClassName}`}>
        <InputHead
          label={label}
          popupHelp={popupHelp}
          required={required}
        />

        <InputBody meta={meta}>
          {
            type === 'textarea' ?
              <textarea
                className={`html-input ${className}`}
                placeholder={placeholder}
                {...input}
                onChange={this.handleChange.bind(this)}
              /> :
              <input
                className={`html-input ${className}`}
                type={type}
                placeholder={placeholder}
                {...input}
                onChange={this.handleChange.bind(this)}
              />
          }
        </InputBody>

        <InputFoot help={help}/>
      </div>
    );
  }
}
