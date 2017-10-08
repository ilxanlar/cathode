export default {
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
