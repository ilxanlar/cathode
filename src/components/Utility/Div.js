import React from 'react';

export default ({ children, ...otherProps }) => {
  return (
    <div {...otherProps}>
      {React.Children.map(children, child => child)}
    </div>
  );
};
