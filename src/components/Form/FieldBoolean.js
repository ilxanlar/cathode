import React from 'react';
import styled, { css } from 'styled-components';
import { fieldBoolean as propTypes, fieldBooleanTrigger as triggerPropTypes } from '../../helpers/propTypes';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  filter: alpha(opacity=0);
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

const getTypeSizeData = name => ({ fieldType, size, theme }) => theme.fieldBoolean.size[size][fieldType][name];
const getMoodData = name => ({ mood, theme }) => theme.moods[mood][name];

const TriggerActiveness = styled.span`
  display: block;
`;

const Description = styled.div`
  display: inline;
  margin-${props => props.theme.isRTL ? 'right' : 'left'}: 5px;
  vertical-align: middle;
`;

const TriggerContainer = styled.span`
  background-color: #fff;
  border: 1px solid ${props => props.theme.fieldBoolean.borderColor};
  ${props => props.isSelected ? `border-color: ${getMoodData('original')(props)};` : undefined}
  display: inline-block;
  position: relative;
  transition: all 0.2s ease;
  vertical-align: middle;

  ${TriggerActiveness} {
    content: '';
    transition: all 0.2s ease;
  }
`;

const TriggerContainerCheckbox = TriggerContainer.extend`
  border-radius: ${getTypeSizeData('radius')}px;
  border-width: ${props => getTypeSizeData(props.isSelected ? 'borderWidthOn' : 'borderWidthOff')(props)}px;
  height: ${getTypeSizeData('size')}px;
  width: ${getTypeSizeData('size')}px;

  ${TriggerActiveness} {
    background-color: transparent;
    border-bottom: ${getTypeSizeData('checkBorderWidth')}px solid transparent;
    border-right: ${getTypeSizeData('checkBorderWidth')}px solid transparent;
    ${props => props.isSelected ? `border-color: ${getMoodData('original')(props)};` : undefined}
    bottom: 25%;
    display: block;
    left: 30%;
    position: absolute;
    right: 30%;
    top: 15%;
    transform: rotate(40deg);
    transform-origin: 50% 50%;
  }
`;

const TriggerContainerRadio = TriggerContainer.extend`
  border-width: ${props => getTypeSizeData(props.isSelected ? 'borderWidthOn' : 'borderWidthOff')(props)}px;
  border-radius: 50%;
  height: ${getTypeSizeData('size')}px;
  width: ${getTypeSizeData('size')}px;

  ${TriggerActiveness} {
    ${props => props.isSelected ? `background-color: ${getMoodData('original')(props)};` : undefined}
    border-radius: 50%;
    display: block;
    height: ${getTypeSizeData('dotSize')}px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${getTypeSizeData('dotSize')}px;
  }
`;

const switchOnIconGutter = props => getTypeSizeData('width')(props) - getTypeSizeData('dotSize')(props) - getTypeSizeData('padding')(props);

const switchOffCss = css`
  background-color: ${props => props.theme.fieldBoolean.borderColor};
  border-width: ${getTypeSizeData('borderWidthOff')}px;

  ${TriggerActiveness} {
    ${props => props.theme.isRTL ? 'right' : 'left'}: ${getTypeSizeData('padding')}px;
  }
`;

const switchOnCss = css`
  background-color: ${getMoodData('original')};
  border-width: ${getTypeSizeData('borderWidthOn')}px;

  ${TriggerActiveness} {
    ${props => props.theme.isRTL ? 'right' : 'left'}: ${switchOnIconGutter}px;
  }
`;

const TriggerContainerSwitch = TriggerContainer.extend`
  border-radius: ${getTypeSizeData('height')}px;
  border: none;
  height: ${getTypeSizeData('height')}px;
  width: ${getTypeSizeData('width')}px;

  ${TriggerActiveness} {
    background-color: ${props => props.theme.colors.white};
    border-radius: 50%;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
    display: block;
    height: ${getTypeSizeData('dotSize')}px;
    position: absolute;
    top: ${getTypeSizeData('padding')}px;
    width: ${getTypeSizeData('dotSize')}px;
  }

  ${props => props.isSelected ? switchOnCss : switchOffCss}
`;

