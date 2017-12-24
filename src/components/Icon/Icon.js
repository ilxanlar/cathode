import React from 'react';
import styled from 'styled-components';
import { icon as propTypes } from '../../helpers/propTypes';

const defaultIcons = {
  close: 'close',
  info: 'info-circled',
  success: 'ok-circled',
  warning: 'attention',
  error: 'attention',
  help: 'help-circled',
  angleDown: 'angle-down',
  file: 'upload'
};

const IconRaw = ({ className, name, nameDefault }) => {
  const iconName = name || defaultIcons[nameDefault];

  if (typeof iconName === 'string') {
    return (<i className={`icon icon-${iconName} ${className}`} />);
  }

  return iconName || null;
}

const Icon = styled(IconRaw)`
  &:after, &:before {
    font-size: ${({ size, theme }) => size ? `${theme.fontSizes[size]}px` : 'inherit'};
    margin-left: 0.1em;
    margin-right: 0.1em;
    width: auto;
  }
`;

Icon.defaults = defaultIcons;

Icon.propTypes = propTypes;

export default Icon;