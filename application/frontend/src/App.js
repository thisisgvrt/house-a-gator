import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import swetha from "./pages/profile/swetha";
import kevin from "./pages/profile/kevin";
import ravi from "./pages/profile/ravi";
import troy from "./pages/profile/troy";
import fiona from "./pages/profile/fiona";

function App() {
  return (
    <div className="App container" style={{ "padding-top": "2%" }}>
      <Router>
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-gray border rounded-lg">
          <h3 class="my-0 mr-md-auto font-weight-bolder">Team 02</h3>
          <nav class="my-2 my-md-0 mr-md-3">
            <Link to="/About-us">
              <button class="p-2 btn btn-link" href="#" style={{ "font-size": "1.45rem" }}>About us</button>
            </Link>
          </nav>
        </div>
        <Switch>
          /// if new js page added .. you need to add in route in this file(App.js) like below
          <Route path="/About-us" component={Aboutus} />
          <Route path="/swetha" component={swetha} />
          <Route path="/kevin" component={kevin} />
          <Route path="/ravi" component={ravi} />
          <Route path="/troy" component={troy} />
          <Route path="/fiona" component={fiona} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
