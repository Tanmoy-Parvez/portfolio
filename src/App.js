import React from "react";
import './App.css';
import Home from './Components/Home/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from "./Components/NoMatch/NoMatch";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import Work from "./Components/Home/Work/Work";
import Navbar from "./Components/Home/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/Home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/work">
          <Work></Work>
        </Route>
        <Route path="/contact">
          <ContactUs></ContactUs>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
