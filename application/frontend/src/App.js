import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import swetha from "./pages/profile/swetha";
import kevin from "./pages/profile/kevin";

function App() {
  return (
    <div className="App">
           <Router>
           <Link to="/Aboutus">About Us</Link>
           <Switch>
             /// if new js page added .. you need to add in route in this file(App.js) like below
          <Route path="/Aboutus" component={Aboutus} />
          <Route path="/swetha" component={swetha} />
          <Route path="/kevin" component={kevin} />

          </Switch>
          </Router>
    </div>
  );
}

export default App;
