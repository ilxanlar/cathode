import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import Button from '../Button/Button';
import Overlay from '../Overlay/Overlay';
import Icon from '../Utility/Icon';
import classNames from '../../utils/classname';

export default class Dropdown extends React.Component {
  static propTypes = {
    ...Button.propTypes,
    title: PropTypes.node.isRequired,
    containerClassName: PropTypes.string,
    items: PropTypes.array,
    itemRender: PropTypes.func,
    overlayProps: PropTypes.object,
    dropdownClassName: PropTypes.string,
    children: PropTypes.any
  };

  static Item = Item;

  static Separator = () => (
    <hr className="dropdown-separator" />
  );

  defaultOverlayProps = {
    placement: 'bottom',
    align: 'left',
    trigger: 'click'
  };

  defaultButtonProps = {
    wide: false
  };

  render() {
    const {
      title, overlayProps, items, itemRender, containerClassName,
      dropdownClassName, children, ...buttonProps
    } = this.props;

    const buttonClassNames = classNames([
      'dropdown-button',
      containerClassName
    ]);

    const dropdownClassNames = classNames([
      'dropdown-container',
      dropdownClassName
    ]);

    const menuItems = (
      <div className={dropdownClassNames}>
        {
          items && items.length ?
            items.map((item, key) => itemRender(item, key)) :
            React.Children.map(children, child => child)
        }
      </div>
    );

    return (
      <Overlay {...this.defaultOverlayProps} {...overlayProps} content={menuItems}>
        <Button {...this.defaultButtonProps} {...buttonProps} containerClassName={buttonClassNames}>
          {title}
          <Icon
            name="angle-down"
            containerClassName="button-icon dropdown-caret"
          />
        </Button>
      </Overlay>
    );
  }
}
