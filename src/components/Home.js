import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Embed from './Embed';

const Home = () => (
  <>
  <h2>Hello there, Ollie lover!</h2>
  <div class='info'>
    <img src={require('../photos/ewok.png')} /> //this needs to be fixed
    <p>This is the webpage for all things Ollie. Feel free to like and subscribe!</p>
      <div>
        
        <Link to='/Home/Embed'>
          <button>idk</button>
        </Link>

        <Switch>
          <Route path='/Home/Embed' component={Embed}/>
        </Switch>

      </div>
  </div>
  </>
)

export default Home
