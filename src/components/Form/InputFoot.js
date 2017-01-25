import React from 'react';

export default ({ help }) => {
  const helpMarkup = help ? (
    <div className="help">
      { help }
    </div>
  ) : null;

  if (helpMarkup) {
    return (
      <div className="input-foot">
        { helpMarkup }
      </div>
    );
  }

  return null;
};
