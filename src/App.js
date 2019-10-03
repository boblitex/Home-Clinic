import React from "react";
import Navbar from "./Nav";
import Signin from "./Signin";
import Info from "./info";
import Register from "./Register";
import "./App.css";
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <div className="home-body pa5">
        <Info />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
