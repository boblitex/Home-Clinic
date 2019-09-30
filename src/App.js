import React from "react";
import Navbar from "./Nav";
// import Signin from "./Signin";
import Info from "./info";
import Register from "./Register";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="home-body pa5">
        <Info />
        <Register />
      </div>
    </div>
  );
}

export default App;
