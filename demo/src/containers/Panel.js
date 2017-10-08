import React from 'react';
import { Button, Card, Cell, Cells } from '../../../src';

export default () => (
  <div>
    <h2>Card</h2>

    <Cells gutter="md" multiCell>
      <Cell sm={24}>
        <Card>
          <Card.Content>
            <p>
              “Michael Jackson knew he always had to create. If he didn’t act, nature would give inspiration to someone
              else.” – Vishen Lakhiani, The Code of the Extraordinary Mind
            </p>

            <br/>

            <Cells gutter="xs">
              <Cell>
                <Button style="primary">Discover Now</Button>
              </Cell>

              <Cell>
                <Button style="secondary" ghost>Later</Button>
              </Cell>
            </Cells>
          </Card.Content>
        </Card>
      </Cell>

      <Cell sm={12}>
        <Card>
          <Card.Cover>
            <img src="/img/sample-cover.jpg" alt=""/>
          </Card.Cover>

          <Card.Content>
            <strong>Card Title</strong>
            <br/>
            <p>
              Even though real hovering isn’t possible on most touchscreens.
            </p>

            <Cells gutter="xs">
              <Cell>
                <Button style="primary">Discover Now</Button>
              </Cell>

              <Cell>
                <Button style="secondary" ghost>Later</Button>
              </Cell>
            </Cells>
          </Card.Content>
        </Card>
      </Cell>

      <Cell sm={12}>
        <Card>
          <Card.Cover>
            <img src="/img/sample-cover.jpg" alt=""/>
          </Card.Cover>

          <Card.Content>
            <strong>Card Title</strong>
            <br/>
            <p>
              Even though real hovering isn’t possible on most touchscreens.
            </p>

            <Cells gutter="xs">
              <Cell>
                <Button style="primary">Discover Now</Button>
              </Cell>

              <Cell>
                <Button style="secondary" ghost>Later</Button>
              </Cell>
            </Cells>
          </Card.Content>
        </Card>
      </Cell>
    </Cells>
  </div>
);
