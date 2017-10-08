import React from 'react';
import InputHead from './Head';
import InputBody from './Body';
import InputFoot from './Foot';
import Popover from '../../Overlay/Popover';
import classNames from '../../../utils/classname';

export default (props) => {
  const { fieldType, fieldIsBox, containerClassName, size, label, help, tip, required, disabled, meta, children } = props;
  const className = classNames([
    `form-field`,
    fieldIsBox ? 'field-box' : '',
    `form-${fieldType}`,
    `field-${disabled ? 'disabled' : 'enabled'}`,
    `field-size-${size}`,
    containerClassName,
    meta && meta.touched && meta.error ? 'field-has-error' : '',
    meta && meta.touched && meta.warning ? 'field-has-warning' : ''
  ]);

  let body = (
    <InputBody meta={meta}>
      {children}
    </InputBody>
  );

  if (!label && tip) {
    body = (
      <Popover align="right" trigger="hover" gutter="sm" content={tip}>
        {body}
      </Popover>
    );
  }

  return (
    <div className={className}>
      <InputHead
        meta={meta}
        label={label}
        tip={label ? tip : undefined}
        required={required}
      />

      {body}

      <InputFoot help={help} />
    </div>
  );
};
