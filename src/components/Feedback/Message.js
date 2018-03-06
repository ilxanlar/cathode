import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../Icon/Icon';
import { message as propTypes } from '../../helpers/propTypes';

const IconWrapper = styled.span`
  ${Icon} {
    font-size: 150%;
    line-height: 1;
  }
`;

const Description = styled.div`
  line-height: 20px;
`;

const Title = styled.div`
  font-size: 110%;
  font-weight: ${props => props.theme.message.titleFontWeight};
  line-height: 20px;
  text-transform: uppercase;

  & + ${Description} {
    margin-top: 10px;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  margin-left: ${props => props.theme.message.padding}px;
  margin-right: ${props => props.theme.message.padding}px;
`;

const Close = styled.a`
  color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: block;
  font-size: 150%;
  line-height: 20px;
  margin-bottom: -1px;
  margin-top: 2px;
  text-align: center;
  transition: ${props => props.theme.common.transitionAll};

  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;

const CloseWrapper = styled.span``;

class MessageRaw extends React.Component {
  state = {
    closed: false
  };

  timeout = undefined;

  componentDidMount() {
    if (this.props.autoCloseAfter) {
      this.timout = window.setTimeout(this.handleClose, this.props.autoCloseAfter);
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }
  }

  handleClose = () => {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }

    this.setState({ closed: true });

    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  render() {
    if (this.state.closed) {
      return null;
    }

    const { className, icon, closable, children, mood } = this.props;

    let iconTag;
    if (icon === true) {
      iconTag = <Icon nameDefault={mood} />;
    } else if (icon) {
      iconTag = <Icon name={icon} />;
    }

    return (
      <div className={className}>
        {
          icon ?
            <IconWrapper>
              {iconTag}
            </IconWrapper> : null
        }

        <Content children={children} />

        {
          closable && (
            <CloseWrapper>
              <Close onClick={this.handleClose}>×</Close>
            </CloseWrapper>
          )
        }
      </div>
    );
  }
}

const messageCss = ({ mood, moodyBg, theme }) => css`
  background-color: ${moodyBg ? theme.moods[mood].light : theme.colors.white};
  border: 2px solid ${moodyBg ? 'transparent' : theme.moods[mood].light};
  border-radius: ${theme.common.radius}px;
  padding: ${theme.message.padding}px;
  transition: ${theme.common.transitionAll};

  ${Icon}, ${Title} {
    color: ${theme.moods[mood].original};
  }
`;

const Message = styled(MessageRaw)`
  display: flex;
  flex-direction: row;
  position: relative;
  ${messageCss}
`;

Message.propTypes = propTypes;

Message.defaultProps = {
  mood: 'info',
  moodyBg: false,
  icon: true,
  closable: false
};

Message.Icon = Icon;
Message.Close = Close;
Message.Title = Title;
Message.Description = Description;
Message.Desc = Description;

export default Message;
