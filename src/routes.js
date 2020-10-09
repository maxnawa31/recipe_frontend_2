import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Feed from './components/Feed'
import Login from './components/Login';
import LoginGate from './components/LoginGate'

const Routes = () => (
  <BrowserRouter>
    {/* <Navbar /> */}
    <Switch>
      <LoginGate>
        <Route path="/feed" component={Feed} />
      </LoginGate>
      <Route path="/" component={Homepage} />
    </Switch>
  </BrowserRouter>
);


export default Routes;