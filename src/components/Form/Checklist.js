import React, { Component, PropTypes, Children } from 'react';
import InputHead from './InputHead';
import InputFoot from './InputFoot';

export default class Checklist extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.node,
    popupHelp: PropTypes.node,
    help: PropTypes.node,
    required: PropTypes.bool,
    inline: PropTypes.bool,
    meta: PropTypes.object,
    children: PropTypes.any
  };

  static defaultProps = {
    className: '',
    required: false,
    inline: false
  };

  render() {
    const { className, label, help, popupHelp, required, inline, meta, children } = this.props;
    const errorClassName = meta && meta.touched && meta.error ? 'field-has-error' : '';
    const inlineClassName = inline ? 'checklist-inline' : '';
    const classNames = `form-field form-checklist ${className} ${inlineClassName} ${errorClassName}`;

    return (
      <div className={classNames}>
        <InputHead
          label={label}
          popupHelp={popupHelp}
          required={required}
          meta={meta}
        />

        <div className="checklist-items">
          { Children.map(children, child => child) }
        </div>

        <InputFoot help={help}/>
      </div>
    );
  }
}
