import React from 'react';
import Home from './Home';
import Wubba from './Wubba';
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <div>
    <Switch>
      <Route path='home' component={Home}/>
      <Route path='wubba' component={Wubba}/>
    </Switch>
  </div>
)
export default Main;
