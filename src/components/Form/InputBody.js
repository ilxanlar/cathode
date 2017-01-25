import React from 'react';

export default ({ meta, children }) => (
  <div className="input-body">
    { children }

    {
      meta && meta.touched && meta.error ?
        <div className="error">
          { meta.error }
        </div> : null
    }
  </div>
);
