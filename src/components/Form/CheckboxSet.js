import React, { Component, PropTypes } from 'react';
import Checklist from './Checklist';
import Checkbox from './Checkbox';

export default class CheckboxSet extends Component {
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
    selectedOptions: []
  };

  componentWillMount() {
    if (this.props.input && this.props.input.value) {
      this.setState({
        selectedOptions: this.props.input.value
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.input && nextProps.input.value && nextProps.input.value !== this.state.selectedOptions) {
      this.setState({
        selectedOptions: nextProps.input.value
      });
    }
  }

  toggleOption(value) {
    const { selectedOptions } = this.state;
    let newOptions;

    if (this.hasOption(value)) {
      newOptions = selectedOptions.filter(opt => opt !== value);
    } else {
      newOptions = selectedOptions.concat([value]);
    }

    return newOptions;
  }

  hasOption(value) {
    return this.state.selectedOptions.filter(opt => opt === value).length > 0;
  }

  handleChange = (value) => {
    const { input } = this.props;
    const selectedOptions = this.toggleOption(value);

    this.setState({ selectedOptions });

    if (input && input.onChange) {
      input.onChange(selectedOptions);
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
      <Checkbox
        key={key}
        description={label}
        disabled={disabled}
        input={{
          onChange: this.handleChange.bind(this, value),
          value: this.hasOption(value)
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
