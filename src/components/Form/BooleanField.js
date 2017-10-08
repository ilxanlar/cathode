import React from 'react';
import PropTypes from 'prop-types';
import { booleanFieldPropTypes } from '../../utils/proptypes';

export default class BooleanField extends React.Component {
  static propTypes = {
    fieldType: PropTypes.oneOf(['checkbox', 'radio', 'switch']),
    ...booleanFieldPropTypes
  };

  static defaultProps = {
    size: 'md',
    trueValue: true,
    falseValue: false
  };

  state = {
    hover: false,
    focus: false,
    value: false
  };

  componentWillMount() {
    this.setValueFromProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setValueFromProps(nextProps);
  }

  setValueFromProps({ value: realValue }) {
    const value = this.getBooleanValue(realValue);

    if (value !== this.state.value) {
      this.setState({ value });
    }
  }

  getRealValue(value) {
    return value ? this.props.trueValue : this.props.falseValue;
  }

  getBooleanValue(value) {
    if (value === this.props.trueValue) {
      return true;
    } else {
      return false;
    }
  }

  handleChange() {
    if (!this.props.disabled) {
      if (this.props.fieldType === 'radio') {
        if (!this.state.value) {
          this.setState({ value: true });

          if (this.props.onChange) {
            this.props.onChange(this.getRealValue(true));
          }
        }
      } else {
        const value = !this.state.value;

        this.setState({ value });

        if (this.props.onChange) {
          this.props.onChange(this.getRealValue(value));
        }
      }
    }
  }

  handleFocus(focus) {
    this.setState({ focus });

    if (this.props.onChangeFocus) {
      this.props.onChangeFocus(focus);
    }
  }

  handleHover(hover) {
    this.setState({ hover });
  }

  render() {
    const { fieldType, size, dotClassName, description, customMarkup, disabled } = this.props;
    const { hover, focus, value } = this.state;
    let className = `boolean-field-label ${fieldType}-specific-label field-${disabled ? 'disabled' : 'enabled'} field-${value ? 'on' : 'off'}`;

    className = `${className} field-size-${size}`;

    if (hover) {
      className = `${className} field-hovered`;
    }

    if (focus) {
      className = `${className} field-focused`;
    }

    if (customMarkup) {
      className = `${className} field-custom-markup`;
    }

    return (
      <label
        className={className}
        onMouseOver={this.handleHover.bind(this, true)}
        onMouseOut={this.handleHover.bind(this, false)}
      >
        <input
          className={`boolean-field-input ${fieldType}-specific-input`}
          type="checkbox"
          onChange={this.handleChange.bind(this)}
          onFocus={this.handleFocus.bind(this, true)}
          onBlur={this.handleFocus.bind(this, false)}
          disabled={disabled}
        />

        {
          !customMarkup ?
            <div className={`boolean-field-container ${fieldType}-container ${fieldType}-${value ? 'on' : 'off'}`}>
              <div className={dotClassName} />
            </div> : null
        }

        {
          !customMarkup ?
            <span className={`boolean-field-description ${fieldType}-description`}>
              {description}
            </span> : null
        }

        {customMarkup ? customMarkup : null}
      </label>
    );
  }
}
