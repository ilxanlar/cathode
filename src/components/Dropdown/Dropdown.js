import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../Button/Button';
import Overlay from '../Overlay/Overlay';
import Icon from '../Icon/Icon';
import { dropdown as propTypes, dropdownItem as itemPropTypes } from '../../helpers/propTypes';

const Caret = styled(Icon)`
  display: inline-block;
  margin-${props => props.theme.isRTL ? 'right' : 'left'}: 5px;
  transition: ${props => props.theme.common.transitionAll};
  ${props => props.isOpen ? 'transform: rotate(180deg);' : undefined}
`;

const separatorCss = ({ theme }) => css`
  border-bottom-color: ${theme.colors.lightC};
  margin: ${theme.dropdown.itemPaddingV}px 0;
`;

const Separator = styled.hr`
  ${separatorCss}
`;

const itemCss = ({ disabled, theme }) => css`
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
  ${disabled ? `opacity: ${theme.common.opacityDisabled};` : undefined}
  padding: ${theme.dropdown.itemPaddingV}px ${theme.dropdown.itemPaddingH}px;
  transition: ${theme.common.transitionAll};
`;

const itemStatusCss = ({ active, disabled, focus, hover, theme }) => {
  if (active) {
    return css`
      background-color: ${theme.dropdown.itemBgColorActive};
      color: ${theme.dropdown.itemTextColorActive};
    `;
  }

  if (hover || focus) {
    return css`
      background-color: ${theme.dropdown.itemBgColorHover};
    `;
  }

  return css`
    &:hover {
      ${!disabled ? `background-color: ${theme.dropdown.itemBgColorHover};` : undefined}
    }
  `;
};

const Item = styled.a`
  display: block;
  ${itemCss}
  ${itemStatusCss}
`;

const containerCss = ({ theme }) => css`
  animation: 0.1s ${theme.keyframes.fadeInDown};
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.lightB};
  border-radius: ${theme.common.radius}px;
  box-shadow: ${theme.shadows.xs};
  min-width: ${theme.dropdown.minWidth}px;
  padding-bottom: ${theme.dropdown.itemPaddingV}px;
  padding-top: ${theme.dropdown.itemPaddingV}px;
`;

const Container = styled.div`
  max-height: 300px;
  overflow: auto;
  ${containerCss}
`;

class DropdownRaw extends React.Component {
  state = {
    show: false
  };

  bySelf = false;
  byItems = false;

  componentDidMount() {
    window.addEventListener('click', this.handleClickAnywhere);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickAnywhere);
  }

  handleClickAnywhere = () => {
    if (!this.bySelf && this.state.show) {
      this.setState({ show: false });
    }

    this.bySelf = false;
  };

  handleClickDropdown = () => {
    this.bySelf = true;

    if (this.byItems) {
      this.setState({ show: false });
    }

    this.byItems = false;
  };

  handleClickDropdownItems = () => {
    this.byItems = true;
  };

  handleClickButton = () => {
    this.bySelf = true;

    if (!this.state.show) {
      this.setState({ show: true });
    }
  };

  render() {
    const { buttonProps, children, className, label, noCaret, isRTL, overlayProps } = this.props;
    const { show } = this.state;

    return (
      <Overlay
        align={isRTL ? 'right' : 'left'}
        placement="bottom"
        {...overlayProps}
        trigger={show}
        content={
          <Container className={className} onClick={this.handleClickDropdown}>
            <div onClick={this.handleClickDropdownItems}>
              {React.Children.map(children, child => child)}
            </div>
          </Container>
        }
      >
        <Button mood="tertiary" {...buttonProps} onClick={this.handleClickButton}>
          {label}
          {
            !noCaret && (
              <Caret
                isOpen={show}
                nameDefault="angleDown"
              />
            )
          }
        </Button>
      </Overlay>
    );
  }
}

const Dropdown = styled(DropdownRaw).attrs({
  isRTL: props => props.theme && props.theme.isRTL
})``;

Item.propTypes = itemPropTypes;
Dropdown.propTypes = propTypes;

Dropdown.Separator = Separator;
Dropdown.Item = Item;
Dropdown.Container = Container;

export default Dropdown;