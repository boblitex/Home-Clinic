import React from 'react';
import './Nav.css';

function Navbar (){
    return (
      <div>
        <nav>
          <ul className='nav-bar'>
            <li>
              <a href="#">Home</a>
            </li>
            <li className='right-menu'>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Log in</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
          </ul>
        </nav>
      </div>
    );

}

export default Navbar;
