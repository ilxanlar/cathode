import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BaseDropdown from '../../Dropdown/Dropdown';
import { selectableHelper } from '../../../helpers/utils';

class DropdownRaw extends React.Component {
  state = {
    focusedKey: 0
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

  getOptionLabel = (option) => selectableHelper.label(option, this.props.optionLabel);

  getOptionDisabled = (option) => selectableHelper.disabled(option, this.props.optionDisabled);

  getOptionActive = (option) => this.props.optionActive(option);

  render() {
    const { focusedKey } = this.state;
    const { options, className } = this.props;

    return (
      <BaseDropdown.Container
        className={className}
        onClick={this.handleClickOnDropdown}
        innerRef={node => this.optionsRef = node}
      >
        {
          options.map((option, key) => {
            const label = this.getOptionLabel(option);
            const disabled = this.getOptionDisabled(option);
            const active = this.getOptionActive(option);
            const focus = key === focusedKey;

            return (
              <BaseDropdown.Item
                key={key}
                disabled={disabled}
                active={active}
                focus={focus}
                innerRef={this.handleFocusedOptionRef.bind(this, key)}
                onClick={this.handleClickOption.bind(this, option, disabled)}
              >
                {label}
              </BaseDropdown.Item>
            );
          })
        }
      </BaseDropdown.Container>
    );
  }
}

const Dropdown = styled(DropdownRaw)`
  ${BaseDropdown.Item} {
    ${props => props.loading ? `opacity: ${props.common.opacityLoading};` : undefined}
  }
`;

Dropdown.propTypes = {
  loading: PropTypes.bool,
  // options: PropTypes.array,
  // optionLabel: PropTypes.func.isRequired,
  // optionDisabled: PropTypes.func.isRequired,
  optionActive: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  onClickDisabled: PropTypes.func,
  onEnterKey: PropTypes.func,
  onEscapeKey: PropTypes.func,
  onClickEmptyArea: PropTypes.func,
  onClickOutside: PropTypes.func
};

Dropdown.defaultProps = {
  options: []
};

export default Dropdown;