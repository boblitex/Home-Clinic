import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Navbar({nav, navv, navvv}) {

  const signout = ()=>{
    if(window.localStorage){
      localStorage.removeItem('jwt');
      localStorage.clear();
    }
  }
  return (
    <div>
      <nav>
        <ul className="nav-bar">
          <Link className="navlink" to="/">
            <li>{nav}</li>
          </Link>          
          <Link 
          onClick = {signout}
          className="navlink right-menu" to="/signin">
            <li>{navv}</li>
          </Link>
          <Link className="navlink" to="/register">
            <li>{navvv}</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
