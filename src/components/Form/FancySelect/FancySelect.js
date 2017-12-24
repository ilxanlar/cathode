import React from 'react';
import PropTypes from 'prop-types';
import Field from '../Field';
import PropProvider from '../FieldPropProvider';
import Crust from './Input';
import Dropdown from './Dropdown';
import Overlay from '../../Overlay/Overlay';
import Icon from '../../Icon/Icon';
import { formFieldPropTypes, selectableFieldPropTypes } from '../../../helpers/propTypes';
import { selectableHelper } from '../../../helpers/utils';
import variables from '../../../config/variables';

const { icons } = variables;

class FancySelectRaw extends React.Component {
  state = {
    showDropdown: false,
    search: {
      focus: false,
      value: ''
    }
  };

  ignoreClickOutside = false;
  searchInput = undefined;
  typeTimeout = undefined;

  defaultFilterFunction = (option, search) => {
    return selectableHelper.label(option, this.props.optionLabel).toLowerCase().indexOf(search.toLowerCase()) > -1;
  };

  handleSearchClick = () => {
    if (this.searchInput) {
      this.searchInput.focus();
    }

    this.ignoreClickOutside = true;

    if (!this.state.search.focus) {
      this.setState({
        search: {
          ...this.state.search,
          focus: true
        }
      });

      if (this.props.onSearch && this.props.options.length === 0) {
        this.props.onSearch(this.state.search.value);
      }
    }
  };

  handleSearchBlur = () => {
    this.setState({
      search: {
        ...this.state.search,
        focus: false
      }
    });
  };

  handleSearchChange = (event) => {
    const value = event.target.value;

    let newState = {
      search: {
        ...this.state.search,
        value
      }
    };

    if (!this.state.showDropdown) {
      newState = {
        ...newState,
        showDropdown: true
      };
    }

    this.setState(newState);

    if (this.typeTimeout) {
      window.clearTimeout(this.typeTimeout);
    }

    this.typeTimeout = window.setTimeout(() => {
      if (this.props.onSearch) {
        this.props.onSearch(value);
      }
    }, this.props.searchTimeout);
  };

  handleClickSingleCrust = () => {
    if (!this.state.showDropdown) {
      this.setState(
        { showDropdown: true },
        () => {
          if (this.searchInput) {
            this.handleSearchClick();
          }
        }
      );
    } else {
      this.handleSearchClick();
    }
  };

  handleClickMultiCrust = () => {
    this.handleClickSingleCrust();
  };

  handleClickOutsideDropdown = () => {
    if (!this.ignoreClickOutside && this.state.showDropdown) {
      this.setState({ showDropdown: false });
    }

    this.ignoreClickOutside = false;
  };

  handleEscapeKey = () => {
    if (this.state.showDropdown) {
      this.setState({ showDropdown: false });

      if (this.searchInput) {
        this.searchInput.blur();
      }
    }

    this.ignoreClickOutside = false;
  };

  handleClickOption = (option) => {
    const { input, multi, optionValue } = this.props;

    if (input && input.onChange) {
      let value;
      const clickedValue = selectableHelper.value(option, optionValue);

      if (multi) {
        const previousValue = input.value || [];
        value = [...previousValue, clickedValue];
      } else {
        value = clickedValue;
      }

      input.onChange(value);
    }

    if (multi) {
      if (this.searchInput) {
        this.searchInput.focus();

        this.setState({
          search: {
            ...this.state.search,
            value: ''
          }
        });
      }
    } else {
      this.setState({
        showDropdown: false,
        search: {
          ...this.state.search,
          value: ''
        }
      });
    }

    this.ignoreClickOutside = false;
  };

  handleRemoveOption = (option) => {
    const { input, optionValue } = this.props;

    if (input && input.onChange) {
      const previousValue = input.value instanceof Array ? input.value : [];
      const value = previousValue.filter(optValue => optValue !== selectableHelper.value(option, optionValue));
      input.onChange(value);
    }
  };

  isOptionActive = (option) => {
    const { multi, input, optionValue } = this.props;

    if (input) {
      let previousValue = [];

      if (multi) {
        previousValue = input.value instanceof Array ? input.value : [];
      } else if (typeof input.value !== 'undefined') {
        previousValue = [input.value];
      }

      return previousValue.includes(selectableHelper.value(option, optionValue));
    }

    return false;
  };

