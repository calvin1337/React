import React from 'react';
import './App.css';
import Homepage from "./Containers/Homepage/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Route} from 'react-router-dom'
import Nav from "./Components/Nav/Nav"

function App() {
  return (
    <div className="App">
      <Router >
      <Nav />
      <Route Route path="/" component={Homepage} />
      </Router>
    </div>
  );
}

export default App;
