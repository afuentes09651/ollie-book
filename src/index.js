import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute} from 'react-router-dom'
import App from './components/App';
import Header from './components/Header'

render((
  <div>
    <App />
  </div>

), document.getElementById('root'));
