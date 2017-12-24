import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon/Icon';
import Tooltip from '../Overlay/Tooltip';
import { FileButton, SelectInput, TextareaInput, TextInput } from './FieldBox';
import { field as propTypes } from '../../helpers/propTypes';

const Status = styled.div`
  bottom: 0;
  display: block;
  position: absolute;
  white-space: nowrap;
  ${props => props.theme.isRTL ? 'left' : 'right'}: 0;
`;

const TipIcon = styled(Icon)`
  cursor: default;
  display: inline-block;
  font-size: 0.8em;
  color: #999;
  margin-${props => props.theme.isRTL ? 'right' : 'left'}: 5px;
  text-align: center;
  vertical-align: middle;
  width: 16px;

  &:before {
    display: inline-block;
    font-size: 10px !important;
    vertical-align: middle;
    width: 14px;
  }
`;

const Label = styled.label`
  display: inline-block;
  font-weight: ${props => props.theme.field.labelFontWeight};
  vertical-align: middle;
`;

const Required = styled.span`
  color: ${props => props.theme.colors.error};
`;

const HeadFeedback = styled.div`
  animation: 0.3s ${props => props.theme.keyframes.fadeInDown} ease;
  border-radius: ${props => props.theme.common.radius}px;
  bottom: 20px;
  font-size: 13px;
  ${props => props.theme.isRTL ? 'right' : 'left'}: 0;
  line-height: 18px;
  max-width: 300px;
  padding: 2px 6px;
  position: absolute;

  &:after {
    border: 4px solid transparent;
    border-bottom: none;
    content: '';
    display: block;
    ${props => props.theme.isRTL ? 'right' : 'left'}: 10px;
    position: absolute;
    top: 100%;
  }
`;

const HeadError = HeadFeedback.extend`
  background-color: ${props => props.theme.colors.error};
  color: white;

  &:after {
    border-top-color: ${props => props.theme.colors.error};
  }
`;

const HeadWarning = HeadFeedback.extend`
  background-color: ${props => props.theme.colors.warning};
  color: white;

  &:after {
    border-top-color: ${props => props.theme.colors.warning};
  }
`;

const HeadRaw = (props) => {
  const { className, errorMessage, feedbackIn, hasError, hasWarning, label, required, status, tip, warningMessage } = props;
  const labelMarkup = label ? (
    <Label>
      {label}
      {required ? <Required>⁕</Required> : null}
    </Label>
  ) : null;

  let errorMarkup;
  let warningMarkup;

  if (feedbackIn === 'head') {
    if (hasError) {
      errorMarkup = (<HeadError>{errorMessage}</HeadError>);
    }

    if (!hasError && hasWarning) {
      warningMarkup = (<HeadWarning>{warningMessage}</HeadWarning>);
    }
  }

  const tipMarkup = tip ? (
    <Tooltip gutter="xs" content={tip}>
      <TipIcon nameDefault="info" />
    </Tooltip>
  ) : null;

  const statusMarkup = status ? (<Status>{status}</Status>) : null;

  if (labelMarkup || errorMarkup || warningMarkup || tipMarkup || statusMarkup) {
    return (
      <div className={className}>
        {labelMarkup}
        {tipMarkup}
        {errorMarkup}
        {warningMarkup}
        {statusMarkup}
      </div>
    );
  }

  return null;
};

const Head = styled(HeadRaw)`
  margin-bottom: 5px;
  ${props => props.status && !props.theme.isRTL ? 'padding-right: 50px;' : undefined}
  ${props => props.status && props.theme.isRTL ? 'padding-left: 50px;' : undefined}
  position: relative;
`;

const Help = styled.div`
  color: ${props => props.theme.colors.grayB};
`;

const FootFeedback = styled.div`
  font-size: 12px;
  line-height: 14px;
`;

const FootError = FootFeedback.extend`
  color: ${props => props.theme.colors.error};
`;

const FootWarning = FootFeedback.extend`
  color: ${props => props.theme.colors.warning};
`;

