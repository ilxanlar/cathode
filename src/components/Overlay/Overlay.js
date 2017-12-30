import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Theme from '../Theme';
import { overlay as propTypes } from '../../helpers/propTypes';
import { offset } from '../../helpers/utils';

const contentTransforms = {
  top: {
    center: 'translate(-50%, -100%)',
    left: 'translate(0, -100%)',
    right: 'translate(0, -100%)'
  },
  right: {
    center: 'translate(0, -50%)',
    bottom: 'translate(0, -100%)',
    top: 'translate(0, 0)'
  },
  bottom: {
    center: 'translate(-50%, 0)',
    left: 'translate(0, 0)',
    right: 'translate(0, 0)'
  },
  left: {
    center: 'translate(0, -50%)',
    bottom: 'translate(0, -100%)',
    top: 'translate(0, 0)'
  }
};

const contentMargins = {
  bottom: {
    margin: 'top',
    sign: 1
  },
  left: {
    margin: 'right',
    sign: 1
  },
  right: {
    margin: 'left',
    sign: 1
  },
  top: {
    margin: 'top',
    sign: -1
  }
};

const getGutter = ({ gutter, gutterPx, placement, theme }) => {
  return contentMargins[placement].sign * (typeof gutterPx !== 'undefined' ? gutterPx : theme.gutters[gutter]);
};

const Container = styled.div`
  margin-${props => contentMargins[props.placement].margin}: ${getGutter}px;
  transform: ${props => contentTransforms[props.placement][props.align]};
`;

export default class Overlay extends React.Component {
  static propTypes = propTypes;

  static defaultProps = {
    align: 'center',
    contentWidth: 'auto',
    gutter: 'md',
    placement: 'top',
    repositionDelay: 200,
    trigger: 'mouseOver',
    showDelay: 0,
    hideDelay: 0
  };

  state = {
    show: false
  };

  childNode = undefined;
  childNodeOffset = undefined;
  canNotHideOverlay = false;
  defaultUnTriggers = {
    mouseOver: 'mouseOut',
    focus: 'blur',
    click: 'clickOutside'
  };
  fallBackProps = undefined;
  isRendered = false;
  overlayNode = undefined;
  target = undefined;

  componentDidMount() {
    this.childNode = ReactDOM.findDOMNode(this);
    this.childNode.addEventListener('mouseover', this.handleMouseOver);
    this.childNode.addEventListener('mouseout', this.handleMouseOut);
    this.childNode.addEventListener('focus', this.handleFocus);
    this.childNode.addEventListener('blur', this.handleBlur);
    this.childNode.addEventListener('click', this.handleClick);
    window.addEventListener('click', this.handleClickOutside);
    window.addEventListener('scroll', this.reposition);
    window.addEventListener('resize', this.reposition);

    if (this.props.trigger === true) {
      this.show();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.trigger !== false && nextProps.trigger === false) {
      this.hide();
    } else if (this.props.trigger !== nextProps.trigger && nextProps.trigger === true) {
      this.show();
    }
  }

  componentDidUpdate() {
    if (this.isRendered && this.overlayNode) {
      const { align, placement, fallbackAlign, fallbackPlacement } = this.props;
      const windowHeight = document.body.clientHeight;
      const windowWidth = document.body.clientWidth;
      const childNodeData = this.getChildNodeOffset();

      const spaces = {
        bottom: windowHeight - childNodeData.top - childNodeData.height,
        left: childNodeData.left,
        right: windowWidth - childNodeData.left - childNodeData.width,
        top: childNodeData.top
      };

      const overlayNodeData = offset(this.overlayNode);

      let overflow = false;

      if (placement === 'bottom' || placement === 'top') {
        if (spaces[placement] < overlayNodeData.height) {
          overflow = true;
        } else {
          if (align === 'center' && (spaces.left < overlayNodeData.width / 2 - childNodeData.width / 2 || spaces.right < overlayNodeData.width / 2 - childNodeData.width / 2)) {
            overflow = true;
          } else if (align === 'left' && spaces.right < overlayNodeData.width - childNodeData.width) {
            overflow = true;
          } else if (align === 'right' && spaces.left < overlayNodeData.width - childNodeData.width) {
            overflow = true;
          }
        }
      } else if (placement === 'left' || placement === 'right') {
        if (spaces[placement] < overlayNodeData.width) {
          overflow = true;
        } else {
          if (align === 'center' && (spaces.bottom < overlayNodeData.height / 2 - childNodeData.height / 2 || spaces.top < overlayNodeData.height / 2 - childNodeData.height / 2)) {
            overflow = true;
          } else if (align === 'bottom' && spaces.top < overlayNodeData.height - childNodeData.height) {
            overflow = true;
          } else if (align === 'top' && spaces.bottom < overlayNodeData.height - childNodeData.height) {
            overflow = true;
          }
        }
      }

      if (overflow) {
        const fallBackProps = {
          align: fallbackAlign || align,
          placement: fallbackPlacement || placement
        };

        if (!this.fallBackProps || this.fallBackProps.align !== fallBackProps.align || this.fallBackProps.placement !== fallBackProps.placement) {
          this.fallBackProps = fallBackProps;
          this.show();
        }
      }
    }
  }

