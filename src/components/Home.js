import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Embed from './Embed';
import ewok from '../photos/ewok.png'

const Home = () => (
  <>
  <h2>Hello there, Ollie lover!</h2>
  <div class='info'>
    <img src={ewok}  class='ewok' align='left'/> //this needs to be fixed
    <p align='right'>This is the webpage for all things Ollie. Feel free to like and subscribe!</p>
      <div>
        <Link to='/Home/Embed'>idk</Link>
        <Switch>
          <Route path='/Home/Embed' component={Embed}/>
        </Switch>
      </div>
  </div>
  </>
)

export default Home
