import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => (
  <nav>
    <Link to='/home'>
      <button>Home</button>
    </Link>
    <Link to='/about'>
      <button>Kitty</button>
    </Link>
      <Link to='/wubba'>
        <button>idk</button>
      </Link>
  </nav>
)

export default Nav
