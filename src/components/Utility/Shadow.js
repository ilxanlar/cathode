import React from 'react';

export default ({ children, size } = { size: 'md' }) => (
  <div className={`add-shadow size-${size}`}>
    {React.Children.map(children, child => child)}
  </div>
);
