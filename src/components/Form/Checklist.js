import React from 'react';
import styled from 'styled-components';
import Grid from '../Layout/Grid';
import { checklist as propTypes } from '../../helpers/propTypes';

const ChecklistRaw = ({ children, gridColumnProps, gridRowProps }) => (
  <Grid.Row {...gridRowProps}>
    {
      React.Children.map(children, child => (
        <Grid.Column {...gridColumnProps}>
          {child}
        </Grid.Column>
      ))
    }
  </Grid.Row>
);

const Checklist = styled(ChecklistRaw)``;

Checklist.propTypes = propTypes;

Checklist.defaultProps = {
  gridColumnProps: {
    xxs: 24,
    md: 12,
    lg: 8,
    xl: 6
  },
  gridRowProps: {}
};

export default Checklist;