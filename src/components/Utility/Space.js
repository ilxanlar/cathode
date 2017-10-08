import React from 'react';

export default ({ children, size } = { size: 'md' }) => (
  <div className={`add-space size-${size}`}>
    {React.Children.map(children, child => child)}
  </div>
);
