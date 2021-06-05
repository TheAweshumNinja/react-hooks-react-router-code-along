import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;