import React, { Component, PropTypes } from 'react';

export default class Switch extends Component {
  static propTypes = {
    description: PropTypes.node,
    input: PropTypes.object,
    meta: PropTypes.object
  };

  state = {
    value: false
  };

  componentWillMount() {
    this.setValueFromProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setValueFromProps(nextProps);
  }

  setValueFromProps(props) {
    const { input } = props;
    if (input && input.value !== this.state.value) {
      this.setState({ value: !!input.value });
    }
  }

  handleChange = () => {
    const { input } = this.props;
    const newValue = !this.state.value;

    this.setState({ value: newValue });

    if (input && input.onChange) {
      input.onChange(newValue);
    }
  };

  render() {
    const { description, input } = this.props;
    const { value } = this.state;

    return (
      <div className="form-field form-switch">
        <label>
          <input type="checkbox" onChange={this.handleChange}/>

          <div className={`switch switch-${value ? 'on' : 'off'}`}>
            <div className="switch-trigger"/>
          </div>

          <span className="switch-label">
            { description }
          </span>
        </label>
      </div>
    );
  }
}
