import React from 'react';
import { Button, Grid, Overlay } from '../../../src';

// const placements = ['top', 'right', 'bottom', 'left'];
// const aligns = ['top', 'center', 'bottom', 'left', 'right'];

const placements = {
  bottom: ['left', 'center', 'right'],
  left: ['bottom', 'center', 'top'],
  right: ['bottom', 'center', 'top'],
  top: ['left', 'center', 'right']
};

const states = [];
Object.keys(placements).forEach((placement) => placements[placement].forEach((align) => {
  states.push({ placement, align })
}));

const content = (
  <div style={{ backgroundColor: '#555', color: '#fff', lineHeight: 1 }}>
    O
  </div>
);

export default () => (
  <div>
    <br />
    <br />
    <Grid.Row multi>
      {
        states.map(({ placement, align }, key) => (
          <Grid.Column key={key} md={2} style={{ textAlign: 'center' }}>
            <Overlay content={content} placement={placement} align={align} trigger>
              <Button size="xs">
                {placement}-{align}
              </Button>
            </Overlay>
          </Grid.Column>
        ))
      }
    </Grid.Row>
    <br />
    <br />
  </div>
);
