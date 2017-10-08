import React from 'react';
import { Cell, Cells } from 'index';
import './Options.scss';

export const OptionsComponent = ({ children }) => (
  <div className="custom-options-wrapper">
    <Cells gutter="xxs" multiCell>
      {
        React.Children.map(children, child => (
          <Cell size={8} containerClassName="custom-option-wrapper">
            { child }
          </Cell>
        ))
      }
    </Cells>
  </div>
);

export const OptionComponent = ({ option, value, disabled, selected }) => (
  <div className={`option-inside ${selected ? 'selected' : ''}`}>
    <img src={`/img/${option.id}.jpg`}/>

    <span className="option-text">
      { option.name }
      <br/>
      <code>https://google.com</code>
    </span>
  </div>
);
