import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const ScrollbarContainer = styled.div`
  background: rgba(0, 0, 0, 0.05);
  border-radius: ${props => props.scrollbarWidth / 2}px;
  bottom: 5px;
  overflow: hidden;
  position: absolute;
  right: 5px;
  top: 5px;
  width: ${props => props.scrollbarWidth}px;
`;

const Scrollbar = styled.div`
  background: rgba(0, 0, 0, 0.1);
  border-radius: ${props => props.scrollbarWidth / 2}px;
  height: 30px;
  position: absolute;
  right: 0;
  width: ${props => props.scrollbarWidth}px;
`;

const Content = styled(Card.Content)`
  height: 100%;
  overflow-y: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled(Card)`
  ${props => props.enableHorizontal ? `padding-right: ${2 * props.scrollbarWidth}px;` : undefined}
  position: relative;
  ${props => props.cHeight ? `height: ${props.cHeight}` : undefined};
`;

class ScrollViewRaw extends React.Component {
  nodes = {};

  componentDidMount() {
    if (typeof this.props.height !== 'undefined') {
      this.init();
    }
  }

  refHandler = name => node => this.nodes[name] = node;

  init() {
    const container = this.nodes.scrollbarContainer;
    const content = this.nodes.content;
    const scroll = this.nodes.scrollbar;

    content.addEventListener('scroll', (e) => {
      scroll.style.height = container.clientHeight * content.clientHeight / content.scrollHeight + 'px';
      scroll.style.top = container.clientHeight * content.scrollTop / content.scrollHeight + 'px';
    });

    const event = new Event('scroll');

    window.addEventListener('resize', content.dispatchEvent.bind(content, event));
    content.dispatchEvent(event);

    scroll.addEventListener('mousedown', (start) => {
      start.preventDefault();
      const y = scroll.offsetTop;
      const onMove = (end) => {
        const delta = end.pageY - start.pageY;
        scroll.style.top = Math.min(container.clientHeight - scroll.clientHeight, Math.max(0, y + delta)) + 'px';
        content.scrollTop = (content.scrollHeight * scroll.offsetTop / container.clientHeight);
      };

      document.addEventListener('mousemove', onMove);

      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMove);
      });
    });
  }

  render() {
    const { children, className, height, scrollbarWidth, ...cardProps } = this.props;
    const containerProps = {
      className
    };

    let enableHorizontal = false;

    if (typeof height !== 'undefined') {
      enableHorizontal = true;
      containerProps.cHeight = typeof height === 'string' ? height : `${height}px`;
    }

    return (
      <Container {...cardProps} {...containerProps} scrollbarWidth={scrollbarWidth} enableHorizontal={enableHorizontal}>
        {
          enableHorizontal && (
            <ScrollbarContainer innerRef={this.refHandler('scrollbarContainer')} scrollbarWidth={scrollbarWidth}>
              <Scrollbar
                innerRef={this.refHandler('scrollbar')}
                scrollbarWidth={scrollbarWidth}
              />
            </ScrollbarContainer>
          )
        }

        <Content innerRef={this.refHandler('content')} scrollbarWidth={scrollbarWidth}>
          {React.Children.map(children, child => child)}
        </Content>
      </Container>
    );
  }
}

const ScrollView = styled(ScrollViewRaw)``;

ScrollView.propTypes = {
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  scrollbarWidth: PropTypes.number
};

ScrollView.defaultProps = {
  scrollbarWidth: 6
};

export default ScrollView;