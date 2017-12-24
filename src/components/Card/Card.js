import React from 'react';
import styled, { css } from 'styled-components';
import { getScreenProp, hasScreenProp } from '../../helpers/utils';
import { card as propTypes } from '../../helpers/propTypes';
import mediaQuery from '../../config/mediaQuery';

const styles = {
  bgColor: props => props.theme.colors.white,
  border: props => props.border ? `1px solid ${props.theme.colors.lightB};` : 'none',
  borderRadius: props => `${props.theme.common.radius}px`,
  transition: props => props.theme.common.transitionAll,
  padding: screenName => props => hasScreenProp(screenName, 'padding', props) ? `padding: ${2 * props.theme.spaces[getScreenProp(screenName, 'padding', props)]}px;` : undefined
};

const blockerCss = css`
  &:after {
    bottom: 0;
    content: '';
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const Cover = styled.div`
  img {
    border-radius: ${styles.borderRadius} ${styles.borderRadius} 0 0;
    display: block;
    height: auto;
    width: 100%;
  }
`;

const Content = styled.div``;

const Card = styled.div`
  background: ${styles.bgColor};
  border: ${styles.border};
  border-radius: ${styles.borderRadius};
  position: relative;
  transition: ${styles.transition};

  // Loading and Disabled
  ${props => props.loading ? `opacity: ${props.theme.common.opacityLoading};` : undefined}
  ${props => props.disabled ? `opacity: ${props.theme.common.opacityDisabled};` : undefined}
  ${props => props.disabled ? `filter: ${props.theme.common.filterDisabled};` : undefined}
  ${props => (props.loading && props.blockOnLoading) || props.disabled ? blockerCss : undefined}

  ${Content} {
    ${mediaQuery.xxs`${styles.padding('xxs')}`}
    ${mediaQuery.xs`${styles.padding('xs')}`}
    ${mediaQuery.sm`${styles.padding('sm')}`}
    ${mediaQuery.md`${styles.padding('md')}`}
    ${mediaQuery.lg`${styles.padding('lg')}`}
    ${mediaQuery.xl`${styles.padding('xl')}`}
    ${mediaQuery.xxl`${styles.padding('xxl')}`}
  }
`;

Card.propTypes = propTypes;

Card.defaultProps = {
  paddingXxs: 'md',
  border: true,
  loading: false,
  blockOnLoading: true,
  disabled: false
};

Card.Cover = Cover;
Card.Content = Content;

export default Card;