import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Feed from './components/Feed';
import Login from './components/Login';
import LoginGate from './components/LoginGate';

const Routes = () => (
  <BrowserRouter>
    {/* <Navbar /> */}
    <Switch>
      <Route path="/login" component={Homepage} />
      <LoginGate>
        <Route path="/" component={Feed} />
      </LoginGate>
    </Switch>
  </BrowserRouter>
);

export default Routes;
