import React from "react";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/how-it-works">
            <h1>How it works</h1>
          </Route>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
