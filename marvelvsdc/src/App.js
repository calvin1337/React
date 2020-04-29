import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
export class App extends Component {


  render() {

    return (
      <div className="app">
        <Router>
        <NavBar />

        <Route path="/" exact render={props => (
        <React.Fragment>
        <h1>Test</h1>
        </React.Fragment>
      )} />
      <Route path="/about" render={props => (
        <h1>About</h1>
      )} />
        </Router>
      </div>

    )
  }
}

export default App
