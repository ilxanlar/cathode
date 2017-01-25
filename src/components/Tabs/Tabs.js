import React, { Component, PropTypes, Children } from 'react';

export default class Tabs extends Component {
  static propTypes = {
    className: PropTypes.string,
    active: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    onSelect: PropTypes.func,
    children: PropTypes.any
  };

  static defaultProps = {
    active: 0
  };

  state = {
    active: null
  };

  componentWillMount() {
    if (typeof this.state.active === 'undefined' || this.state.active === null) {
      if (this.props.children[0] && this.props.children[0]) {
        this.setState({
          active: this.props.children[0].props.name
        });
      }
    } else {
      this.setState({
        active: this.props.active
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.props.active) {
      const name = typeof nextProps.active === 'undefined' || nextProps.active === null ? 0 : nextProps.active;
      this.setState({
        active: name
      });
    }
  }

  handleClick(name) {
    this.setState({
      active: name
    });

    if (this.props.onSelect) {
      this.props.onSelect(name);
    }
  }

  render() {
    const { className, active, children, ...otherProps } = this.props;
    const classNames = `tabs ${className}`;
    const activeName = this.state.active;

    return (
      <div className={classNames} {...otherProps}>
        <div className="tabs-nav">
          {
            Children.map(children, (child, key) => {
              if (!child.props.label) {
                return null;
              }

              const name = child.props.name;
              const tabClassName = `tab-button ${activeName === name ? 'tab-button-active' : ''}`;

              return (
                <div key={key} className={tabClassName} onClick={this.handleClick.bind(this, name)}>
                  { child.props.label }
                </div>
              );
            })
          }
        </div>

        <div className="tabs-body">
          {
            Children.map(children, (child, key) => {
              const name = child.props.name;
              const tabClassName = `tab-content ${activeName !== name ? 'tab-content-hidden' : ''}`;

              return (
                <div key={key} className={tabClassName}>
                  { child }
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
