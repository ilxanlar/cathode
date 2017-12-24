import React from 'react';
import styled, { css } from 'styled-components';
import Popover from './Popover';

const tooltipCss = ({ theme }) => css`
  background-color: ${theme.colors.darkA};
  border-color: transparent;
  color: ${theme.colors.white};
  font-size: ${theme.tooltip.fontSize}px;
  padding: ${theme.tooltip.padding}px;

  &:after {
    background-color: ${theme.colors.darkA};
    border-bottom: 1px solid ${theme.colors.darkA};
    border-right: 1px solid ${theme.colors.darkA};
  }
`;

const Tooltip = styled(Popover)`
  ${tooltipCss}
`;

Tooltip.propTypes = {
  ...Popover.propTypes
};

Tooltip.defaultProps = {
  ...Popover.defaultProps,
  trigger: 'mouseOver'
};

export default Tooltip;