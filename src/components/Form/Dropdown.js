import React from 'react';
import Field from './Field/Field';
import Options from './DropdownOptions';
import Overlay from '../Overlay/Overlay';
import Button from '../Button/Button';
import Icon from '../Utility/Icon';
import { formFieldPropTypes, selectableFieldPropTypes, sizePropTypes } from '../../utils/proptypes';
import selectable from '../../utils/selectable';
import Config from '../Config';

export default class Dropdown extends React.Component {
  static propTypes = {
    ...formFieldPropTypes,
    ...sizePropTypes,
    ...selectableFieldPropTypes
  };

  static defaultProps = {
    size: 'md'
  };

  state = {
    show: false
  };

  button = undefined;
  byButton = false;

  handleChange(value) {
    const { input } = this.props;

    if (input && input.onChange) {
      input.onChange(value);
    }

    if (this.button) {
      this.button.focus();
    }
  }

  handleClickButton = () => {
    this.byButton = true;

    if (!this.state.show) {
      this.setState({ show: true });
    }
  };

  handleClickOutsideDropdown = () => {
    if (!this.byButton && this.state.show) {
      this.setState({ show: false });
    }

    this.byButton = false;
  };

  handleSelect = option => {
    const value = this.getOptionValue(option);
    this.handleChange(value);
    if (this.state.show) {
      this.setState({ show: false });
    }
  };

  getOptionValue = option => selectable.value(option, this.props.optionValue);

  getOptionLabel = option => selectable.label(option, this.props.optionLabel);

  getOptionDisabled = option => selectable.disabled(option, this.props.optionDisabled);

  getOptionByValue = value => this.props.options.find(opt => this.getOptionValue(opt) === value);

  getButtonLabel = () => {
    const { placeholder, input } = this.props;
    const buttonLabel = (<span className="input-placeholder-text">{placeholder}</span>);
    if (input && typeof input.value !== 'undefined') {
      const option = this.getOptionByValue(input.value);
      return option ? this.getOptionLabel(option) : buttonLabel;
    } else {
      return buttonLabel;
    }
  };

  render() {
    const { show } = this.state;
    const { options, overlayProps, size, input } = this.props;
    const value = input ? input.value : undefined;
    const placeholder = this.getButtonLabel();
    const iconName = Config.dropDown[show ? 'open' : 'close'];

    let dropdown = '';
    if (options.length) {
      dropdown = (
        <Options
          value={value}
          options={options}
          optionLabel={this.getOptionLabel}
          optionValue={this.getOptionValue}
          optionDisabled={this.getOptionDisabled}
          onClick={this.handleSelect}
          onEnterKey={this.handleSelect}
          onClickOutside={this.handleClickOutsideDropdown}
        />
      );
    }

    return (
      <Field {...this.props} fieldType="dropdown" fieldIsBox>
        <Overlay
          placement="bottom"
          align="left"
          trigger={show}
          content={dropdown}
          contentWidth="parent"
          gutter={2}
          {...overlayProps}
        >
          <Button
            style="select-button"
            size={size}
            onClick={this.handleClickButton}
            buttonRef={node => this.button = node}
            block
          >
            {placeholder}
            <Icon
              name={iconName}
              size={size}
            />
          </Button>
        </Overlay>
      </Field>
    );
  }
}
