import React from "react";
import Navbar from "./Nav";
import Signin from "./Signin";
import Info from "./Info";
import Register from "./Register";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import {ThemeProvider, CSSReset} from "@chakra-ui/core";

function App() {
  return (
    <ThemeProvider>
      <CSSReset/>
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
    </ThemeProvider>
    
  );
}

export default App;
