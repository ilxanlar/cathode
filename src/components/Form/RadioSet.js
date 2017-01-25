import React, { Component, PropTypes } from 'react';
import Checklist from './Checklist';
import Radio from './Radio';

export default class RadioSet extends Component {
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
    inline: PropTypes.bool,
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

  state = {
    value: ''
  };

  componentWillMount() {
    if (this.props.input) {
      this.setState({
        value: this.props.input.value
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.input && nextProps.input.value !== this.state.value) {
      this.setState({
        value: nextProps.input.value
      });
    }
  }

  handleChange = (value) => {
    if (value !== this.state.value) {
      const { input } = this.props;

      this.setState({ value });

      if (input && input.onChange) {
        input.onChange(value);
      }
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
      <Radio
        key={key}
        description={label}
        disabled={disabled}
        input={{
          onChange: this.handleChange.bind(this, value),
          value: value === this.state.value
        }}
      />
    );
  };

  render() {
    const { containerClassName, options, meta } = this.props;
    const errorClassName = meta && meta.touched && meta.error ? 'field-has-error' : '';

    return (
      <div className={`form-field form-radio-set ${containerClassName} ${errorClassName}`}>
        <Checklist {...this.props}>
          { options.map(this.renderOption) }
        </Checklist>
      </div>
    );
  }
}
