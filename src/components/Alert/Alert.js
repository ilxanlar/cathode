import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Utility/Icon';
import Div from '../Utility/Div';
import classNames from '../../utils/classname';
import Config from '../Config';

export default class Alert extends React.Component {
  static propTypes = {
    containerClassName: PropTypes.string,
    style: PropTypes.string,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.bool
    ]),
    closable: PropTypes.bool,
    autoCloseAfter: PropTypes.number,
    onClose: PropTypes.func
  };

  static defaultProps = {
    style: 'default',
    icon: true,
    closable: false
  };

  static Title = (props) => (
    <Div {...props} className="alert-title" />
  );

  static Description = (props) => (
    <Div {...props} className="alert-description" />
  );

  static Desc = Alert.Description;

  state = {
    closed: false
  };

  defaultIcons = {
    default: 'info-circle',
    info: 'info-circle',
    success: 'ok-circle',
    error: 'error-triangle',
    warning: 'error-triangle'
  };

  timeout = null;

  componentDidMount() {
    const { autoCloseAfter } = this.props;

    if (autoCloseAfter) {
      this.timout = window.setTimeout(this.handleClose.bind(this), autoCloseAfter);
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }
  }

  handleClose() {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }

    if (this.props.onClose) {
      this.props.onClose();
    }

    this.setState({ closed: true });
  }

  render() {
    if (this.state.closed) {
      return null;
    }

    const { containerClassName, icon, style, closable, children } = this.props;
    const className = classNames([
      'alert-container',
      `style-${style}`,
      containerClassName
    ]);

    let iconName;
    if (icon === true) {
      iconName = Config.alertIcons[style];
    } else if (icon) {
      iconName = icon;
    }

    return (
      <div className={className}>
        <div className="alert">
          {
            icon ?
              <div className="alert-icon">
                <Icon name={iconName} />
              </div> : null
          }

          <Div children={children} className="alert-content" />

          {
            closable ?
              <a className="alert-close" onClick={this.handleClose.bind(this)}>
                <Icon name="close" size="block" />
              </a> : null
          }
        </div>
      </div>
    );
  }
}
