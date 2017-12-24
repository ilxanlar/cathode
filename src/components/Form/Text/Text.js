import React from 'react';
import styled from 'styled-components';
import Field from '../Field';
import { TextareaInput, TextInput } from '../FieldBox';
import PropProvider from '../FieldPropProvider';
import { fieldText as propTypes } from '../../../helpers/propTypes';

const LengthRaw = ({ className, lengthPreviewNormalizer, max, remaining }) => (
  <span className={className}>
    {
      lengthPreviewNormalizer ?
        lengthPreviewNormalizer(remaining, max) : `${remaining} / ${max}`
    }
  </span>
);

const Length = styled(LengthRaw)``;

class TextRaw extends React.Component {
  handleChange = (event) => {
    const { cutExtraLength, input, maxLength, normalizer } = this.props;

    let value = event.target.value;
    value = normalizer ? normalizer(value) : value;

    if (cutExtraLength && maxLength > 0) {
      value = value.substring(0, maxLength);
    }

    if (input && input.onChange) {
      input.onChange(value);
    }
  };

  render() {
    const { disabled, hasError, hasWarning, input, lengthPreviewNormalizer, maxLength, negativeLength, placeholder, size, type } = this.props;
    const value = input && typeof input.value !== 'undefined' ? input.value : '';
    const inputProps = {
      ...input,
      disabled,
      hasError,
      hasWarning,
      onChange: this.handleChange,
      placeholder,
      size,
      value
    };

    let fieldStatus;
    if (maxLength > 0) {
      let remainingLength = maxLength - value.length;

      if (!negativeLength && remainingLength < 0) {
        remainingLength = 0;
      }

      fieldStatus = maxLength > 0 ? (
        <Field.Head.Status>
          <Length
            lengthPreviewNormalizer={lengthPreviewNormalizer}
            max={maxLength}
            remaining={remainingLength}
          />
        </Field.Head.Status>
      ) : null;
    }

    return (
      <Field status={fieldStatus} {...this.props} fieldType="text" fieldIsBox>
        {
          type === 'textarea' ?
            <TextareaInput {...inputProps} /> :
            <TextInput type={type} {...inputProps} />
        }
      </Field>
    );
  };
}

const Text = PropProvider.withComponent(TextRaw);

Text.propTypes = propTypes;

Text.defaultProps = {
  size: 'md',
  type: 'text'
};

export default Text;