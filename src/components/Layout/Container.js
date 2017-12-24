import styled, { css } from 'styled-components';
import { getScreenProp, hasScreenProp } from '../../helpers/utils';
import { container as propTypes } from '../../helpers/propTypes';
import mediaQuery from '../../config/mediaQuery';

const normalCss = screenName => props => {
  if (hasScreenProp(screenName, 'padding', props)) {
    const value = 2 * props.theme.spaces[getScreenProp(screenName, 'padding', props)];

    return css`
      padding-left: ${value}px;
      padding-right: ${value}px;
    `;
  }
};

const fixedWidthCss = css`
  margin-left: auto;
  margin-right: auto;
  ${props => props.skipXs ? undefined : mediaQuery.xs`width: ${mediaQuery.widths.xs}px;`}
  ${props => props.skipSm ? undefined : mediaQuery.sm`width: ${mediaQuery.widths.sm}px;`}
  ${props => props.skipMd ? undefined : mediaQuery.md`width: ${mediaQuery.widths.md}px;`}
  ${props => props.skipLg ? undefined : mediaQuery.lg`width: ${mediaQuery.widths.lg}px;`}
  ${props => props.skipXl ? undefined : mediaQuery.xl`width: ${mediaQuery.widths.xl}px;`}
  ${props => props.skipXxl ? undefined : mediaQuery.xxl`width: ${mediaQuery.widths.xxl}px;`}
`;

const Container = styled.div`
  ${mediaQuery.xxs`${normalCss('xxs')}`}
  ${mediaQuery.xs`${normalCss('xs')}`}
  ${mediaQuery.sm`${normalCss('sm')}`}
  ${mediaQuery.md`${normalCss('md')}`}
  ${mediaQuery.lg`${normalCss('lg')}`}
  ${mediaQuery.xl`${normalCss('xl')}`}
  ${mediaQuery.xxl`${normalCss('xxl')}`}
  ${props => props.fluid ? undefined : fixedWidthCss}
`;

Container.propTypes = propTypes;

Container.defaultProps = {
  fluid: false,
  paddingXxs: 'none'
};

export default Container;