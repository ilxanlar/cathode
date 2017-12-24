import React from 'react';
import styled from 'styled-components';
import Field from '../Field';
import { FileButton as Select, FileInput } from '../FieldBox';
import Icon from '../../Icon/Icon';
import PropProvider from '../FieldPropProvider';
import { fieldFile as propTypes } from '../../../helpers/propTypes';

const Wrapper = styled.div`
  position: relative;
`;

const WrapperLabel = styled.label`
  display: block;
`;

const Placeholder = styled.span`
  ${props => !props.hasFile ? `color: ${props.theme.fieldBox.placeholderColor};` : undefined}
  display: block;
  margin-${props => props.theme.isRTL ? `left` : `right`}: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Remove = styled.span`
  cursor: pointer;
  line-height: 1;
  position: absolute;
  padding: 5px;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  transition: ${props => props.theme.common.transitionAll};
  ${props => props.theme.isRTL ? `left` : `right`}: ${props => props.theme.button.size[props.inputSize].paddingH}px;

  &:hover {
    color: ${props => props.theme.colors.error};
  }
`;

class FileRaw extends React.Component {
  state = {
    fileData: {}
  };

  handleChange = (event) => {
    const { input } = this.props;
    const files = event.target.files;
    const file = files[0];
    const name = file && file.name ? file.name : '';

    if (input && input.onChange) {
      input.onChange(file);
    }

    this.setState({
      fileData: { name }
    });
  };

  handleRemove = () => {
    const { input } = this.props;

    if (input && input.onChange) {
      input.onChange(undefined);
    }

    this.setState({ fileData: {} });
  };

  render() {
    const { fileData } = this.state;
    const { disabled, placeholder, removeLabel, size } = this.props;
    const hasFile = !!fileData.name;

    return (
      <Field {...this.props} fieldType="text" fieldIsBox>
        <Wrapper>
          <WrapperLabel>
            <FileInput
              disabled={disabled}
              onChange={this.handleChange}
            />

            <Select size={size} disabled={disabled}>
              <Placeholder hasFile={hasFile}>
                <Icon nameDefault="file" />
                &nbsp;&nbsp;
                {hasFile ? fileData.name : placeholder}
              </Placeholder>
            </Select>
          </WrapperLabel>

          {
            hasFile && (
              <Remove inputSize={size} onClick={this.handleRemove}>
                {removeLabel}
              </Remove>
            )
          }
        </Wrapper>
      </Field>
    );
  };
}

const File = PropProvider.withComponent(FileRaw).extend`
  ${Select} {
    min-width: 10px;
    width: auto;
  }
`;

File.Wrapper = Wrapper;
File.WrapperLabel = WrapperLabel;
File.Select = Select;
File.Placeholder = Placeholder;
File.Remove = Remove;

File.propTypes = propTypes;

File.defaultProps = {
  size: 'md',
  removeLabel: '×'
};

export default File;