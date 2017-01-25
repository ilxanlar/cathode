import React, { Component, PropTypes } from 'react';
import Icon from '../Kit/Icon';

export default class Checkbox extends Component {
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
    const checked = !this.state.checked;
    this.setState({ checked });
    if (input && input.onChange) {
      input.onChange(checked);
    }
  };

  render() {
    const { checked } = this.state;
    const { className, containerClassName, description, input, meta } = this.props;
    const errorClassName = meta && meta.touched && meta.error ? 'field-has-error' : '';

    return (
      <div className={`form-field form-checkbox ${containerClassName} ${errorClassName}`}>
        <label className={`checkbox-label ${checked ? 'checked' : ''}`}>
          <input
            className={`html-checkbox ${className}`}
            type="checkbox"
            onChange={this.handleChange}
          />
          <div className="checkbox">
            { checked ? <Icon name="check"/> : null }
          </div>
          { description }
        </label>
      </div>
    );
  }
}
