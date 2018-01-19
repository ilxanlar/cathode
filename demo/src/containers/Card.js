import React from 'react';
import { Button, Card, Grid } from '../../../src';

export default () => (
  <div>
    <h2>Card</h2>

    <Grid.Row gutter="md" multi>
      <Grid.Column sm={8}>
        <Card>
          <Card.Cover>
            <img src="/img/sample-cover.jpg" alt="" />
          </Card.Cover>

          <Card.Content>
            <strong>Card Title</strong>
            <br />
            <p>
              Even though real hovering isn’t possible on most touchscreens.
            </p>

            <Button mood="primary">Discover Now</Button>
          </Card.Content>
        </Card>
      </Grid.Column>

      <Grid.Column sm={8}>
        <Card loading blockOnLoading>
          <Card.Cover>
            <img src="/img/sample-cover.jpg" alt="" />
          </Card.Cover>

          <Card.Content>
            <strong>Card Title</strong>
            <br />
            <p>
              Even though real hovering isn’t possible on most touchscreens.
            </p>

            <Button mood="primary">Discover Now</Button>
          </Card.Content>
        </Card>
      </Grid.Column>

      <Grid.Column sm={8}>
        <Card disabled>
          <Card.Cover>
            <img src="/img/sample-cover.jpg" alt="" />
          </Card.Cover>

          <Card.Content>
            <strong>Card Title</strong>
            <br />
            <p>
              Even though real hovering isn’t possible on most touchscreens.
            </p>

            <Button mood="primary">Discover Now</Button>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  </div>
);
