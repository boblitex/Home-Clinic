import React from 'react';
import Navbar from './Nav';
import Signin from './Signin';
import Info from './info';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <div className="home-body pa5">
        <Info/>
        <Signin />
      </div>
    </div>
  );
}

export default App;
