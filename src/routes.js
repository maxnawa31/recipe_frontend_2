import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';


const Routes = () => (
  <BrowserRouter>
    {/* <Navbar /> */}
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);


export default Routes;