import React from "react";
import "../css/login.css"
import 'bootstrap/dist/css/bootstrap.css';
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
  <form class="form-signin">
  
  <h1 class="h3 mb-3 font-weight-normal">Log In</h1>
  
  <div class="form-group">
        <label for="inputEmail" style={{"float":"left","font-weight":"bold"}}>Email Address</label>
        <input type="email" class="form-control" id="inputEmail" onChange={(event) => dispatch(setEmail(event.target.value))} placeholder="name@example.com"></input>
          {/* <small id="passwordHelp" >
            <a class="nav-link" href="#">Forgot password?</a>
           </small> */}

         </div>
  <div class="form-group">
        <label for="inputPassword" style={{"float":"left","font-weight":"bold"}}>Password</label>
           <input type="password" placeholder="password" onChange={(e) => dispatch(setPassword(e.target.value))} class="form-control" id="inputPassword" autocomplete="new-password" aria-describedby="passwordHelp"></input>
          {/* <small id="passwordHelp" >
            <a class="nav-link" href="#">Forgot password?</a>
           </small> */}

         </div>

  <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
  <li class="list-inline-item"><p class="mt-5 mb-3 ">New User?</p></li>
      <li class="list-inline-item"><a class="mt-5 mb-3 " href="/signup">Signup here</a></li>
      <div >
        {isErrorMessage && <b> The Email and/or Password you specified are not correct</b>}
      </div>
</form>
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