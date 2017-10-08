import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field/Field';
import { formFieldPropTypes, sizePropTypes } from '../../utils/proptypes';

export default class Text extends React.Component {
  static propTypes = {
    ...formFieldPropTypes,
    ...sizePropTypes,
    type: PropTypes.oneOf(['text', 'password', 'number', 'date', 'email', 'textarea']),
    normalizer: PropTypes.func
  };

  static defaultProps = {
    size: 'md',
    type: 'text'
  };

  state = {
    value: ''
  };

  handleChange(event) {
    const { input, normalizer } = this.props;
    const value = normalizer ? normalizer(event.target.value) : event.target.value;

    if (input && input.onChange) {
      input.onChange(value);
    }
  }

  render() {
    const { placeholder, type, input, disabled } = this.props;
    const value = input && typeof input.value === 'string' ? input.value : '';

    return (
      <Field {...this.props} fieldType="text" fieldIsBox>
        {
          type === 'textarea' ?
            <textarea
              {...input}
              placeholder={placeholder}
              value={value}
              onChange={this.handleChange.bind(this)}
              disabled={disabled}
            /> :
            <input
              type={type}
              {...input}
              placeholder={placeholder}
              value={value}
              onChange={this.handleChange.bind(this)}
              disabled={disabled}
            />
        }
      </Field>
    );
  }
}
