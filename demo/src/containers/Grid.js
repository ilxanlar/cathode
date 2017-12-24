import React from 'react';
import styled from 'styled-components';
import { Card, Grid } from '../../../src';

const CardNumber = styled.div`
  font-size: 40px;
  text-align: center;
`;

export default () => (
  <div>
    <h2>Grid</h2>

    <Grid.Row gutterXl="xxl" multi>
      <Grid.Column sm={12} md={6} xl={4}>
        <Card>
          <Card.Content>
            <CardNumber>1</CardNumber>
          </Card.Content>
        </Card>
      </Grid.Column>

      <Grid.Column sm={12} md={6} xl={8} orderXl={1}>
        <Card>
          <Card.Content>
            <CardNumber>2</CardNumber>
          </Card.Content>
        </Card>
      </Grid.Column>

      <Grid.Column sm={12} md={6} xl={6}>
        <Card>
          <Card.Content>
            <CardNumber>3</CardNumber>
          </Card.Content>
        </Card>
      </Grid.Column>

      <Grid.Column sm={12} md={6} xl={6}>
        <Card>
          <Card.Content>
            <CardNumber>4</CardNumber>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  </div>
);
