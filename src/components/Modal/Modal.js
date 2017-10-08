import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ContextProvider from '../Utility/ContextProvider';
import $ from '../../helpers/mQuery';

export default class Modal extends React.Component {
  static propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func
  };

  target = undefined;
  contentClicked = false;

  componentWillMount() {
    if (this.props.show) {
      this.renderContainer();
      this.renderModal(this.props.children);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.show && nextProps.show) {
      this.renderContainer();
    }

    if (nextProps.show) {
      this.renderModal(nextProps.children);
    }

    if (this.props.show && !nextProps.show) {
      this.unRenderModal();
    }
  }

  handleClickOverlay = () => {
    if (!this.contentClicked) {
      this.handleHide();
    }

    this.contentClicked = false;
  };

  handleClickContent = () => {
    this.contentClicked = true;
  };

  handleHide = () => {
    if (this.props.onHide) {
      this.props.onHide();
    }
  };

  renderContainer = () => {
    this.target = document.createElement('div');
    $(this.target).addClass('modal-container');
    $('body').append(this.target);
    $('body').addClass('has-active-modal');
  };

  renderModal = (node) => {
    if (this.target) {
      ReactDOM.unstable_renderSubtreeIntoContainer(
        this,
        <ContextProvider context={this.context}>
          <div className="modal-overlay" onClick={this.handleClickOverlay}>
            <div className="modal-content" onClick={this.handleClickContent}>
              <div className="modal-close" onClick={this.handleHide}>
                ×
              </div>

              {node}
            </div>
          </div>
        </ContextProvider>,
        this.target
      );
    }
  };

  unRenderModal = () => {
    $('body').removeClass('has-active-modal');

    if (this.target) {
      ReactDOM.unmountComponentAtNode(this.target);
      this.target.parentElement.removeChild(this.target);
      this.target = undefined;
    }
  };

  render() {
    return null;
  }
}
