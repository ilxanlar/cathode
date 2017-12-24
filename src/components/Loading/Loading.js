import React from 'react';
import styled, { css } from 'styled-components';
import { loadingSpinner as spinnerPropTypes } from '../../helpers/propTypes';

const spinnerCss = ({ duration, mood, size, sizePx, theme, thickness, timing }) => css`
  animation-name: ${theme.keyframes.spin};
  animation-duration: ${duration}s;
  animation-timing-function: ${timing};
  border: ${thickness}px solid ${theme.moods[mood].original};
  height: ${sizePx > 0 ? sizePx : theme.fontSizes[size]}px;
  width: ${sizePx > 0 ? sizePx : theme.fontSizes[size]}px;
`;

const Spinner = styled.span`
  animation-iteration-count: infinite;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  ${spinnerCss}
  border-bottom-color: transparent;
  border-left-color: transparent;
`;

Spinner.propTypes = spinnerPropTypes;

Spinner.defaultProps = {
  duration: 0.5,
  mood: 'primary',
  size: 'md',
  thickness: 2,
  timing: 'linear'
};

export default { Spinner };