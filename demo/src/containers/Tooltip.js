import React from 'react';
import { Button, ButtonGroup, Tooltip } from '../../../src';

const tooltipContent = 'This is a tooltip!';

export default () => (
  <div>
    <h2>Tooltip</h2>

    <ButtonGroup>
      <Tooltip trigger={true} placement="top" content={tooltipContent}>
        <Button size="xs">
          true/undefined
        </Button>
      </Tooltip>

      <Tooltip trigger="mouseOver" unTrigger="mouseOut" placement="top" content={tooltipContent}>
        <Button size="xs">
          mouseOver/mouseOut
        </Button>
      </Tooltip>

      <Tooltip trigger="mouseOver" unTrigger="clickOutside" placement="top" content={tooltipContent}>
        <Button size="xs">
          mouseOver/clickOutside
        </Button>
      </Tooltip>

      <Tooltip trigger="focus" unTrigger="blur" placement="top" content={tooltipContent}>
        <Button size="xs">
          focus/blur
        </Button>
      </Tooltip>

      <Tooltip trigger="focus" unTrigger="clickOutside" placement="top" content={tooltipContent}>
        <Button size="xs">
          focus/clickOutside
        </Button>
      </Tooltip>

      <Tooltip trigger="click" unTrigger="clickOutside" placement="top" content={tooltipContent}>
        <Button size="xs">
          click/clickOutside
        </Button>
      </Tooltip>

      <Tooltip trigger="click" unTrigger="click" placement="top" content={tooltipContent}>
        <Button size="xs">
          click/click
        </Button>
      </Tooltip>
    </ButtonGroup>
  </div>
);
