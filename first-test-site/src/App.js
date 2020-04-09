import React from 'react';
import Navbar from "./components/Navigation/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./containers/Homepage/Homepage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Route path="/" exact render={props => (
        <React.Fragment>
        <Header />
        <Homepage />
        </React.Fragment>
      )} />
      <Route path="/about" render={props => (
        <div>ABOUT</div>
      )} />
      <Route path="/blog" render={props => (
        <div>BLOG</div>
      )} />
      </Router>
      
    </div>
  );
}

export default App;
