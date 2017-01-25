import React from 'react';
import Icon from '../Kit/Icon';

export default ({ label, popupHelp, required, meta }) => {
  const hasError = meta && meta.touched && meta.error;

  const labelMarkup = label ? (
    <label>
      { label }
      { required ? <span className="required">*</span> : null }
    </label>
  ) : null;

  const errorMarkup = hasError ? (
    <div className="error">
      { meta.error }
    </div>
  ) : null;

  const popupHelpMarkup = popupHelp ? (
    <div className="popup-help">
      <a className="popup-help-icon">
        <Icon name="info-circle"/>
      </a>
      <div className="popup-help-content">
        { popupHelp }
      </div>
    </div>
  ) : null;

  if (labelMarkup || errorMarkup || popupHelpMarkup) {
    return (
      <div className="input-head">
        { labelMarkup }
        { errorMarkup }
        { popupHelpMarkup }
      </div>
    );
  }

  return null;
};
