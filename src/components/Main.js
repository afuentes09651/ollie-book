import React from 'react';
import Home from './Home';
import Wubba from './Wubba';
import About from './About';
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <div>
    <Switch>
      <Route path='/home' component={Home}/>
      <Route path='/wubba' component={Wubba}/>
      <Route path='/about' component={About}/>
    </Switch>
  </div>
)
export default Main;
