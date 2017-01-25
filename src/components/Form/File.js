import React, { Component, PropTypes } from 'react';
import InputHead from './InputHead';
import InputBody from './InputBody';
import InputFoot from './InputFoot';
import Icon from '../Kit/Icon';

export default class File extends Component {
  static propTypes = {
    label: PropTypes.node,
    popupHelp: PropTypes.node,
    help: PropTypes.node,
    required: PropTypes.bool,
    placeholder: PropTypes.node,
    input: PropTypes.object,
    meta: PropTypes.object
  };

  static defaultProps = {
    placeholder: 'انتخاب فایل...'
  };

  state = {
    fileName: ''
  };

  handleChange = (event) => {
    const { input } = this.props;
    const files = event.target.files;
    const file = files[0];
    const fileName = file && file.name ? file.name : '';

    if (input && input.onChange) {
      input.onChange(file);
    }

    this.setState({ fileName });
  };

  render() {
    const { fileName } = this.state;
    const { placeholder, label, help, popupHelp, required, meta } = this.props;
    const hasError = meta && meta.touched && meta.error;
    const textNode = fileName ? (
      <span className="file-name">{fileName}</span>
    ) : (
      <span className="file-placeholder">{placeholder}</span>
    );

    return (
      <div className={`form-field form-file ${hasError ? 'field-has-error' : ''}`}>
        <InputHead
          label={label}
          popupHelp={popupHelp}
          required={required}
        />

        <InputBody meta={meta}>
          <label>
            <input
              type="file"
              value=""
              onChange={this.handleChange}
            />

            <span className="file-button">
            <Icon name="upload"/> { textNode }
          </span>
          </label>
        </InputBody>

        <InputFoot help={help}/>
      </div>
    );
  }
}