  renderCrustSingle = (inputProps) => {
    const { search, showDropdown } = this.state;
    const { input, options, optionLabel, optionValue, placeholder, searchable, size } = this.props;
    const value = input ? input.value : undefined;
    const option = options.find(opt => selectableHelper.value(opt, optionValue) === value);

    let content;
    if (searchable) {
      content = (showDropdown || !option) ? (
        <Crust.Search
          innerRef={node => this.searchInput = node}
          size={size}
          placeholder={placeholder}
          onBlur={this.handleSearchBlur}
          onChange={this.handleSearchChange}
          value={search.value}
        />
      ) : (
        <Crust.SingleItem>
          {selectableHelper.label(option, optionLabel)}
        </Crust.SingleItem>
      )
    } else {
      content = option ? (
        <Crust.SingleItem>
          {selectableHelper.label(option, optionLabel)}
        </Crust.SingleItem>
      ) : (
        <Crust.Placeholder>
          {placeholder} &nbsp;
        </Crust.Placeholder>
      );
    }

    return (
      <Crust {...inputProps} isFocused={showDropdown} onClick={this.handleClickSingleCrust}>
        {content}

        <Crust.SingleArrowWrapper isOpen={showDropdown} size={size}>
          <Icon nameDefault="angleDown" />
        </Crust.SingleArrowWrapper>
      </Crust>
    );
  };

  renderCrustMulti = (inputProps) => {
    const { search: searchInput, showDropdown } = this.state;
    const { input, options, optionLabel, optionValue, placeholder, searchable, size } = this.props;
    const value = input && input.value instanceof Array ? input.value : [];

    return (
      <Crust {...inputProps} isFocused={showDropdown} onClick={this.handleClickMultiCrust} multi>
        <Crust.MultiItems>
          {
            value.map((optValue, key) => {
              const opt = options.find(fOpt => optValue === selectableHelper.value(fOpt, optionValue));

              if (opt) {
                return (
                  <Crust.MultiItem
                    key={key}
                    onRemove={this.handleRemoveOption.bind(this, opt)}
                    size={size}
                    isLast={key === value.length - 1}
                  >
                    {selectableHelper.label(opt, optionLabel)}
                  </Crust.MultiItem>
                );
              }

              return null;
            })
          }

          {
            searchable ?
              <Crust.Search
                innerRef={node => this.searchInput = node}
                size={size}
                placeholder={placeholder}
                onBlur={this.handleSearchBlur}
                onChange={this.handleSearchChange}
                value={searchInput.value}
              /> :
              <Crust.Placeholder onClick={this.handleSearchClick}>
                {placeholder} &nbsp;
              </Crust.Placeholder>
          }
        </Crust.MultiItems>
      </Crust>
    );
  };

  render() {
    const { search, showDropdown } = this.state;
    const { disabled, filterFunction, hasError, hasWarning, input, loading, multi, onSearch, options, optionDisabled, optionLabel, optionValue, renderLoading, renderNoOptions, size } = this.props;
    const inputProps = {
      ...input,
      disabled,
      hasError,
      hasWarning,
      size
    };

    let filteredOptions = options;
    let previousValue;

    if (search.value && !onSearch) {
      const filterFunc = filterFunction || this.defaultFilterFunction;
      filteredOptions = filteredOptions.filter(opt => filterFunc(opt, search.value));
    }

    if (multi) {
      previousValue = input.value instanceof Array ? input.value : [];
      filteredOptions = filteredOptions.filter(opt => !previousValue.includes(selectableHelper.value(opt, optionValue)));
    }

    // const hasEnabledOption = !!filteredOptions.find(opt => !optionDisabled(opt));

    let dropdownProps = {
      options: filteredOptions,
      optionLabel,
      optionDisabled
    };

    if (filteredOptions.length === 0) {
      dropdownProps = {
        ...dropdownProps,
        options: [1],
        optionLabel: () => loading ? renderLoading : renderNoOptions,
        optionDisabled: () => true
      };
    }

    const dropdown = (
      <Dropdown
        loading={loading && options.length > 0}
        optionActive={this.isOptionActive}
        onClick={this.handleClickOption}
        onEnterKey={this.handleClickOption}
        onClickOutside={this.handleClickOutsideDropdown}
        onEscapeKey={this.handleEscapeKey}
        {...dropdownProps}
      />
    );

    return (
      <Field {...this.props} fieldType="fancy-select" fieldIsBox>
        <Overlay
          content={dropdown}
          contentWidth="parent"
          placement="bottom"
          trigger={showDropdown}
        >
          {multi ? this.renderCrustMulti(inputProps) : this.renderCrustSingle(inputProps)}
        </Overlay>
      </Field>
    );
  };
}

const FancySelect = PropProvider.withComponent(FancySelectRaw);

FancySelect.propTypes = {
  ...formFieldPropTypes,
  ...selectableFieldPropTypes,
  filterFunction: PropTypes.func,
  loading: PropTypes.bool,
  renderLoading: PropTypes.node,
  multi: PropTypes.bool,
  searchable: PropTypes.bool,
  onSearch: PropTypes.func,
  searchTimeout: PropTypes.number
};

FancySelect.defaultProps = {
  renderLoading: 'Please wait...',
  renderNoOptions: 'Nothing found...',
  size: 'md',
  searchable: true,
  searchTimeout: 300
};

export default FancySelect;