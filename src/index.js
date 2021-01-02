import React, {Component} from 'react'
import { render} from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
//import custom styles here

import {IndexRoute} from "react-router";

import App from './components/App';
import Home from './components/Home';

render((
<Router>
  <Route path="/" component={App}>
  </Route>
</Router>

), document.getElementById('root'));
