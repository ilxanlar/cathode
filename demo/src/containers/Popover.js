import React from 'react';
import { Button, ButtonGroup, Popover } from '../../../src';

const tooltipContent = 'This is a popover!';

export default () => (
  <div>
    <h2>Popover</h2>

    <ButtonGroup>
      <Popover trigger={true} placement="top" content={tooltipContent}>
        <Button size="xs">
          true/undefined
        </Button>
      </Popover>

      <Popover trigger="mouseOver" unTrigger="mouseOut" placement="top" content={tooltipContent}>
        <Button size="xs">
          mouseOver/mouseOut
        </Button>
      </Popover>

      <Popover trigger="mouseOver" unTrigger="clickOutside" placement="top" content={tooltipContent}>
        <Button size="xs">
          mouseOver/clickOutside
        </Button>
      </Popover>

      <Popover trigger="focus" unTrigger="blur" placement="top" content={tooltipContent}>
        <Button size="xs">
          focus/blur
        </Button>
      </Popover>

      <Popover trigger="focus" unTrigger="clickOutside" placement="top" content={tooltipContent}>
        <Button size="xs">
          focus/clickOutside
        </Button>
      </Popover>

      <Popover trigger="click" unTrigger="clickOutside" placement="top" content={tooltipContent}>
        <Button size="xs">
          click/clickOutside
        </Button>
      </Popover>

      <Popover trigger="click" unTrigger="click" placement="top" content={tooltipContent}>
        <Button size="xs">
          click/click
        </Button>
      </Popover>
    </ButtonGroup>
  </div>
);
