import React from 'react';
import PropTypes from 'prop-types';
import Crust from './Input';
import Dropdown from './Dropdown';
import Overlay from '../../Overlay/Overlay';
import Icon from '../../Icon/Icon';
import Field from '../Field';
import PropProvider from '../FieldPropProvider';
import { formFieldPropTypes, selectableFieldPropTypes } from '../../../helpers/propTypes';
import { selectableHelper } from '../../../helpers/utils';

class FancySelectRaw extends React.Component {
  state = {
    selectedValues: undefined,
    selectedLabels: undefined,
    selectedOptions: [],
    showDropdown: false,
    search: {
      focus: false,
      value: ''
    }
  };

  ignoreClickOutside = false;
  searchInput = undefined;
  typeTimeout = undefined;

  componentWillMount() {
    const { input } = this.props;

    if (input) {
      this.setState({ selectedOptions: input.value });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { selectedOptions } = this.state;
    const { input, multi, optionValue } = nextProps;

    if (input) {
      if (multi) {
        const previousOptions = selectedOptions instanceof Array ? selectedOptions : [];
        const nextOptions = input.value instanceof Array ? input.value : [];
        const aHasB = previousOptions.every(oldOpt => nextOptions.some(newOpt => selectableHelper.value(newOpt, optionValue) === selectableHelper.value(oldOpt, optionValue)));
        const bHasA = nextOptions.every(newOpt => previousOptions.some(oldOpt => selectableHelper.value(oldOpt, optionValue) === selectableHelper.value(newOpt, optionValue)));

        if (!aHasB || !bHasA) {
          this.setState({ selectedOptions: nextOptions });
        }
      } else {
        if (selectableHelper.value(selectedOptions, optionValue) !== selectableHelper.value(input.value, optionValue)) {
          this.setState({ selectedOptions: input.value });
        }
      }
    }
  }

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

  handleSearchBlur = (event) => {
    event.stopPropagation();

    this.setState({
      search: {
        ...this.state.search,
        focus: false
      }
    });
  };

  handleSearchChange = (event) => {
    event.stopPropagation();
    let value = event.target.value;

    if (this.props.filterSearchInput) {
      value = this.props.filterSearchInput(value);
    }

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
    const { selectedOptions } = this.state;
    const { input, multi, optionValue } = this.props;
    let nextState = {};
    let nextOptions;

    if (multi) {
      const previousOptions = selectedOptions || [];
      nextOptions = [
        ...previousOptions.filter(opt => selectableHelper.value(opt, optionValue) !== selectableHelper.value(option, optionValue)),
        option
      ];
    } else {
      nextOptions = option;
    }

    nextState.selectedOptions = nextOptions;

    if (multi) {
      if (this.searchInput) {
        this.searchInput.focus();

        nextState.search = {
          ...this.state.search,
          value: ''
        };
      }
    } else {
      nextState.showDropdown = false;
      nextState.search = {
        ...this.state.search,
        value: ''
      }
    }

    this.setState(nextState, () => {
      if (input && input.onChange) {
        input.onChange(nextState.selectedOptions);
      }
    });

    this.ignoreClickOutside = false;
  };

  handleRemoveOption = (option) => {
    const { selectedOptions } = this.state;
    const { input, optionValue } = this.props;

    if (input && input.onChange) {
      const previousOptions = selectedOptions instanceof Array ? selectedOptions : [];
      const nextOptions = previousOptions.filter(opt => selectableHelper.value(opt, optionValue) !== selectableHelper.value(option, optionValue));
      this.setState({ selectedOptions: nextOptions }, () => {
        input.onChange(nextOptions);
      });
    }
  };

  isOptionActive = (option) => {
    const { multi, input, optionValue } = this.props;

    if (input) {
      let previousOptions = [];

      if (multi) {
        previousOptions = input.value instanceof Array ? input.value : [];
      } else if (typeof input.value !== 'undefined') {
        previousOptions = [input.value];
      }

      return previousOptions.some(opt => selectableHelper.value(opt, optionValue) === selectableHelper.value(option, optionValue));
    }

    return false;
  };

  renderCrustSingle = (inputProps) => {
    const { search, selectedOptions: option, showDropdown } = this.state;
    const { optionLabel, placeholder, searchable, size } = this.props;

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
    const { search: searchInput, selectedOptions, showDropdown } = this.state;
    const { optionLabel, placeholder, searchable, size } = this.props;

    return (
      <Crust {...inputProps} isFocused={showDropdown} onClick={this.handleClickMultiCrust} multi>
        <Crust.MultiItems>
          {
            selectedOptions ?
              selectedOptions.map((opt, key) => (
                <Crust.MultiItem
                  key={key}
                  onRemove={this.handleRemoveOption.bind(this, opt)}
                  size={size}
                  isLast={key === selectedOptions.length - 1}
                >
                  {selectableHelper.label(opt, optionLabel)}
                </Crust.MultiItem>
              )) : null
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
    const { search, selectedOptions, showDropdown } = this.state;
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
      previousValue = selectedOptions;

      if (previousValue instanceof Array && previousValue.length) {
        filteredOptions = filteredOptions.filter(opt => !previousValue.some(opt2 => selectableHelper.value(opt2, optionValue) === selectableHelper.value(opt, optionValue)));
      }
    }

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
          fallbackPlacement="top"
          trigger={showDropdown}
        >
          {multi ? this.renderCrustMulti(inputProps) : this.renderCrustSingle(inputProps)}
        </Overlay>
      </Field>
    );
  };
}

export const FancySelect = PropProvider.withComponent(FancySelectRaw);

FancySelect.propTypes = {
  ...formFieldPropTypes,
  ...selectableFieldPropTypes,
  filterFunction: PropTypes.func,
  filterSearchInput: PropTypes.func,
  loading: PropTypes.bool,
  renderLoading: PropTypes.node,
  multi: PropTypes.bool,
  searchable: PropTypes.bool,
  onSearch: PropTypes.func,
  searchTimeout: PropTypes.number
};

FancySelect.defaultProps = {
  options: [],
  renderLoading: 'لطفا صبر کنید...',
  renderNoOptions: 'موردی یافت نشد',
  size: 'md',
  searchable: true,
  searchTimeout: 300
};

export default FancySelect;
