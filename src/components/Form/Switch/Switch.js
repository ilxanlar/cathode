import React from 'react';
import Field from '../Field';
import PropProvider from '../FieldPropProvider';
import SwitchOnly from './SwitchOnly';
import { fieldSwitch as propTypes } from '../../../helpers/propTypes';

class SwitchRaw extends React.Component {
  handleChange = (value) => {
    const { input } = this.props;

    if (input && input.onChange) {
      input.onChange(value);
    }
  };

  render() {
    const { size, description, trueValue, falseValue, input, disabled } = this.props;
    const switchValue = input ? input.value : undefined;

    return (
      <Field {...this.props} fieldType="switch">
        <SwitchOnly
          description={description}
          disabled={disabled}
          falseValue={falseValue}
          onChange={this.handleChange}
          size={size}
          trueValue={trueValue}
          value={switchValue}
        />
      </Field>
    );
  }
}

const Switch = PropProvider.withComponent(SwitchRaw);

Switch.propTypes = propTypes;

Switch.defaultProps = {
  size: 'md'
};

export default Switch;