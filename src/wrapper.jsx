import React from "react";
import Navbar from "./Nav";
import Signin from "./Signin";
import Info from "./Info";
import Register from "./Register";
import { Switch, Route } from "react-router-dom";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Navbar nav={"Home"} navv={"Sign in"} navvv={"Register"} />
      <div className="home-body pa5">
        <Info />
        <Switch>
          <Route exact path='/signin' component={Signin} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </div>
  );
};

export default Wrapper;
