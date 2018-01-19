import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle, Theme, variables } from '../../src';
import Nav from './Nav';
import containers from './containers';

variables.fonts.primary = 'Arial';
variables.fonts.primary = 'Arial';
variables.common.fontPrimary = 'Arial';

const Wrapper = styled.div`
  margin-left: 180px;
  padding: 50px;

  h1 {
    font-size: 24px;
    font-weight: 400;
    margin: 0 0 50px 0;
    padding: 0;
  }
`;

const App = () => (
  <Router>
    <Theme>
      <GlobalStyle />

      <Nav />

      <Wrapper>
        <Switch>
          <Route exact path="/button" component={containers.Button} />
          <Route exact path="/button-group" component={containers.Button} />
          <Route exact path="/dropdown" component={containers.Dropdown} />
          <Route exact path="/grid" component={containers.Grid} />
          <Route exact path="/message" component={containers.Message} />
          <Route exact path="/modal" component={containers.Modal} />
          <Route exact path="/popover" component={containers.Popover} />
          <Route exact path="/tooltip" component={containers.Tooltip} />
          <Route path="*" component={containers.NotFound} />
        </Switch>
      </Wrapper>
    </Theme>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
