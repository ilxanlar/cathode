export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const hasScreenProp = (screenName, propName, props) => typeof props[`${propName}${capitalize(screenName)}`] !== 'undefined';

export const getScreenProp = (screenName, propName, props) => props[`${propName}${capitalize(screenName)}`];

export const selectableHelper = {
  value(option, optionValue) {
    return typeof optionValue === 'string' ? option[optionValue] : optionValue(option);
  },

  label(option, optionLabel) {
    return typeof optionLabel === 'string' ? option[optionLabel] : optionLabel(option);
  },

  disabled(option, optionDisabled) {
    if (optionDisabled) {
      return typeof optionDisabled === 'string' ? option[optionDisabled] : optionDisabled(option);
    } else {
      return false;
    }
  }
};

export function offset(element) {
  const { height, width } = element.getBoundingClientRect();

  let top = 0;
  let left = 0;

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top,
    left,
    height,
    width
  };
}
