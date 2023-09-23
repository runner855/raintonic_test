import React from 'react';
import { Link } from 'react-router-dom';
import "../NavBar/NavBar.css"

const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/favourites">Favourites</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;