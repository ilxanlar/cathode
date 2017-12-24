import PropTypes from 'prop-types';
import variables from '../config/variables';

const { gutters, moods } = variables;

export const moodKeys = Object.keys(moods);
export const sizeKeys = Object.keys(gutters);

export const message = {
  mood: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
  moodyBg: PropTypes.bool,
  sideBorders: PropTypes.bool,
  sideBordersWidth: PropTypes.number,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.bool
  ]),
  closable: PropTypes.bool,
  autoCloseAfter: PropTypes.number,
  onClose: PropTypes.func,
  paddingXxs: PropTypes.oneOf(sizeKeys),
  paddingXs: PropTypes.oneOf(sizeKeys),
  paddingSm: PropTypes.oneOf(sizeKeys),
  paddingMd: PropTypes.oneOf(sizeKeys),
  paddingLg: PropTypes.oneOf(sizeKeys),
  paddingXl: PropTypes.oneOf(sizeKeys),
  paddingXxl: PropTypes.oneOf(sizeKeys)
};

export const button = {
  type: PropTypes.oneOf(['button', 'submit']),
  size: PropTypes.oneOf(sizeKeys),
  mood: PropTypes.oneOf(moodKeys),
  glass: PropTypes.bool,
  ghost: PropTypes.bool,
  wide: PropTypes.bool,
  block: PropTypes.bool,
  disableHoverStyles: PropTypes.bool,
  disablePressStyles: PropTypes.bool,
  loading: PropTypes.bool
};

export const card = {
  paddingXxs: PropTypes.oneOf(sizeKeys),
  paddingXs: PropTypes.oneOf(sizeKeys),
  paddingSm: PropTypes.oneOf(sizeKeys),
  paddingMd: PropTypes.oneOf(sizeKeys),
  paddingLg: PropTypes.oneOf(sizeKeys),
  paddingXl: PropTypes.oneOf(sizeKeys),
  paddingXxl: PropTypes.oneOf(sizeKeys),
  border: PropTypes.bool,
  loading: PropTypes.bool,
  blockOnLoading: PropTypes.bool,
  disabled: PropTypes.bool
};

export const container = {
  fluid: PropTypes.bool,
  paddingXxs: PropTypes.oneOf(sizeKeys),
  paddingXs: PropTypes.oneOf(sizeKeys),
  paddingSm: PropTypes.oneOf(sizeKeys),
  paddingMd: PropTypes.oneOf(sizeKeys),
  paddingLg: PropTypes.oneOf(sizeKeys),
  paddingXl: PropTypes.oneOf(sizeKeys),
  paddingXxl: PropTypes.oneOf(sizeKeys),
  skipXs: PropTypes.bool,
  skipSm: PropTypes.bool,
  skipMd: PropTypes.bool,
  skipLg: PropTypes.bool,
  skipXl: PropTypes.bool,
  skipXxl: PropTypes.bool
};

export const dropdown = {
  buttonProps: PropTypes.shape(button),
  label: PropTypes.node.isRequired,
  noCaret: PropTypes.bool,
  overlayProps: PropTypes.object
};

export const dropdownItem = {
  active: PropTypes.bool,
  disabled: PropTypes.bool
};

export const icon = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  nameDefault: PropTypes.string,
  size: PropTypes.oneOf(sizeKeys)
};

export const row = {
  gutterXxs: PropTypes.oneOf(sizeKeys),
  gutterXs: PropTypes.oneOf(sizeKeys),
  gutterSm: PropTypes.oneOf(sizeKeys),
  gutterMd: PropTypes.oneOf(sizeKeys),
  gutterLg: PropTypes.oneOf(sizeKeys),
  gutterXl: PropTypes.oneOf(sizeKeys),
  gutterXxl: PropTypes.oneOf(sizeKeys),
  multi: PropTypes.bool
};

export const column = {
  xxs: PropTypes.number,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  xxl: PropTypes.number,
  orderXxs: PropTypes.number,
  orderXs: PropTypes.number,
  orderSm: PropTypes.number,
  orderMd: PropTypes.number,
  orderLg: PropTypes.number,
  orderXl: PropTypes.number,
  orderXxl: PropTypes.number
};

export const loadingSpinner = {
  duration: PropTypes.number,
  mood: PropTypes.oneOf(moodKeys),
  size: PropTypes.oneOf(sizeKeys),
  sizePx: PropTypes.number,
  thickness: PropTypes.number,
  timing: PropTypes.string
};

