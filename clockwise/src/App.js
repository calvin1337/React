import React from 'react';
import './App.css';
import Homepage from "./Containers/Homepage/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router , Route} from 'react-router-dom'
import AboutIntro from "./Components/Homepage/AboutIntro";

import Nav from "./Components/Nav/Nav"
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router >
      <Nav />
      <Route Route path="/" exact component={Homepage} />

      <Route path="/about" render={AboutIntro} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
