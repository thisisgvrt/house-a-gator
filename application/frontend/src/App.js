import React, { useEffect } from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/House-a-Gator.css';

import Aboutus from "./pages/Aboutus";
import login from "./pages/login";
import listingPage from "./pages/listing";
import swetha from "./pages/profile/swetha";
import kevin from "./pages/profile/kevin";
import ravi from "./pages/profile/ravi";
import troy from "./pages/profile/troy";
import fiona from "./pages/profile/fiona";
import ashwini from "./pages/profile/ashwini";
import henry from "./pages/profile/henry";

import Homepage from "./pages/HomePage";

const App = (isLoggedIn, dispatch) => {

  const [searchTerm, setSearchTerm] = React.useState("");

  const [listingType, setListingType] = React.useState("");

  const [listings, setListings] = React.useState([]);

  const fetchListings = () => {
    axios.get(`/api/listings?query=${searchTerm}`+ (listingType !== "" ? `&listing_type=${listingType}`:""))
      .then((res) => {
        setListings(res.data);
      })
      .catch(e => "error loading the list listing" + e)
  }

  useEffect(async () => {
    fetchListings();
  }, []);

  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded-lg">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/">    <img src={require(`./images/house-a-gator-v2-transparent 1.png`)} alt="Logo" />
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link logo" href="/">House-a-Gator</a>
            </li>
            <li class="ml-sm-4 mt-sm-2 nav-item">
              <form class="form-inline nav-link-line-height">
                <input class="form-control mr-sm-2" type="search" placeholder="Search by title" aria-label="Search" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} ></input>
                <select class="custom-select mr-sm-2" value={listingType} onChange={event => setListingType(event.target.value)} >
                  <option selected value="">All Listing Types</option>
                  <option value="Houses">Houses</option>
                  <option value="Condos">Condos</option>
                  <option value="Apartments">Apartments</option>
                  <option value="Town Houses">Town Houses</option>
                </select>
                <button class="btn btn-outline-success" type="button" onClick={fetchListings} >Search</button>
              </form>
            </li>

            <li class="ml-sm-5 nav-item">
              <NavLink exact className="nav-link nav-link-line-height" activeClassName="active nav-link nav-link-line-height" to="/">Listings</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link nav-link-line-height" activeClassName="active nav-link nav-link-line-height" to="/listingPage">Post</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link nav-link-line-height" activeClassName="active nav-link nav-link-line-height" to="/About-us">About-us</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link nav-link-line-height" activeClassName="active nav-link nav-link-line-height" to="/Login">Sign-in</NavLink>
            </li>

          </ul>

        </div>
      </nav>
      <Switch>
        <Route path="/About-us" component={Aboutus} />
        <Route path="/login" component={login} />
        <Route path="/listingPage" component={listingPage} />
        <Route path="/" render={(props) => <Homepage listings={listings} />} />
        <Route path="/swetha" component={swetha} />
        <Route path="/kevin" component={kevin} />
        <Route path="/ravi" component={ravi} />
        <Route path="/troy" component={troy} />
        <Route path="/fiona" component={fiona} />
        <Route path="/ashwini" component={ashwini} />
        <Route path="/henry" component={henry} />
      </Switch>
    </Router>
    // </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps)(App);
