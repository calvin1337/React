import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Containers/Homepage/Homepage"
export class App extends Component {


  render() {

    return (
      <div className="app">
        <Router>
        <NavBar />

        <Route path="/" exact render={props => (
        <React.Fragment>
        <Homepage />
        </React.Fragment>
      )} />
      <Route path="/about" render={props => (
        <h1>About</h1>
      )} />
       <Route path="/play" render={props => (
          <h1>Play</h1>
        )} />
        </Router>
       
      </div>

    )
  }
}

export default App
