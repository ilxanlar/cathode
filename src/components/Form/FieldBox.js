import React from 'react';
import styled, { css } from 'styled-components';

const inputEnabledNormalCss = ({ theme }) => css`
  &:hover {
    border-color: ${theme.fieldBox.borderColorHovered};
  }

  &:focus {
    border-color: ${theme.fieldBox.borderColorFocused};
  }
`;

const inputEnabledFocusedCss = ({ isFocused, theme }) => css`
  ${isFocused ? `border-color: ${theme.fieldBox.borderColorFocused};` : undefined}
`;

const inputDisabledCss = ({ theme }) => css`
  cursor: not-allowed;
  opacity: ${theme.common.opacityDisabled};

  &, &:hover, &:focus {
    border-color: ${theme.fieldBox.borderColor};
  }
`;

const inputErrorCss = ({ theme }) => css`
  &, &:hover, &:focus {
    border-color: ${theme.fieldBox.borderColorError};
  }
`;

const inputCss = ({ disabled, size, theme }) => css`
  background: ${disabled ? theme.fieldBox.bgColorDisabled : theme.colors.white};
  border: 1px solid ${theme.fieldBox.borderColor};
  border-radius: ${theme.button.size[size].radius}px;
  font-size: ${theme.button.size[size].fontSize}px;
  line-height: ${theme.button.size[size].lineHeight};
  padding: ${theme.button.size[size].paddingV}px ${theme.button.size[size].paddingH}px;
  transition: ${theme.common.transitionAll};
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  ${inputCss}
  ${props => props.isFocused ? inputEnabledFocusedCss(props) : inputEnabledNormalCss(props)}
  ${props => props.disabled ? inputDisabledCss(props) : undefined}
  ${props => !props.disabled && props.hasError ? inputErrorCss(props) : undefined}
`;

export const TextInput = Input;

export const TextareaInput = Input.withComponent('textarea').extend`
  max-width: 100%;
  min-width: 100%;
`;

export const SelectInput = Input.withComponent('select').extend`
  min-height: ${props => (props.theme.button.size[props.size].fontSize * props.theme.button.size[props.size].lineHeight) + (2 * props.theme.button.size[props.size].paddingV) + 2}px;
`;

export const FileButton = Input.withComponent('span').extend`
  cursor: pointer;
  display: block;

  &:hover {
    border-color: ${props => props.theme.fieldBox.borderColorHovered};
  }
`;

export const FileInput = styled.input.attrs({ type: 'file', value: '' })`
  filter: alpha(opacity=0);
  opacity: 0;
  position: absolute;
  z-index: -1;

  &:focus + ${FileButton}, &:active + ${FileButton} {
    border-color: ${props => props.theme.fieldBox.borderColorFocused};
  }
`;
