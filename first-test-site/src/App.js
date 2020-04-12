import React from 'react';
import Navbar from "./components/Navigation/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./containers/Homepage/Homepage";
import About from "./containers/About/About";
import Blog from "./containers/Blog/Blog";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Route path="/" exact render={props => (
        <React.Fragment>
        <Homepage />
        </React.Fragment>
      )} />
      <Route path="/about" render={props => (
        <About />
      )} />
      <Route path="/blog" render={props => (
        <Blog />
      )} />
       <Route path="/todo" render={props => (
        <div></div>
      )} />
      </Router>
      
    </div>
  );
}

export default App;
