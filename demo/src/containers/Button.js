import React from 'react';
import { Button, ButtonGroup, Grid } from '../../../src';
import { moodKeys } from '../../../src/helpers/propTypes';

export default () => (
  <div>
    <Grid.Row multi>
      {
        moodKeys.map((mood, key) => (
          <Grid.Column key={key} xs={12} sm={12} md={6} xl={4} xxl={3}>
            <Button mood={mood} block>
              {mood}
            </Button>
          </Grid.Column>
        ))
      }
    </Grid.Row>

    <Grid.Row multi>
      {
        moodKeys.map((mood, key) => (
          <Grid.Column key={key} xs={12} sm={12} md={6} xl={4} xxl={3}>
            <Button mood={mood} block disabled loading>
              {mood}
            </Button>
          </Grid.Column>
        ))
      }
    </Grid.Row>

    <Grid.Row multi>
      {
        moodKeys.map((mood, key) => (
          <Grid.Column key={key} xs={12} sm={12} md={6} xl={4} xxl={3}>
            <Button mood={mood} block ghost>
              {mood}
            </Button>
          </Grid.Column>
        ))
      }
    </Grid.Row>

    <Grid.Row multi>
      {
        moodKeys.map((mood, key) => (
          <Grid.Column key={key} xs={12} sm={12} md={6} xl={4} xxl={3}>
            <Button mood={mood} block glass>
              {mood}
            </Button>
          </Grid.Column>
        ))
      }
    </Grid.Row>

    <Grid.Row multi>
      {
        moodKeys.map((mood, key) => (
          <Grid.Column key={key} xs={12} sm={12} md={6} xl={4} xxl={3}>
            <Button mood={mood} block ghost disabled>
              {mood}
            </Button>
          </Grid.Column>
        ))
      }
    </Grid.Row>

    <Grid.Row multi>
      {
        moodKeys.map((mood, key) => (
          <Grid.Column key={key} xs={12} sm={12} md={6} xl={4} xxl={3}>
            <Button mood={mood} block disableHoverStyles disablePressStyles>
              {mood}
            </Button>
          </Grid.Column>
        ))
      }
    </Grid.Row>

    <br />

    <ButtonGroup>
      <Button>Button</Button>
      <Button mood="error" wide>Button</Button>
      <Button mood="success" wide>Button</Button>
      <Button disabled>Button</Button>
      <Button ghost>Button</Button>
      <Button ghost disabled>Button</Button>
    </ButtonGroup>
  </div>
);
