import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Input } from '../FieldBox';

const RemoveItem = styled.span`
  cursor: pointer;
  margin-${props => props.theme.isRTL ? 'right' : 'left'}: 5px;
  
  &:hover {
    color: ${props => props.theme.colors.error};
  }
`;

class ItemRaw extends React.Component {
  static propTypes = {
    onRemove: PropTypes.func,
    removable: PropTypes.bool
  };

  static defaultProps = {
    removable: true
  };

  handleRemove = () => {
    if (this.props.onRemove) {
      this.props.onRemove();
    }
  };

  render() {
    const { className, children, removable } = this.props;

    return (
      <div className={className}>
        {
          removable && (
            <RemoveItem onClick={this.handleRemove}>
              ×
            </RemoveItem>
          )
        }

        {children}
      </div>
    );
  }
}

const SingleArrowWrapper = styled.span`
  color: ${props => props.theme.fieldBox.placeholderColor};
  position: absolute;
  top: 50%;
  transition: ${props => props.theme.common.transitionAll};
  transform: translateY(-50%) ${props => props.isOpen ? 'rotate(180deg)' : undefined};
  ${props => props.theme.isRTL ? 'left' : 'right'}: ${props => props.theme.button.size[props.size].paddingH}px;
`;

const SingleItem = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-${props => props.theme.isRTL ? 'left' : 'right'}: 15px;
`;

const Placeholder = SingleItem.extend`
  color: ${props => props.theme.fieldBox.placeholderColor};
`;

const lastItemCss = props => css`
  margin-${props.theme.isRTL ? 'left' : 'right'}: 15px !important;
`;

const Item = styled(ItemRaw)`
  background-color: #eee;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  max-width: 150px;
  overflow: hidden;
  padding: 0 5px;
  padding-${props => props.theme.isRTL ? 'left' : 'right'}: 20px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${props => props.isLast ? lastItemCss(props) : undefined}

  ${RemoveItem} {
    position: absolute;
    ${props => props.theme.isRTL ? 'left' : 'right'}: 5px;
  }
`;

const Add = styled.div``;

const Search = styled(Input)`
  background: transparent;
  border: none;
  padding: 0;
  text-overflow: ellipsis;
`;

const ItemsWrapper = styled.div`
  margin-bottom: -5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${Item}, ${Placeholder}, ${Search} {
    margin-bottom: 5px;
    overflow: hidden;
  }

  ${Item} {
    margin-${props => props.theme.isRTL ? 'left' : 'right'}: 5px;
  }

  ${Placeholder}, ${Search} {
    flex-grow: 1;
    width: auto;
  }
`;

const crustCss = props => css`
  padding-${props.theme.isRTL ? `left` : `right`}: ${props => props.theme.button.size[props.size].paddingH + 20}px;
`;

const Crust = Input.withComponent('div').extend`
  position: relative;
  ${props => props.multi ? undefined : crustCss(props)}
`;

Item.defaultProps = {
  size: 'md'
};

Add.defaultProps = {
  removable: false
};

Search.defaultProps = {
  size: 'md'
};

Item.Remove = RemoveItem;

Crust.Search = Search;
Crust.Placeholder = Placeholder;
Crust.MultiItem = Item;
Crust.MultiAdd = Add;
Crust.MultiItems = ItemsWrapper;
Crust.SingleArrowWrapper = SingleArrowWrapper;
Crust.SingleItem = SingleItem;

Crust.defaultProps = {
  size: 'md'
};

export default Crust;