import React, { Component, PropTypes } from 'react';

export default class Radio extends Component {
  static propTypes = {
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    description: PropTypes.node,
    input: PropTypes.object,
    meta: PropTypes.object
  };

  static defaultProps = {
    containerClassName: ''
  };

  state = {
    checked: false
  };

  componentWillMount() {
    if (this.props.input) {
      this.setState({
        checked: !!this.props.input.value
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.input && nextProps.input.value !== this.state.checked) {
      this.setState({
        checked: nextProps.input.value
      });
    }
  }

  handleChange = () => {
    const { input } = this.props;
    this.setState({ checked: true });
    if (input && input.onChange) {
      input.onChange(true);
    }
  };

  render() {
    const { checked } = this.state;
    const { className, containerClassName, description, input, meta } = this.props;
    const errorClassName = meta && meta.touched && meta.error ? 'field-has-error' : '';

    return (
      <div className={`form-field form-radio ${containerClassName} ${errorClassName}`}>
        <label className={`radio-label ${checked ? 'checked' : ''}`}>
          <input
            className={`html-radio ${className}`}
            type="checkbox"
            onChange={this.handleChange}
          />
          <div className="radio">
            { checked ? <div className="radio-dot"/> : null }
          </div>
          { description }
        </label>
      </div>
    );
  }
}
