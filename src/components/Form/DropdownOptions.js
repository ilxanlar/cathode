import React from 'react';
import PropTypes from 'prop-types';
import DropdownItem from '../Dropdown/Item';
import classNames from '../../utils/classname';

export default class DropdownOptions extends React.Component {
  static propTypes = {
    containerClassName: PropTypes.string,
    options: PropTypes.array,
    optionValue: PropTypes.func.isRequired,
    optionLabel: PropTypes.func.isRequired,
    optionDisabled: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    onClickDisabled: PropTypes.func,
    onEnterKey: PropTypes.func,
    onEscapeKey: PropTypes.func,
    onClickEmptyArea: PropTypes.func,
    onClickOutside: PropTypes.func
  };

  static defaultProps = {
    containerClassName: ''
  };

  state = {
    focusedKey: -1
  };

  __mounted = false;
  optionsRef = null;
  focusedOptionRef = null;
  byDropdown = false;

  componentDidMount() {
    this.__mounted = true;
    window.addEventListener('keydown', this.handleControls.bind(this));
    window.addEventListener('click', this.handleClickAnywhere);
  }

  componentWillUnmount() {
    this.__mounted = false;
    window.removeEventListener('keydown', this.handleControls.bind(this));
    window.removeEventListener('click', this.handleClickAnywhere);
  }

  handleFocusedOptionRef(key, node) {
    if (key === this.state.focusedKey) {
      this.focusedOptionRef = node;
    }
  }

  handleControls(event) {
    if (this.__mounted) {
      const { focusedKey } = this.state;
      const { options } = this.props;
      const maxHoverKey = options.length - 1;
      let newFocusKey = focusedKey;

      switch (event.keyCode) {
        case 13: // Enter
          event.preventDefault();
          if (focusedKey > -1 && focusedKey <= maxHoverKey) {
            this.handleEnterOption(options[focusedKey]);
          }
          break;

        case 27: // Escape
          event.preventDefault();
          this.handleHide();
          break;

        case 38: // Up
          event.preventDefault();
          newFocusKey = focusedKey - 1;

          while (options[newFocusKey] && this.getOptionDisabled(options[newFocusKey])) {
            if (--newFocusKey < 0) {
              break;
            }
          }

          if (newFocusKey >= 0) {
            this.setState({ focusedKey: newFocusKey }, this.handleScroll.bind(this));
          }

          break;

        case 40: // Down
          event.preventDefault();
          newFocusKey = focusedKey + 1;

          while (options[newFocusKey] && this.getOptionDisabled(options[newFocusKey])) {
            if (++newFocusKey > maxHoverKey) {
              break;
            }
          }

          if (focusedKey < maxHoverKey) {
            this.setState({ focusedKey: newFocusKey }, this.handleScroll.bind(this));
          }

          break;

        default:
          break;
      }
    }
  }

  handleClickAnywhere = (event) => {
    if (!this.byDropdown && this.props.onClickOutside) {
      this.props.onClickOutside();
    }

    this.byDropdown = false;
  };

  handleClickOnDropdown = () => {
    this.byDropdown = true;
  };

  handleHide() {
    if (this.props.onEscapeKey) {
      this.props.onEscapeKey();
    }
  }

  handleScroll() {
    if (this.focusedOptionRef) {
      while (this.focusedOptionRef.getBoundingClientRect().top < this.optionsRef.getBoundingClientRect().top) {
        this.optionsRef.scrollTop -= 100;
      }

      while (this.optionsRef.getBoundingClientRect().bottom < this.focusedOptionRef.getBoundingClientRect().bottom) {
        this.optionsRef.scrollTop += 100;
      }
    }
  }

  handleClickOption(option, disabled) {
    if (!disabled && this.props.onClick) {
      this.props.onClick(option);
    }

    if (disabled && this.props.onClickDisabled) {
      this.props.onClickDisabled(option);
    }
  }

  handleEnterOption(option) {
    const disabled = this.getOptionDisabled(option);

    if (!disabled && this.props.onEnterKey) {
      this.props.onEnterKey(option);
    }
  }

  getOptionValue = (option) => this.props.optionValue(option);

  getOptionLabel = (option) => this.props.optionLabel(option);

  getOptionDisabled = (option) => this.props.optionDisabled(option);

  render() {
    const { focusedKey } = this.state;
    const { options, value, containerClassName } = this.props;
    const className = classNames(['dropdown-container', containerClassName]);

    return (
      <div className={className} ref={node => this.optionsRef = node} onClick={this.handleClickOnDropdown}>
        {
          options.map((option, key) => {
            const label = this.getOptionLabel(option);
            const disabled = this.getOptionDisabled(option);
            const active = this.getOptionValue(option) === value;

            return (
              <DropdownItem
                key={key}
                disabled={disabled}
                active={active}
                containerClassName={key === focusedKey ? 'dropdown-item-focus' : undefined}
                componentProps={{
                  ref: this.handleFocusedOptionRef.bind(this, key),
                  onClick: this.handleClickOption.bind(this, option, disabled)
                }}
              >
                {label}
              </DropdownItem>
            );
          })
        }
      </div>
    );
  }
}
