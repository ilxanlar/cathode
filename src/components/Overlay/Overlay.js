import React from 'react';
import ReactDOM from 'react-dom';
import ContextProvider from '../Utility/ContextProvider';
import { overlayProps } from '../../utils/proptypes';
import { dimensions, hotVertices } from '../../utils/dom';

export default class Overlay extends React.PureComponent {
  static propTypes = {
    ...overlayProps
  };

  static defaultProps = {
    contentWidth: 'auto',
    trigger: 'hover',
    placement: 'top',
    align: 'center',
    gutter: 5
  };

  target = null;
  bySelf = false;
  isRendered = false;
  resizeTimeout = null;

  componentDidMount() {
    this.nodeRef = ReactDOM.findDOMNode(this);
    this.nodeRef.addEventListener('mouseover', this.handleIn.bind(this, 'hover'));
    this.nodeRef.addEventListener('focus', this.handleIn.bind(this, 'focus'));
    this.nodeRef.addEventListener('click', this.handleIn.bind(this, 'click'));
    this.nodeRef.addEventListener('focus', this.handleIn.bind(this, 'focus'));
    this.nodeRef.addEventListener('mouseout', this.handleOut.bind(this, 'hover'));
    this.nodeRef.addEventListener('blur', this.handleOut.bind(this, 'focus'));
    window.addEventListener('click', this.handleOut.bind(this, 'click'));
    window.addEventListener('resize', this.reposition);
    window.addEventListener('scroll', this.reposition);

    if (this.props.trigger === true) {
      this.renderOverlay();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.trigger !== false && nextProps.trigger === false) {
      this.unrenderOverlay();
    } else if (this.props.trigger !== nextProps.trigger && nextProps.trigger === true) {
      this.renderOverlay(nextProps);
    } else if (this.isRendered && this.props.content !== nextProps.content) { // This is for dropdown
      this.renderOverlay(nextProps);
    }
  }

  componentDidUpdate() {
    this.nodeRef = ReactDOM.findDOMNode(this);
  }

  componentWillUnmount() {
    this.nodeRef.removeEventListener('mouseover', this.handleIn);
    this.nodeRef.removeEventListener('focus', this.handleIn);
    this.nodeRef.removeEventListener('click', this.handleIn);
    this.nodeRef.removeEventListener('mouseout', this.handleOut);
    this.nodeRef.removeEventListener('blur', this.handleOut);
    window.removeEventListener('resize', this.reposition);
    window.removeEventListener('scroll', this.reposition);
  }

  handleIn = (type) => {
    if (this.props.trigger === type) {
      if (type === 'click') {
        this.bySelf = true;
      }

      this.renderOverlay();
    }
  };

  handleOut = (type) => {
    if (!(type === 'click' && this.bySelf) && this.props.trigger === type && this.target) {
      this.unrenderOverlay();
    }

    this.bySelf = false;
  };

  reposition = () => {
    if (this.isRendered && this.target) {
      if (this.resizeTimeout) {
        window.clearTimeout(this.resizeTimeout);
      }

      this.resizeTimeout = window.setTimeout(this.renderOverlay, 10);
    }
  };

  createTargetElement = () => {
    if (!this.target) {
      const target = document.createElement('div');
      document.body.appendChild(target);
      this.target = target;
    }
  };

  removeTargetElement = () => {
    if (this.target) {
      this.target.parentElement.removeChild(this.target);
      this.target = null;
    }
  };

  getDynamicStyles = () => {
    const { placement, align, gutter } = this.props;

    switch (placement) {
      case 'top':
        return {
          marginTop: -1 * gutter,
          transform: align === 'center' ? 'translate(-50%, -100%)' : 'translate(0, -100%)'
        };
      case 'right':
        return {
          marginLeft: gutter,
          transform: align === 'center' ? 'translate(0, -50%)' : 'translate(0, 0)'
        };
      case 'bottom':
        return {
          marginTop: gutter,
          transform: align === 'center' ? 'translate(-50%, 0)' : 'translate(0, 0)'
        };
      case 'left':
        return {
          marginRight: gutter,
          transform: align === 'center' ? 'translate(0, -50%)' : 'translate(0, 0)'
        };
      default:
        return '';
    }
  };

  renderOverlay = (props = this.props) => {
    const { trigger, placement, align, content, contentWidth } = props;

    if (trigger !== false) {
      const positionStyle = hotVertices(this.nodeRef, placement);

      let dimensionStyle;
      if (contentWidth === 'auto') {
        dimensionStyle = {};
      } else if (contentWidth === 'parent') {
        const dims = dimensions(this.nodeRef);
        dimensionStyle = { width: dims.width };
      } else if (contentWidth > 0) {
        dimensionStyle = { width: contentWidth };
      }

      if (positionStyle[align]) {
        const style = {
          position: 'fixed',
          zIndex: 9999,
          ...positionStyle[align],
          ...this.getDynamicStyles(),
          ...dimensionStyle
        };

        this.createTargetElement();

        const Content = (
          <div style={style} className={`align-${align}`}>
            {content}
          </div>
        );

        this.renderIntoElement(Content, this.target, this.context);
        this.isRendered = true;
      }
    }
  };

  unrenderOverlay = () => {
    ReactDOM.unmountComponentAtNode(this.target);
    this.removeTargetElement();
    this.isRendered = false;
  };

  renderIntoElement = (content, target, context) => {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      <ContextProvider context={context}>
        {content}
      </ContextProvider>,
      target
    );
  };

  render() {
    return React.Children.only(this.props.children);
  }
}
