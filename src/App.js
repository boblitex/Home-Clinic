import React from "react";
import Wrapper from "./wrapper";
import Dashboard from "./Dashboard";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Switch>        
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/" component={Wrapper} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
