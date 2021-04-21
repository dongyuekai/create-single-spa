import React from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'
import Home from './home'
import About from './about'

export default function Root(props) {
  return (
    <BrowserRouter basename='/todos'>
      <div>
        <Link to='/home'>home</Link>
        <Link to='/about'>about</Link>
      </div>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
