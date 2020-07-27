import React, { useEffect } from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, match, NavLink } from "react-router-dom";

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
import signup from "./pages/signup";
import ListingDetail from "./pages/ListingDetail";
import userDashBoard from "./pages/userDashboard";

import {
  setIsLoggedIn,
} from "./redux/actions/userActions";

const App = ({ isLoggedIn, dispatch }) => {

  const [searchTerm, setSearchTerm] = React.useState("");
  const [listingType, setListingType] = React.useState("");
  const [listingCategory, setListingCategory] = React.useState("");
  const [distance, setDistance] = React.useState("");
  const [listings, setListings] = React.useState([]);

  const handleLogout = () => {
    axios.delete("/api/session")
      .then(() => {
        console.log("logout successful")
        dispatch(setIsLoggedIn(false));
      })
      .catch(e => "error loading the list listing" + e)
  }

  const checkLogin = () => {
    axios.get("/api/session")
      .then(() => {
        console.log("auth check successful")
        dispatch(setIsLoggedIn(true));
      })
      .catch(e => "error loading the list listing" + e)
  }
  const fetchListings = () => {
    axios.get(`/api/listings?query=${searchTerm}` + (listingType !== "" ? `&listing_type=${listingType}` : "") + (listingCategory !== "" ? `&listing_category=${listingCategory}` : "") + (distance !== "" ? `&distance=${distance}` : ""))
      .then((res) => {
        setListings(res.data);
      })
      .catch(e => "error loading the list listing" + e)
  }

  useEffect(async () => {
    fetchListings();
    checkLogin();
  }, []);

  return (

    <Router forceRefresh={true}>

      <div class="alert alert-light top-banner d-flex justify-content-center align-items-center">
        <p className="font-weight-bold text-uppercase text-muted" style={{ "margin-top": "0.5rem", "margin-bottom": "0.5rem" }}>
          SFSU Software Engineering Project CSC 648-848, Summer 2020. For Demonstration Only
          </p>
      </div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded-lg">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/">    <img src={require(`./images/house-a-gator-v2-transparent 1.png`)} alt="Logo" />
        </a>
        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo03">
          <ul className="navbar-nav d-flex w-40 justify-content-between">
            <li class="nav-item active">
              <a class="nav-link logo" href="/">House-a-Gator</a>
            </li>
            <li class="ml-sm-4 mt-sm-2 nav-item">
              <form class="form-inline nav-link-line-height">
                <input class="form-control mr-sm-2" type="search" placeholder="Search by title" aria-label="Search" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} ></input>
                <select class="custom-select mr-sm-2" value={listingType} onChange={event => setListingType(event.target.value)} >
                  <option selected value="">All Types</option>
                  <option value="True">Rent</option>
                  <option value="False">Sell</option>
                </select>
                <select class="custom-select mr-sm-2" value={listingCategory} onChange={event => setListingCategory(event.target.value)} >
                  <option selected value="">All Categories</option>
                  <option value="Houses">Houses</option>
                  <option value="Condos">Condos</option>
                  <option value="Apartments">Apartments</option>
                  <option value="Town Houses">Town Houses</option>
                </select>
                <select class="custom-select mr-sm-2" value={distance} onChange={event => setDistance(event.target.value)} >
                  <option selected value="">Any distance from SFSU</option>
                  <option value={1}>Within 1 mile</option>
                  <option value={5}>Within 5 miles</option>
                  <option value={10}>Within 10 miles</option>
                  <option value={50}>Within 50 miles</option>
                </select>
                <button class="btn btn-outline-success" type="button" onClick={fetchListings} >Search</button>
              </form>
            </li>
          </ul>
          <ul className="navbar-nav d-flex justify-content-between" style={{ "width": "30em" }}>
            <li class="nav-item">
              <NavLink className="nav-link nav-link-line-height" activeClassName="active nav-link nav-link-line-height" to="/listingPage">Post</NavLink>
            </li>
            {isLoggedIn && (
            <li class="nav-item">
              <NavLink className="nav-link nav-link-line-height" activeClassName="active nav-link nav-link-line-height" to="/userDashBoard">My DashBoard</NavLink>
            </li>)}
            {!isLoggedIn && (
            <li class="nav-item">
              <NavLink className="nav-link nav-link-line-height" activeClassName="active nav-link nav-link-line-height" to="/Login">SignIn</NavLink>
            </li>)}
             {!isLoggedIn && (
             <li class="nav-item">
             <NavLink className="nav-link nav-link-line-height" activeClassName="active nav-link nav-link-line-height" to="/signup">SignUp</NavLink>
           </li>
            )}
            {isLoggedIn && (
              <li class="nav-item">
                <a className="nav-link nav-link-line-height" activeClassName="active nav-link nav-link-line-height" href="#" onClick={handleLogout}>Logout</a>
              </li>
            )}
             <li class="nav-item">
              <NavLink className="nav-link nav-link-line-height" activeClassName="active nav-link nav-link-line-height" to="/About-us">About-us</NavLink>
            </li>
          </ul>

        </div>
      </nav>

      <Switch>
        <Route path="/About-us" component={Aboutus} />
        <Route path="/login" component={login} />
        <Route path="/listingPage" component={listingPage} />
        {/* <Route exact path="/" component={Homepage} /> */}
        <Route path="/signup" component={signup} />
        <Route exact path="/" render={(props) => <Homepage {...props} listings={listings} />} />
        <Route path='/listingDetail/:listingId' render={(props) => <ListingDetail {...props} listings={listings} isLoggedIn={isLoggedIn} />} />
        <Route  path='/userDashBoard' component={userDashBoard}/> 
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
