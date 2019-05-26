
/** @jsx jsx */
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ParticlesContainer from './ParticlesContainer';
import Home from './Home';
import Resume from './Resume';

import {css, jsx} from '@emotion/core';

const rootStyle = css`
  background: black;
  width: 100%;
  height: 100vh;
`;

function App() {
  
  return (
    <div css={rootStyle}>
      <ParticlesContainer>
        <BrowserRouter basename="/">
          <Switch>
            <Redirect exact from="/" to="home" />
            <Route path="/home" component={Home} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </BrowserRouter>
      </ParticlesContainer>
    </div>
  );
}

export default App;