const FootRaw = ({ className, errorMessage, feedbackIn, hasError, hasWarning, help, warningMessage }) => {
  const helpMarkup = help ? (<Help>{help}</Help>) : null;

  let errorMarkup;
  let warningMarkup;

  if (feedbackIn === 'foot') {
    if (hasError) {
      errorMarkup = (<FootError>{errorMessage}</FootError>);
    }

    if (!hasError && hasWarning) {
      warningMarkup = (<FootWarning>{warningMessage}</FootWarning>);
    }
  }

  if (helpMarkup || errorMarkup || warningMarkup) {
    return (
      <div className={className}>
        {errorMarkup}
        {warningMarkup}
        {helpMarkup}
      </div>
    );
  }

  return null;
};

const Foot = styled(FootRaw)`
  font-size: 12px;
  margin-${props => props.theme.isRTL ? 'right' : 'left'}: 5px;
  margin-top: 5px;
`;

const AddOnContent = styled.div``;

const AddOn = styled.div`
  align-items: center;
  border-radius: ${props => props.theme.button.size[props.size].radius}px;
  display: flex;
  white-space: nowrap;

  ${AddOnContent} {
    > * {
      flex-grow: 1;
      ${props => props.placement === 'after' ? `border-top-${props.theme.isRTL ? 'right' : 'left'}-radius: 0;` : undefined}
      ${props => props.placement === 'after' ? `border-bottom-${props.theme.isRTL ? 'right' : 'left'}-radius: 0;` : undefined}
      ${props => props.placement === 'before' ? `border-top-${props.theme.isRTL ? 'left' : 'right'}-radius: 0;` : undefined}
      ${props => props.placement === 'before' ? `border-bottom-${props.theme.isRTL ? 'left' : 'right'}-radius: 0;` : undefined}
    }
  }
`;

const BodyMain = styled.div``;

const BodyRaw = ({ className, fieldIsBox, addOnBefore, addOnAfter, ...props }) => (
  <div className={className}>
    {
      fieldIsBox && addOnBefore ?
        <AddOn placement="before" size={props.size}>
          <AddOnContent>{addOnBefore}</AddOnContent>
        </AddOn> : null
    }

    <BodyMain {...props} hasAddOn={!!(fieldIsBox && (addOnBefore || addOnAfter))} />

    {
      fieldIsBox && addOnAfter ?
        <AddOn placement="after" size={props.size}>
          <AddOnContent>{addOnAfter}</AddOnContent>
        </AddOn> : null
    }
  </div>
);

const Body = styled(BodyRaw)`
  display: flex;
  flex-direction: row;

  ${BodyMain} {
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }

  ${SelectInput}, ${TextInput}, ${TextareaInput}, ${FileButton} {
    ${props => props.addOnBefore ? `border-top-${props.theme.isRTL ? 'right' : 'left'}-radius: 0;` : undefined}
    ${props => props.addOnBefore ? `border-bottom-${props.theme.isRTL ? 'right' : 'left'}-radius: 0;` : undefined}
    ${props => props.addOnAfter ? `border-top-${props.theme.isRTL ? 'left' : 'right'}-radius: 0;` : undefined}
    ${props => props.addOnAfter ? `border-bottom-${props.theme.isRTL ? 'left' : 'right'}-radius: 0;` : undefined}
  }
`;

const FieldRaw = ({ className, ...props }) => {
  let body = (
    <Body {...props} />
  );

  if (!props.label && props.tip) {
    body = (
      <Tooltip align="right" gutter="sm" content={props.tip}>
        {body}
      </Tooltip>
    );
  }

  return (
    <div className={className}>
      <Head {...props} />
      {body}
      <Foot {...props} />
    </div>
  );
};

const Field = styled(FieldRaw)`
  font-size: ${props => props.theme.button.size[props.size].fontSize}px;
  line-height: ${props => props.theme.button.size[props.size].lineHeight};
  position: relative;
`;

Field.propTypes = propTypes;

Field.defaultProps = {
  size: 'md'
};

// Build shortcuts for custom styling purposes!
AddOn.Content = AddOnContent;
Head.Status = Status;
Head.Label = Label;
Head.Tip = TipIcon;
Head.Required = Required;
Head.Error = HeadError;
Head.Warning = HeadWarning;
Foot.Help = Help;
Foot.Error = FootError;
Foot.Warning = FootWarning;
Body.AddOn = AddOn;
Body.Main = BodyMain;
Field.Head = Head;
Field.Foot = Foot;
Field.Body = Body;

export default Field;