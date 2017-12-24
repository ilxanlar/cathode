import styled, { css } from 'styled-components';
import { getScreenProp, hasScreenProp } from '../../helpers/utils';
import { column as columnPropTypes, row as rowPropTypes } from '../../helpers/propTypes';
import mediaQuery from '../../config/mediaQuery';

const columnCss = screenName => props => {
  const hasSize = typeof props[screenName] !== 'undefined';

  return css`
    ${hasSize ? `flex-basis: ${100 * props[screenName] / props.theme.grid.maxColumns}%;` : undefined}
    ${hasSize ? `max-width: ${100 * props[screenName] / props.theme.grid.maxColumns}%;` : undefined}
    ${hasScreenProp(screenName, 'order', props) ? `order: ${getScreenProp(screenName, 'order', props)};` : undefined}
  `;
};

export const Column = styled.div`
  flex-basis: 100%;
  order: 9999;
  ${mediaQuery.xxs`${columnCss('xxs')}`}
  ${mediaQuery.xs`${columnCss('xs')}`}
  ${mediaQuery.sm`${columnCss('sm')}`}
  ${mediaQuery.md`${columnCss('md')}`}
  ${mediaQuery.lg`${columnCss('lg')}`}
  ${mediaQuery.xl`${columnCss('xl')}`}
  ${mediaQuery.xxl`${columnCss('xxl')}`}
`;

const rowColumnCss = screenName => props => {
  const hasGutterProp = hasScreenProp(screenName, 'gutter', props);

  if (hasGutterProp) {
    const theGutter = props.theme.gutters[getScreenProp(screenName, 'gutter', props)];

    return css`
      margin-left: ${-1 * theGutter}px;
      margin-right: ${-1 * theGutter}px;

      > ${Column} {
        padding-left: ${theGutter}px;
        padding-right: ${theGutter}px;
        ${props.multi ? `padding-bottom: ${2 * theGutter}px;` : undefined}
      }
    `;
  }

  return undefined;
};

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${mediaQuery.xxs`${rowColumnCss('xxs')}`}
  ${mediaQuery.xs`${rowColumnCss('xs')}`}
  ${mediaQuery.sm`${rowColumnCss('sm')}`}
  ${mediaQuery.md`${rowColumnCss('md')}`}
  ${mediaQuery.lg`${rowColumnCss('lg')}`}
  ${mediaQuery.xl`${rowColumnCss('xl')}`}
  ${mediaQuery.xxl`${rowColumnCss('xxl')}`}
`;

Row.propTypes = rowPropTypes;

Row.defaultProps = {
  gutterXxs: 'md'
};

Column.propTypes = columnPropTypes;

export default {
  Row,
  Column
};