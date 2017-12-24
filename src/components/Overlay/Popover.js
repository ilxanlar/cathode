import React from 'react';
import styled, { css } from 'styled-components';
import Overlay from './Overlay';
import { popover as propTypes } from '../../helpers/propTypes';

const arrowDirectionCss = ({ placement, theme }) => {
  switch (placement) {
    case 'bottom':
      return css`
        bottom: 100%;
        left: 50%;
        margin-bottom: ${theme.popover.arrowMarginInside}px;
        margin-left: ${theme.popover.arrowMarginSide}px;
        transform: rotate(225deg);
      `;
    case 'left':
      return css`
        left: 100%;
        margin-left: ${theme.popover.arrowMarginInside}px;
        margin-top: ${theme.popover.arrowMarginSide}px;
        top: 50%;
        transform: rotate(315deg);
      `;
    case 'right':
      return css`
        margin-right: ${theme.popover.arrowMarginInside}px;
        margin-top: ${theme.popover.arrowMarginSide}px;
        right: 100%;
        top: 50%;
        transform: rotate(135deg);
      `;
    case 'top':
      return css`
        left: 50%;
        margin-left: ${theme.popover.arrowMarginSide}px;
        margin-top: ${theme.popover.arrowMarginInside}px;
        top: 100%;
        transform: rotate(45deg);
      `;
    default:
      return undefined;
  }
};

const arrowCss = ({ theme }) => css`
  background: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.lightB};
  border-right: 1px solid ${theme.colors.lightB};
  height: ${theme.popover.arrowSize}px;
  width: ${theme.popover.arrowSize}px;
`;

const contentCss = ({ placement, theme }) => css`
  animation: 0.1s ${theme.keyframes.fadeInDown};
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.lightB};
  border-radius: ${theme.common.radius}px;
  box-shadow: ${theme.common.shadow};
  color: ${theme.colors.text};
  font-size: ${theme.common.fontSize}px;
  line-height: ${theme.popover.lineHeight};
  padding: ${theme.popover.padding}px;
`;

const contentMarginCss = ({ placement, theme }) => {
  switch (placement) {
    case 'bottom':
      return `margin-top: ${theme.popover.margin}px;`;
    case 'left':
      return `margin-right: ${theme.popover.margin}px;`;
    case 'right':
      return `margin-left: ${theme.popover.margin}px;`;
    case 'top':
      return `margin-bottom: ${theme.popover.margin}px;`;
    default:
      return undefined;
  }
};

const Content = styled.div`
  ${contentCss}
  ${contentMarginCss}
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    transform: rotate(45deg);
    ${arrowCss}
    ${arrowDirectionCss}
  }
`;

const PopoverRaw = ({ className, content, children, gutter, gutterPx, ...props }) => (
  <Overlay
    content={content}
    contentWrapper={Content}
    contentWrapperProps={{ className }}
    gutter={gutter}
    gutterPx={gutterPx}
    {...props}
  >
    {children}
  </Overlay>
);

const Popover = styled(PopoverRaw)``;

Popover.propTypes = propTypes;

Popover.defaultProps = {
  trigger: 'click',
  placement: 'top',
  gutter: 'md'
};

export default Popover;