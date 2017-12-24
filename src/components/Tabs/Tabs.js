import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../Button/Button';
import ButtonGroup from '../Button/ButtonGroup';
import Card from '../Card/Card';
import { tabs as propTypes } from '../../helpers/propTypes';

const buttonActiveCss = ({ tabMood, theme }) => css`
  background-color: ${theme.colors.white} !important;
  border-top-color: ${theme.moods[tabMood].original} !important;
  color: ${theme.moods[tabMood].original} !important;
`;

const buttonCss = ({ tabIsActive, tabMood, theme }) => css`
  font-size: ${props => props.theme.fontSizes.lg}px;
  padding-bottom: ${props => props.theme.spaces.lg}px;
  padding-top: ${props => props.theme.spaces.lg}px;
  ${tabIsActive ? buttonActiveCss({ tabMood, theme }) : undefined}
`;

const TabButton = styled(Button)`
  border-bottom-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 5px;
  margin-left: 0 !important;
  margin-right: 0 !important;
  ${buttonCss}
`;

const TabsNav = styled(ButtonGroup)`
  display: flex;
  flex-direction: row;
  margin-top: -2px;
  overflow: auto;
  white-space: nowrap;

  ${TabButton} {
    flex-grow: 1;

    &:first-child {
      border-bottom-left-radius: 0;
    }
    
    &:last-child {
      border-bottom-right-radius: 0;
    }
  }
`;

class TabsRaw extends React.Component {
  state = {};

  componentWillMount() {
    if (this.props.activeTab === 0 || this.props.activeTab >= 1) {
      this.setState({ activeTab: this.props.activeTab });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeTab !== this.props.activeTab) {
      const activeTab = typeof nextProps.activeTab === 'undefined' || nextProps.activeTab === null ? 0 : nextProps.activeTab;

      this.setState({ activeTab });

      if (this.props.onTabChange) {
        this.props.onTabChange(activeTab);
      }
    }
  }

  handleClick = activeTab => {
    this.setState({ activeTab });

    if (this.props.onTabSelect) {
      this.props.onTabSelect(activeTab);
    }
  };

  render() {
    const { cardProps, className, children, mood } = this.props;
    const activeIndex = this.state.activeTab;
    let theChild = React.Children.toArray(children);
    theChild = theChild && theChild[activeIndex] ? theChild[activeIndex] : undefined;

    return (
      <div className={className}>
        <Card {...cardProps}>
          <TabsNav>
            {
              React.Children.map(children, (child, key) => {
                if (!child || !child.props.label) {
                  return null;
                }

                return (
                  <TabButton
                    key={key}
                    mood="tertiary"
                    onClick={this.handleClick.bind(this, key)}
                    tabIsActive={activeIndex === key}
                    tabMood={mood}
                    wide
                  >
                    {child.props.label}
                  </TabButton>
                );
              })
            }
          </TabsNav>

          <Card.Content>
            {theChild}
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const Tabs = styled(TabsRaw)``;

Tabs.Tab = styled.div`
  animation: 0.5s ${props => props.theme.keyframes.fadeIn};
`;

Tabs.propTypes = propTypes;

Tabs.defaultProps = {
  activeTab: 0,
  mood: 'primary'
};

export default Tabs;