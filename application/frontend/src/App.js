import React from 'react';
import { connect } from "react-redux";

//import './App.css';
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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


const App = (isLoggedIn,dispatch) => {

  let listing = [];
  const [listingLists, setlistingLists] = React.useState([]);
  const listListing = () => {  
    axios.get("/api/listing/getAll")
      .then((res) => {
        for (let i = 0; i < res.data.listing.length; i++) {
          listing.push(res.data.listing[i]);
        }
        setlistingLists(listing);
      })
      .catch(e => "error loading the list listing" + e)
  }
  React.useEffect(() => {
    listListing();
  }, []);

  return (
    <Router>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  
    </button>
    <a class="navbar-brand" href="#">    <img src={require(`./images/house-a-gator-v2-transparent 1.png`)} class="card-img-top" alt="Raviteja" />
  </a>
  
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="/" style={{ "font-size": "1.45rem" }}>House-a-Gator <span class="sr-only">(current)</span></a>
        </li>
        <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{"height": "31.79px","left": "388px"}}></input>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
        <li class="nav-item">
          <a class="nav-link" style={{ "font-size": "1.45rem" }} href="/listingPage">Post</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{ "font-size": "1.45rem" }} href="/About-us">Aboutus</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{ "font-size": "1.45rem" ,"  align-items": "right"}} href="/Login">Signin</a>
        </li>
        
      </ul>
     
    </div>
  </nav>
      {/* // <div className="App container" style={{ "padding-top": "2%" }}>
    //   <Router>
    //     <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-gray border rounded-lg">
    //       <h3 class="my-0 mr-md-auto font-weight-bolder">Team 02</h3>
    //       <nav class="my-2 my-md-0 mr-md-3">
    //       <Link to="/login">
    //           <button class="p-2 btn btn-link" href="#" style={{ "font-size": "1.45rem" }}>Log In</button>
    //         </Link>
    //         <Link to="/About-us">
    //           <button class="p-2 btn btn-link" href="#" style={{ "font-size": "1.45rem" }}>About us</button>
    //         </Link>
    //         <Link to="/navbar">
    //           <button class="p-2 btn btn-link" href="#" style={{ "font-size": "1.45rem" }}>Navbar</button>
    //         </Link>
    //       <Link to="/Login">
    //           <button class="p-2 btn btn-link" href="#" style={{ "font-size": "1.45rem" }}>Login</button>
    //         </Link> 
    //       </nav>
    //     </div>*/}
        <Switch>
          <Route path="/About-us" component={Aboutus} />
          <Route path="/login" component={login}/>
          <Route path="/listingPage" component={listingPage}/>

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
