import React from 'react';
import { Button, message } from '../../../src';

const showMessage = () => {
  message.error('An error occurred!', 'Please check you input data and try again.');
};

export default () => (
  <div>
    <h2>Message</h2>

    <Button onClick={showMessage}>Show</Button>
  </div>
);
