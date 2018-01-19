import React from 'react';
import { Tabs } from '../../../src';

const triggers = ['mouseOver', 'focus', 'click']; // excluded `always`
const placements = ['left', 'top', 'bottom', 'right'];
const tooltipContent = (
  <div>
    This is a Tooltip
  </div>
);

export default () => (
  <div>
    <h2>Tab</h2>

    <Tabs cardProps={{  }}>
      <Tabs.Tab label="Tab one">
        In 1989, the US government decided to concentrate our most sensitive data in the hands of three giant finance
        corporations: Experian, TransUnion, and Equifax. These three corporations now store our biographic information,
        every address we’ve ever lived at, and every major financial transaction we’ve ever made — all so they can
        assign us a FICO credit score.
      </Tabs.Tab>

      <Tabs.Tab label="Tab two">
        In 1989, the US government decided to concentrate our most sensitive data in the hands of three giant finance
        corporations: Experian, TransUnion, and Equifax. These three corporations now store our biographic information,
        every address we’ve ever lived at, and every major financial transaction we’ve ever made — all so they can
        assign us a FICO credit score.
        In 1989, the US government decided to concentrate our most sensitive data in the hands of three giant finance
        corporations: Experian, TransUnion, and Equifax. These three corporations now store our biographic information,
        every address we’ve ever lived at, and every major financial transaction we’ve ever made — all so they can
        assign us a FICO credit score.
      </Tabs.Tab>

      <Tabs.Tab label="Tab three">
        In 1989, the US government decided to concentrate our most sensitive data in the hands of three giant finance
        corporations: Experian, TransUnion, and Equifax. These three corporations now store our biographic information,
        every address we’ve ever lived at, and every major financial transaction we’ve ever made — all so they can
        assign us a FICO credit score.
        In 1989, the US government decided to concentrate our most sensitive data in the hands of three giant finance
        corporations: Experian, TransUnion, and Equifax. These three corporations now store our biographic information,
        every address we’ve ever lived at, and every major financial transaction we’ve ever made — all so they can
        assign us a FICO credit score.
        In 1989, the US government decided to concentrate our most sensitive data in the hands of three giant finance
        corporations: Experian, TransUnion, and Equifax. These three corporations now store our biographic information,
        every address we’ve ever lived at, and every major financial transaction we’ve ever made — all so they can
        assign us a FICO credit score.
      </Tabs.Tab>
    </Tabs>
  </div>
);
