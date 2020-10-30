import React from "react";
import './App.css';
import Home from './Components/Home/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Project from "./Components/Project/Project";
import NoMatch from "./Components/NoMatch/NoMatch";
import Resume from "./Components/Resume/Resume";
import About from "./Components/About/About";
import Blog from "./Components/Home/Blog/Blog";
import BlogPage from "./Components/BlogPage/BlogPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/Home">
          <Home></Home>
        </Route>
        <Route path="/project">
          <Project></Project>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/blog">
          <BlogPage></BlogPage>
        </Route>
        
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
