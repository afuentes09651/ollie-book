import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => (
  <nav class='navbar navbar-expand-lg mynav'>
    <ul class ='navbar-nav'>
      <Link to='/home' class='nav-link'>Home</Link>
      <Link to='/about' class='nav-link'>Kitty</Link>
        <Link to='/wubba' class='nav-link'>Wubba</Link>
    </ul>
  </nav>
)

export default Nav
