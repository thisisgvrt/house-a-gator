import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Aboutus from "./pages/Aboutus";

function App() {
  return (
    <div className="App">
           <Router>
           <Link to="/Aboutus">About Us</Link>
           <Switch>
          <Route path="/Aboutus" component={Aboutus} />
          </Switch>
          </Router>
    </div>
  );
}

export default App;