export const tabs = {
  activeTab: PropTypes.number,
  cardProps: PropTypes.shape(card),
  mood: PropTypes.oneOf(['primary', 'secondary', 'info', 'error', 'warning', 'success']),
  onTabSelect: PropTypes.func,
  onTabChange: PropTypes.func
};

export const overlay = {
  content: PropTypes.node.isRequired,
  contentWrapper: PropTypes.func,
  contentWrapperProps: PropTypes.object,
  contentWidth: PropTypes.oneOf(['auto', 'parent']),
  trigger: PropTypes.oneOf([true, false, 'mouseOver', 'focus', 'click']),
  unTrigger: (props, propName, componentName) => {
    const available = {
      mouseOver: ['mouseOut', 'clickOutside'],
      focus: ['blur', 'clickOutside'],
      click: ['click', 'clickOutside']
    };

    if (props.trigger && props.unTrigger && !available[props.trigger].includes(props.unTrigger)) {
      const unTriggers = available[props.trigger].map(unTrig => `'${unTrig}'`).join(' or ');
      return new Error(`Invalid prop 'unTrigger' supplied to ${componentName}. If you use '${props.trigger}' for trigger, You can only use ${unTriggers} for unTrigger'`);
    }
  },
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  align: PropTypes.oneOf(['top', 'center', 'bottom', 'left', 'right']),
  fallbackPlacement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  fallbackAlign: PropTypes.oneOf(['top', 'center', 'bottom', 'left', 'right']),
  gutter: PropTypes.oneOf(sizeKeys),
  gutterPx: PropTypes.number,
  showDelay: PropTypes.number,
  hideDelay: PropTypes.number
};

export const popover = {
  ...overlay
};

export const field = {
  feedbackIn: PropTypes.oneOf(['head', 'foot']),
  size: PropTypes.oneOf(sizeKeys),
  addOnBefore: PropTypes.node,
  addOnAfter: PropTypes.node
};

export const checklist = {
  gridColumnProps: PropTypes.shape(column),
  gridRowProps: PropTypes.shape(row)
};

export const formFieldPropTypes = {
  label: PropTypes.node,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  tip: PropTypes.node,
  help: PropTypes.node,
  input: PropTypes.object,
  meta: PropTypes.object,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(sizeKeys)
};

export const booleanFieldPropTypes = {
  description: PropTypes.node,
  customMarkup: PropTypes.node,
  onChange: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  trueValue: PropTypes.any,
  falseValue: PropTypes.any,
  size: PropTypes.oneOf(sizeKeys),
  mood: PropTypes.oneOf(moodKeys)
};

export const selectableFieldPropTypes = {
  options: PropTypes.array,
  optionValue: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  optionLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  optionDisabled: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  optionsWrapperComponent: PropTypes.func,
  optionComponent: PropTypes.func
};

export const fieldBoolean = {
  fieldType: PropTypes.oneOf(['checkbox', 'radio', 'switch']),
  ...booleanFieldPropTypes
};

export const fieldBooleanTrigger = {
  isDisabled: PropTypes.bool,
  isHovered: PropTypes.bool,
  isFocused: PropTypes.bool,
  mood: PropTypes.oneOf(moodKeys),
  size: PropTypes.oneOf(sizeKeys),
  isSelected: PropTypes.bool
};

export const fieldCheckboxOnly = {
  ...fieldBoolean
};

export const fieldCheckbox = {
  ...formFieldPropTypes,
  description: PropTypes.node,
  trueValue: PropTypes.any,
  falseValue: PropTypes.any
};

export const fieldCheckboxGroup = {
  ...formFieldPropTypes,
  ...selectableFieldPropTypes,
  ...checklist
};

export const fieldRadioOnly = {
  ...fieldCheckboxOnly
};

export const fieldRadioGroup = {
  ...fieldCheckboxGroup
};

export const fieldSwitchOnly = {
  ...fieldCheckboxOnly
};

export const fieldSwitch = {
  ...fieldCheckbox
};

export const fieldFile = {
  ...formFieldPropTypes,
  removeLabel: PropTypes.node
};

export const fieldSelect = {
  ...formFieldPropTypes,
  ...selectableFieldPropTypes
};

export const fieldText = {
  ...formFieldPropTypes,
  cutExtraLength: PropTypes.bool,
  maxLength: PropTypes.number,
  negativeLength: PropTypes.bool,
  normalizer: PropTypes.func,
  type: PropTypes.oneOf(['text', 'password', 'number', 'date', 'email', 'textarea'])
};