const CheckboxTrigger = props => (
  <TriggerContainerCheckbox {...props} fieldType="checkbox">
    <TriggerActiveness {...props} />
  </TriggerContainerCheckbox>
);

const RadioTrigger = props => (
  <TriggerContainerRadio {...props} fieldType="radio">
    <TriggerActiveness {...props} />
  </TriggerContainerRadio>
);

const SwitchTrigger = props => (
  <TriggerContainerSwitch {...props} fieldType="switch">
    <TriggerActiveness {...props} />
  </TriggerContainerSwitch>
);

const triggerComponents = {
  checkbox: CheckboxTrigger,
  radio: RadioTrigger,
  switch: SwitchTrigger
};

const WrapperLabel = styled.label`
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
  display: inline-block;
  ${props => props.isDisabled ? `opacity: ${props.theme.common.opacityDisabled};` : undefined}
  position: relative;
`;

class FieldBooleanRaw extends React.Component {
  state = {
    hover: false,
    focus: false,
    value: false
  };

  componentWillMount() {
    this.setValueFromProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setValueFromProps(nextProps);
  }

  setValueFromProps = ({ value: realValue }) => {
    const value = this.getBooleanValue(realValue);

    if (value !== this.state.value) {
      this.setState({ value });
    }
  };

  getRealValue = value => value ? this.props.trueValue : this.props.falseValue;

  getBooleanValue = value => value === this.props.trueValue;

  handleMouseOver = () => {
    this.setState({ hover: true });

    if (this.props.onMouseOver) {
      this.props.onMouseOver();
    }
  };

  handleMouseOut = () => {
    this.setState({ hover: false });

    if (this.props.onMouseOut) {
      this.props.onMouseOut();
    }
  };

  handleFocus = () => {
    this.setState({ focus: true });

    if (this.props.onFocus) {
      this.props.onFocus();
    }
  };

  handleBlur = () => {
    this.setState({ focus: false });

    if (this.props.onBlur) {
      this.props.onBlur();
    }
  };

  handleChange = () => {
    if (!this.props.disabled) {
      if (this.props.fieldType === 'radio') {
        if (!this.state.value) {
          this.setState({ value: true });

          if (this.props.onChange) {
            this.props.onChange(this.getRealValue(true));
          }
        }
      } else {
        const value = !this.state.value;

        this.setState({ value });

        if (this.props.onChange) {
          this.props.onChange(this.getRealValue(value));
        }
      }
    }
  };

  render() {
    const { customMarkup, description, disabled, mood, size, fieldType } = this.props;
    const { hover, focus, value } = this.state;
    const Trigger = triggerComponents[fieldType];
    const hasCustomMarkup = !!customMarkup;
    const props = {
      isDisabled: disabled,
      isHovered: hover,
      isFocused: focus,
      mood,
      size,
      isSelected: value
    };

    return (
      <WrapperLabel isDisabled={disabled} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <HiddenCheckbox
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          disabled={disabled}
        />

        {
          !hasCustomMarkup && (
            <Trigger {...props} />
          )
        }

        {
          !hasCustomMarkup && description ?
            <Description>
              {description}
            </Description> : null
        }

        {hasCustomMarkup && customMarkup}
      </WrapperLabel>
    );
  }
}

const FieldBoolean = styled(FieldBooleanRaw)``;

CheckboxTrigger.propTypes = triggerPropTypes;
RadioTrigger.propTypes = triggerPropTypes;
SwitchTrigger.propTypes = triggerPropTypes;

FieldBoolean.WrapperLabel = WrapperLabel;
FieldBoolean.Description = Description;
FieldBoolean.CheckboxTrigger = CheckboxTrigger;
FieldBoolean.RadioTrigger = RadioTrigger;
FieldBoolean.SwitchTrigger = SwitchTrigger;

FieldBoolean.propTypes = propTypes;

FieldBoolean.defaultProps = {
  falseValue: false,
  mood: 'primary',
  size: 'md',
  trueValue: true,
};

export { CheckboxTrigger, RadioTrigger, SwitchTrigger };
export default FieldBoolean;