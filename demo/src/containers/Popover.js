import React from 'react';
import { Button, Cell, Cells, Popover } from '../../../src';

const triggers = ['hover', 'focus', 'click']; // excluded `always`
const placements = ['left', 'top', 'bottom', 'right'];
const tooltipContent = (
  <div>
    This is a Popover
  </div>
);

export default () => (
  <div>
    <h2>Popover</h2>

    {
      triggers.map((trigger, tKey) => (
        <Cells gutter="xs" multiCell>
          {
            placements.map((placement, pKey) => (
              <Cell key={`${tKey}-${pKey}`} xs={6}>
                <Popover gutter="sm" trigger={trigger} placement={placement} content={tooltipContent}>
                  <Button block>
                    { trigger } - { placement }
                  </Button>
                </Popover>
              </Cell>
            ))
          }
        </Cells>
      ))
    }
  </div>
);
