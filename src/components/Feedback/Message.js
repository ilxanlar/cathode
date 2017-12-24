import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../Icon/Icon';
import { getScreenProp, hasScreenProp } from '../../helpers/utils';
import { message as propTypes } from '../../helpers/propTypes';
import mediaQuery from '../../config/mediaQuery';

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
        {icon ? iconTag : null}

        <Content children={children} />

        {
          closable && (
            <span>
              <Close onClick={this.handleClose}>×</Close>
            </span>
          )
        }
      </div>
    );
  }
}

const messageCss = ({ borderColor, borderWidth, mood, moodyBg, theme }) => css`
  background-color: ${moodyBg ? theme.moods[mood].light : theme.colors.white};
  border: 1px solid ${moodyBg ? 'transparent' : theme.colors.lightB};
  border-radius: 5px;
  transition: ${theme.common.transitionAll};

  ${Icon}, ${Title} {
    color: ${theme.moods[mood].original};
  }

  ${Icon} {
    font-size: 150%;
    line-height: 1;
    margin-top: -2px;
  }
`;

const messagePaddingCss = screenName => props => {
  if (hasScreenProp(screenName, 'padding', props)) {
    const paddingSize = getScreenProp(screenName, 'padding', props);
    const padding = props.theme.spaces[paddingSize];

    return css`
      padding: ${padding}px;

      ${Content} {
        margin-left: ${padding}px;
        margin-right: ${padding}px;
      }
    `;
  }
};

const messageSideBordersCss = ({ mood, sideBordersWidth, theme }) => css`
  border-left-color: ${theme.moods[mood].original};
  border-left-width: ${sideBordersWidth}px;
  border-right-color: ${theme.moods[mood].original};
  border-right-width: ${sideBordersWidth}px;
`;

const Message = styled(MessageRaw)`
  display: flex;
  flex-direction: row;
  position: relative;
  ${messageCss}
  ${mediaQuery.xxs`${messagePaddingCss('xxs')}`}
  ${mediaQuery.xs`${messagePaddingCss('xs')}`}
  ${mediaQuery.sm`${messagePaddingCss('sm')}`}
  ${mediaQuery.md`${messagePaddingCss('md')}`}
  ${mediaQuery.lg`${messagePaddingCss('lg')}`}
  ${mediaQuery.xl`${messagePaddingCss('xl')}`}
  ${mediaQuery.xxl`${messagePaddingCss('xxl')}`}
  ${props => props.sideBorders ? messageSideBordersCss(props) : undefined}
`;

Message.propTypes = propTypes;

Message.defaultProps = {
  mood: 'info',
  moodyBg: false,
  sideBorders: false,
  sideBordersWidth: 5,
  icon: true,
  closable: false,
  paddingXxs: 'md'
};

Message.Icon = Icon;
Message.Close = Close;
Message.Title = Title;
Message.Description = Description;
Message.Desc = Description;

export default Message;