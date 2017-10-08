import React from 'react';

export default ({ containerClassName, inline, children }) => {
  let classNames = 'checklist-container';

  if (containerClassName) {
    classNames = `${classNames} ${containerClassName}`;
  }

  if (inline) {
    classNames = `${classNames} checklist-inline`;
  }

  return (
    <div className={classNames}>
      {
        React.Children.map(children, child => (
          <div className="checklist-item">
            {child}
          </div>
        ))
      }
    </div>
  );
};
