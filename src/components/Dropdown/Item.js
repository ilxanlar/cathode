import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classname';

export default class Item extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    containerClassName: PropTypes.string,
    component: PropTypes.func,
    componentProps: PropTypes.object
  };

  static defaultProps = {
    active: false,
    disabled: false
  };

  render() {
    const {
      component: CustomComponent, componentProps, containerClassName,
      active, disabled, children, ...otherProps
    } = this.props;

    const customComponentProps = {
      ...otherProps,
      ...componentProps,
      className: classNames([
        'dropdown-item',
        active ? 'dropdown-item-active' : undefined,
        disabled ? 'dropdown-item-disabled' : 'dropdown-item-enabled',
        containerClassName
      ])
    };

    // const markup = (
    //   <div className={`dropdown-item-ui ${active ? 'dropdown-item-active' : ''}`}>
    //     {
    //       typeof icon !== 'undefined' && (
    //         <Icon name={icon} containerClassName="dropdown-item-icon" />
    //       )
    //     }
    //
    //     <div className="dropdown-item-text">
    //       {children || text}
    //     </div>
    //   </div>
    // );

    let content;
    if (CustomComponent) {
      content = (
        <CustomComponent {...customComponentProps}>
          {children}
        </CustomComponent>
      );
    } else {
      content = (
        <a {...customComponentProps}>
          {children}
        </a>
      );
    }

    return (
      <div className="dropdown-item-container">
        {content}
      </div>
    );
  }
}
