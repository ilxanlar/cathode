import React from 'react';
import { Button, Cell, Cells, Tooltip } from '../../../src';

const triggers = ['hover', 'focus', 'click']; // excluded `always`
const placements = ['left', 'top', 'bottom', 'right'];
const tooltipContent = (
  <div>
    This is a tooltip
  </div>
);

export default () => (
  <div>
    <h2>Tooltip</h2>

    {
      triggers.map((trigger, tKey) => (
        <Cells gutter="xs" multiCell>
          {
            placements.map((placement, pKey) => (
              <Cell key={`${tKey}-${pKey}`} xs={6}>
                <Tooltip trigger={trigger} placement={placement} content={tooltipContent}>
                  <Button block>
                    { trigger } - { placement }
                  </Button>
                </Tooltip>
              </Cell>
            ))
          }
        </Cells>
      ))
    }
  </div>
);
