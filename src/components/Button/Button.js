import React from 'react';
import styled, { css } from 'styled-components';
import { button as propTypes } from '../../helpers/propTypes';

const getSizeData = key => props => props.theme.button.size[props.size][key];
const getMoodData = key => props => props.theme.moods[props.mood][key];
const getPaddingV = props => props.theme.button.size[props.size].paddingV;
const getPaddingH = props => (props.wide ? 2 : 1) * props.theme.button.size[props.size].paddingH;
const borderColor = props => !props.ghost || (props.ghost && props.glass) ? 'transparent' : getMoodData('buttonBgColor');

const hoverCss = props => css`
  &:hover, &:focus {
    background-color: ${getMoodData('buttonBgColorHovered')(props)};
    ${props.ghost ? 'border-color: transparent;' : undefined}
    color: ${getMoodData('buttonTextColor')(props)};
  }
`;

const pressCss = props => css`
  &:active {
    background-color: ${getMoodData('buttonBgColorPressed')(props)};
    ${props.ghost ? 'border-color: transparent;' : undefined}
    color: ${getMoodData('buttonTextColor')(props)};
  }
`;

const disabledCss = props => css`
  &[disabled] {
    background-color: ${getMoodData('buttonBgColorDisabled')(props)};
    border-color: transparent;
    color: ${getMoodData('buttonTextColorDisabled')(props)};
    cursor: not-allowed;
  }
`;

const Button = styled.button`
  background-color: ${props => props.ghost || props.glass ? 'transparent' : getMoodData('buttonBgColor')};
  border: 1px solid ${borderColor};
  border-radius: ${getSizeData('radius')}px;
  color: ${props => props.ghost || props.glass ? getMoodData('buttonTextColorGhost') : getMoodData('buttonTextColor')};
  display: ${props => props.block ? 'block' : 'inline-block'};
  font-size: ${getSizeData('fontSize')}px;
  font-weight: ${props => props.theme.button.fontWeight};
  line-height: ${getSizeData('lineHeight')};
  padding: ${getPaddingV}px ${getPaddingH}px;
  position: relative;
  text-align: center;
  transition: ${props => props.theme.common.transitionAll};
  vertical-align: middle;
  ${props => props.loading ? `animation: 2s ${props.theme.keyframes.buttonLoading} infinite;` : undefined}
  ${props => props.disableHoverStyles ? undefined : 'cursor: pointer;'}
  ${props => props.block ? 'width: 100%;' : undefined}
  ${props => props.disableHoverStyles ? undefined : hoverCss(props)}
  ${props => props.disablePressStyles ? undefined : pressCss(props)}
  ${props => props.disabled ? disabledCss(props) : undefined}
`;

Button.propTypes = propTypes;

Button.defaultProps = {
  type: 'button',
  size: 'md',
  mood: 'primary'
};

export default Button;