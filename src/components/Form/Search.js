import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './Text';
import Options from './DropdownOptions';
import Overlay from '../Overlay/Overlay';
import Field from './Field/Field';
import { formFieldPropTypes, selectableFieldPropTypes, sizePropTypes } from '../../utils/proptypes';

export default class Search extends React.Component {
  static PropTypes = {
    ...formFieldPropTypes,
    ...selectableFieldPropTypes,
    ...sizePropTypes,
    overlayProps: PropTypes.object,
    onSearch: PropTypes.func,
    delay: PropTypes.number,
    selected: PropTypes.any
  };

  static defaultProps = {
    size: 'md',
    placeholder: 'Search...',
    options: [],
    optionValue: 'value',
    optionLabel: 'label',
    optionDisabled: 'disabled',
    delay: 500
  };

  state = {
    text: '',
    focus: false
  };

  timeout = null;
  textNode = null;

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.focus && this.state.focus) {
      this.textNode.focus();
    }
  }

  handleClickContainer = () => {
    this.setState({ focus: true });
  };

  handleBlurText = () => {
    this.setState({ focus: false });
  };

  handleChangeText = (text) => {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }

    this.timeout = window.setTimeout(() => {
      if (this.props.onSearch) {
        this.props.onSearch(text);
      }
    }, 500);

    this.setState({ text });
  };

  handleSelect = (value) => {
    this.handleChange(value);
  };

  handleSelectByEnter = (value) => {
    this.handleChange(value);
  };

  handleChange(value) {
    const { input } = this.props;
    if (input && input.onChange && value !== input.value) {
      input.onChange(value);
    }
  }

  getOptionValue = (option) => {
    const { optionValue } = this.props;
    return typeof optionValue === 'string' ? option[optionValue] : optionValue(option);
  };

  getOptionLabel = (option) => {
    const { optionLabel } = this.props;
    return typeof optionLabel === 'string' ? option[optionLabel] : optionLabel(option);
  };

  getOptionDisabled = (option) => {
    const { optionDisabled } = this.props;
    if (optionDisabled) {
      return typeof optionDisabled === 'string' ? option[optionDisabled] : optionDisabled(option);
    } else {
      return false;
    }
  };

  render() {
    const { text, focus } = this.state;
    const { placeholder, options, selected, overlayProps } = this.props;

    let dropdown = '';
    if (options.length) {
      dropdown = (
        <Options
          options={options}
          optionLabel={this.getOptionLabel}
          optionValue={this.getOptionValue}
          optionDisabled={this.getOptionDisabled}
          onClick={this.handleSelect}
          onEnterKey={this.handleSelectByEnter}
        />
      );
    }

    return (
      <Overlay placement="bottom" align="right" trigger={true} content={dropdown} {...overlayProps}>
        <Field {...this.props} fieldType="auto-complete" fieldIsBox>
          <div
            className={`${focus ? 'show-search' : 'show-selected'}`}
            onClick={this.handleClickContainer}
          >
            <div className="form-auto-complete-placeholder">
              {
                selected ?
                  <div>This is selected value</div> :
                  <div className="input-placeholder-text">
                    {placeholder}
                  </div>
              }
            </div>

            <div className="form-auto-complete-search">
              <TextInput
                input={{
                  onChange: this.handleChangeText,
                  onBlur: this.handleBlurText,
                  value: text,
                  ref: node => this.textNode = node
                }}
              />
            </div>
          </div>
        </Field>
      </Overlay>
    )
  }
}
