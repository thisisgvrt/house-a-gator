import React from "react";
import "../css/login.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import {
  setEmail,
  setPassword,
  setIsLoggedIn,
} from "../redux/actions/userActions";
const Login = ({
  email,
  password,
  isLoggedIn,
  dispatch
}) => {
  const [isErrorMessage, setIsErrorMessage] = React.useState(false);

  const handleLogIn = () => {

    if (email === "" || password === "") {
      setIsErrorMessage(true);
    }
    else {
      const loginData = {
        email,
        password,
      };

      axios
        .post("/api/auth/authenticate", { loginData })
        .then((response) => {
          if (response.data.status === "OK") {
            dispatch(setIsLoggedIn(true));
          } else {
            setIsErrorMessage(true);
            dispatch(setIsLoggedIn(false));
          }
        });
    }
  };
  return (
  <div class="container py-5">
    <div class="card card-outline-secondary justify-content-center" style={{ "padding": "3%" }}>
      <div class="card-header ">
        <h1 class="mb-0">Log in</h1>
      </div>
      <div class="card-body">
        <form class="form" role="form" autoComplete="off" id="loginForm" novalidate="" method="POST">
          <div class="form-group">
            <label for="inputEmail">Email address:</label>
            <input type="email" class="form-control" id="inputEmail" onChange={(event) => dispatch(setEmail(event.target.value))} placeholder="name@example.com"></input>
          </div>
          <div class="form-group">
            <label for="inputPassword">Password:</label>
            <input type="password" placeholder="input password" onChange={(e) => dispatch(setPassword(e.target.value))} class="form-control" id="inputPassword" autocomplete="new-password" aria-describedby="passwordHelp"></input>
            <small id="passwordHelp" >
              <a class="nav-link" href="#">Forgot password?</a>
            </small>

          </div>
          <ul class="list-inline">
            <li class="list-inline-item"><button type="submit" class="btn btn-info" onClick={handleLogIn} >Sign In</button></li>
            <li class="list-inline-item"><p>New User?</p></li>
            <li class="list-inline-item"><a class="nav-link" href="#">Signup here</a></li>
          </ul>
        </form>


        <div >
          {isErrorMessage && <b> The Email and/or Password you specified are not correct</b>}
        </div>
      </div>
    </div>
  </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.userReducer.email,
    password: state.userReducer.password,
    isLoggedIn: state.userReducer.isLoggedIn,

  };
};
export default connect(mapStateToProps)(Login);