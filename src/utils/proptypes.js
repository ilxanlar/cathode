import PropTypes from 'prop-types';

export const sizes = ['md', 'xxs', 'xs', 'sm', 'lg', 'xl', 'xxl'];
export const styles = ['default', 'info', 'success', 'error', 'warning'];

export const stylePropTypes = {
  style: PropTypes.oneOf(styles)
};

export const sizePropTypes = {
  size: PropTypes.oneOf(sizes)
};

export const componentIconPropTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ])
};

export const inputPropTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func
};

export const formFieldPropTypes = {
  containerClassName: PropTypes.string,
  label: PropTypes.node,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  tip: PropTypes.node,
  help: PropTypes.node,
  input: PropTypes.object,
  meta: PropTypes.object,
  disabled: PropTypes.bool,
  errorType: PropTypes.oneOf(['']),
  ...sizePropTypes
};

export const booleanFieldPropTypes = {
  description: PropTypes.node,
  customMarkup: PropTypes.node,
  onChange: PropTypes.func,
  onChangeFocus: PropTypes.func,
  disabled: PropTypes.bool,
  trueValue: PropTypes.any,
  falseValue: PropTypes.any,
  ...sizePropTypes
};

export const selectableFieldPropTypes = {
  options: PropTypes.array,
  optionValue: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  optionLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  optionDisabled: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  optionsWrapperComponent: PropTypes.func,
  optionComponent: PropTypes.func
};

export const overlayProps = {
  content: PropTypes.node.isRequired,
  contentWidth: PropTypes.oneOf(['auto', 'parent']),
  trigger: PropTypes.oneOf([true, false, 'hover', 'focus', 'click']),
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  align: PropTypes.oneOf(['top', 'center', 'bottom', 'left', 'right']),
  gutter: PropTypes.number
};
