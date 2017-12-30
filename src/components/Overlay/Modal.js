import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../Layout/Container';
import Theme from '../Theme';
import $ from '../../helpers/mQuery';
import mediaQuery from '../../config/mediaQuery';

const Backdrop = styled.div`
  animation: 0.2s ${props => props.theme.keyframes.fadeIn};
  background: rgba(0, 0, 0, 0.6);
  bottom: 0;
  left: 0;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9998;
`;

const Content = styled.div``;

const ContentWrapper = styled.div`
  animation: 0.2s ${props => props.theme.keyframes.fadeInDown};
  display: flex;
  justify-content: center;
  min-height: 100%;
  padding: 50px 0;
  z-index: 9999;

  ${mediaQuery.xsOnly`padding: 30px;`}

  ${Content} {
    align-self: center;

    ${Container} {
      position: relative;
    }
  }
`;

class ModalRaw extends React.Component {
  target = undefined;
  contentClicked = false;

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);

    if (this.props.show) {
      this.createContainer();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.show && nextProps.show) {
      this.createContainer();
    }

    if (this.props.show && !nextProps.show) {
      this.removeContainer();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    this.removeContainer();
  }

  handleClickBackdrop = () => {
    if (this.props.onClickBackdrop) {
      this.props.onClickBackdrop();
    }

    if (this.props.hideOnClickBackdrop && !this.contentClicked) {
      this.handleHide();
    }

    this.contentClicked = false;
  };

  handleClickContent = () => {
    this.contentClicked = true;
  };

  handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 27: // On escape key press
        if (this.props.onEscape) {
          this.props.onEscape();
        }

        if (this.props.hideOnEscape) {
          event.preventDefault();
          this.handleHide();
        }

        break;

      default:
        break;
    }
  };

  handleHide = () => {
    if (this.props.onHide) {
      this.props.onHide();
    }
  };

  createContainer = () => {
    this.target = document.createElement('div');

    $('body').append(this.target);
    $('body').addClass('disable-scroll');
  };

  removeContainer = () => {
    $('body').removeClass('disable-scroll');

    if (this.target) {
      this.target.parentElement.removeChild(this.target);
      this.target = undefined;
    }
  };

  render() {
    const { children, className, containerProps, show } = this.props;

    if (show) {
      return ReactDOM.createPortal(
        <Theme>
          <div className={className}>
            <Backdrop onClick={this.handleClickBackdrop}>
              <ContentWrapper>
                <Content>
                  <Container {...containerProps} onClick={this.handleClickContent}>
                    {children}
                  </Container>
                </Content>
              </ContentWrapper>
            </Backdrop>
          </div>
        </Theme>,
        this.target
      );
    }

    return null;
  }
}

const Modal = styled(ModalRaw)`
  position: relative;
  z-index: 9999;
`;

Modal.Backdrop = Backdrop;
Modal.Content = Content;
Modal.Container = Container;

Modal.propTypes = {
  show: PropTypes.bool,
  hideOnEscape: PropTypes.bool,
  hideOnClickBackdrop: PropTypes.bool,
  onHide: PropTypes.func,
  onEscape: PropTypes.func,
  onClickBackdrop: PropTypes.func,
  containerProps: PropTypes.shape(Container.propTypes)
};

Modal.defaultProps = {
  hideOnEscape: true,
  hideOnClickBackdrop: true
};

export default Modal;