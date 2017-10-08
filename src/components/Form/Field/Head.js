import React from 'react';
import Icon from '../../Utility/Icon';
import Popover from '../../Overlay/Popover';
import Config from '../../Config';

export default ({ label, tip, required, meta }) => {
  const hasError = meta && meta.touched && meta.error;
  const hasWarning = meta && meta.touched && meta.warning;
  // @TODO: New required char: ⁕

  const labelMarkup = label ? (
    <label className="field-label">
      {label}
      {required ? <span className="field-required">*</span> : null}
    </label>
  ) : null;

  let errorMarkup;
  if (hasError) {
    if (Config.fieldErrorType === 'text') {
      errorMarkup = (
        <div className="field-error">
          {meta.error}
        </div>
      );
    } else if (Config.fieldErrorType === 'icon') {
      errorMarkup = (
        <Popover style="error" gutter="sm" trigger="hover" placement="right" content={meta.error}>
          <div className="field-error-icon" />
        </Popover>
      );
    }
  }

  let warningMarkup;
  if (!hasError) {
    if (hasWarning) {
      if (Config.fieldWarningType === 'text') {
        warningMarkup = (
          <div className="field-warning">
            {meta.warning}
          </div>
        );
      } else if (Config.fieldWarningType === 'icon') {
        warningMarkup = (
          <Popover style="warning" gutter="sm" trigger="hover" placement="right" content={meta.warning}>
            <div className="field-warning-icon" />
          </Popover>
        );
      }
    }
  }

  const tipMarkup = tip ? (
    <Popover trigger="hover" gutter="sm" content={tip}>
      <div className="field-tip">
        <Icon name={Config.formIcons.tip} />
      </div>
    </Popover>
  ) : null;

  if (labelMarkup || errorMarkup || tipMarkup) {
    return (
      <div className="field-head">
        {labelMarkup}
        {tipMarkup}
        {errorMarkup ? errorMarkup : null}
        {warningMarkup ? warningMarkup : null}
      </div>
    );
  }

  return null;
};