  componentWillUnmount() {
    this.childNode.removeEventListener('mouseover', this.handleMouseOver);
    this.childNode.removeEventListener('mouseout', this.handleMouseOut);
    this.childNode.removeEventListener('focus', this.handleFocus);
    this.childNode.removeEventListener('blur', this.handleBlur);
    this.childNode.removeEventListener('click', this.handleClick);
    window.removeEventListener('click', this.handleClickOutside);
    window.removeEventListener('scroll', this.reposition);
    window.removeEventListener('resize', this.reposition);

    if (this.target) {
      this.target.parentNode.removeChild(this.target);
    }
  }

  getUnTrigger = () => {
    return this.props.unTrigger || this.defaultUnTriggers[this.props.trigger];
  };

  getChildNodeOffset = () => {
    this.childNodeOffset = offset(this.childNode);
    return this.childNodeOffset;
  };

  handleMouseOver = () => {
    if (this.props.trigger === 'mouseOver' && !this.state.show) {
      this.show();
    }
  };

  handleMouseOut = () => {
    if (this.getUnTrigger() === 'mouseOut' && this.state.show) {
      this.hide();
    }
  };

  handleFocus = () => {
    if (this.props.trigger === 'focus' && !this.state.show) {
      this.show();
    }
  };

  handleBlur = () => {
    if (this.getUnTrigger() === 'blur' && this.state.show) {
      this.hide();
    }
  };

  handleClick = () => {
    this.canNotHideOverlay = true;

    if (this.state.show) {
      if (this.props.unTrigger === 'click') {
        this.hide();
      }
    } else {
      if (this.props.trigger === 'click') {
        this.show();
      }
    }
  };

  handleClickOutside = () => {
    if (!this.canNotHideOverlay && this.getUnTrigger() === 'clickOutside' && this.state.show) {
      this.hide();
    }

    this.canNotHideOverlay = false;
  };

  handleOverlayRef = overlayNode => {
    this.overlayNode = overlayNode;
  };

  handleClickOverlay = () => {
    this.canNotHideOverlay = true;
  };

  reposition = () => {
    if (this.isRendered && this.target) {
      if (this.timeout) {
        window.clearTimeout(this.timeout);
      }

      this.timeout = window.setTimeout(this.show, this.props.repositionDelay);
    }
  };

  show = () => {
    window.setTimeout(() => {
      this.setState({ show: true });
    }, this.props.showDelay);
  };

  hide = () => {
    window.setTimeout(() => {
      this.setState({ show: false }, () => {
        if (this.target) {
          this.target.parentNode.removeChild(this.target);
          this.target = undefined;
        }
      });
    }, this.props.hideDelay);
  };

  getPositionData = ({ align, placement }) => {
    const windowWidth = document.body.clientWidth;
    const { height, left, top, width } = this.getChildNodeOffset();

    const key = `${placement}-${align}`;
    let style;

    switch (key) {
      case 'top-left':
        style = { left, top };
        break;

      case 'top-center':
        style = { left: left + width / 2, top };
        break;

      case 'top-right':
        style = { right: windowWidth - left - width, top };
        break;

      case 'right-bottom':
        style = { left: left + width, top: top + height };
        break;

      case 'right-center':
        style = { left: left + width, top: top + height / 2 };
        break;

      case 'right-top':
        style = { left: left + width, top };
        break;

      case 'bottom-left':
        style = { left, top: top + height };
        break;

      case 'bottom-center':
        style = { left: left + width / 2, top: top + height };
        break;

      case 'bottom-right':
        style = { right: windowWidth - left - width, top: top + height };
        break;

      case 'left-bottom':
        style = { right: windowWidth - left, top: top + height };
        break;

      case 'left-center':
        style = { right: windowWidth - left, top: top + height / 2 };
        break;

      case 'left-top':
        style = { right: windowWidth - left, top };
        break;

      default:
        break;
    }

    return style;
  };

  renderChild = () => {
    this.isRendered = false;
    return React.Children.only(this.props.children);
  };

  renderWithOverlay = () => {
    const { gutter, gutterPx, content, contentWrapper: ContentWrapper, contentWrapperProps, contentWidth } = this.props;
    const { placement, align } = this.fallBackProps || this.props;
    const positionStyle = this.getPositionData({ placement, align });
    this.fallBackProps = { placement, align };

    let dimensionStyle;
    if (contentWidth === 'auto') {
      dimensionStyle = {};
    } else if (contentWidth === 'parent') {
      dimensionStyle = { width: this.childNodeOffset.width };
    } else if (contentWidth > 0) {
      dimensionStyle = { width: contentWidth };
    }

    if (positionStyle) {
      const style = {
        position: 'absolute',
        zIndex: 9999,
        ...positionStyle,
        ...dimensionStyle
      };

      const Content = (
        <Container
          style={style}
          align={align}
          gutter={gutter}
          gutterPx={gutterPx}
          placement={placement}
          onClick={this.handleClickOverlay}
          innerRef={this.handleOverlayRef}
        >
          <Theme>
            {
              ContentWrapper ?
                <ContentWrapper {...contentWrapperProps} placement={placement} align={align}>
                  {content}
                </ContentWrapper> : content
            }
          </Theme>
        </Container>
      );

      this.isRendered = true;

      return [
        React.Children.only(this.props.children),
        ReactDOM.createPortal(Content, this.target)
      ];
    }
  };

  render() {
    if (this.state.show && this.childNode) {
      if (!this.target) {
        this.target = document.createElement('div');
        document.body.appendChild(this.target);
      }

      return this.renderWithOverlay();
    } else {
      return this.renderChild();
    }
  }
}
