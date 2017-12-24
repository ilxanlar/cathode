import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ButtonGroup = styled.div`
  overflow: auto;
  white-space: nowrap;

  ${Button} {
    margin-${props => props.theme.isRTL ? 'left' : 'right'}: ${props => props.theme.buttonGroup.margin}px;

    &:last-child {
      margin-${props => props.theme.isRTL ? 'left' : 'right'}: 0;
    }

    &:nth-child(n+2):nth-last-child(n+2) {
      border-radius: 0;
    }

    &:first-child:not(:last-child) {
      border-bottom-${props => props.theme.isRTL ? 'left' : 'right'}-radius: 0;
      border-top-${props => props.theme.isRTL ? 'left' : 'right'}-radius: 0;
    }

    &:last-child:not(:first-child) {
      border-bottom-${props => props.theme.isRTL ? 'right' : 'left'}-radius: 0;
      border-top-${props => props.theme.isRTL ? 'right' : 'left'}-radius: 0;
    }
  }
`;

export default ButtonGroup;