import React from "react";
import "../css/login.css"
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import { setIsLoggedIn } from "../redux/actions/userActions";
const Login = ({
  dispatch
}) => {
  const history = useHistory();
  const [isErrorMessage, setIsErrorMessage] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogIn = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please enter both username and password");
    }
    else {
      const loginData = {
        email,
        password,
        remember: true
      };
      axios
        .post("/api/session", loginData, {
          withCredentials: true
        })
        .then( () => {
          console.log("login was successful");
          history.push('/');
        }).catch((error) => {
          setIsErrorMessage(true);
          console.error(error);
        })
    }
  };
  return (

    <div class="container py-5">
      <form class="form-signin">

        <h1 class="h3 mb-3 font-weight-normal">Log In</h1>

        <div class="form-group">
          <label for="inputEmail" style={{ "float": "left", "font-weight": "bold" }}>Email Address</label>
          <input type="email" class="form-control" id="inputEmail" onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com"></input>
          {/* <small id="passwordHelp" >
            <a class="nav-link" href="#">Forgot password?</a>
           </small> */}

        </div>
        <div class="form-group">
          <label for="inputPassword" style={{ "float": "left", "font-weight": "bold" }}>Password</label>
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} class="form-control" id="inputPassword" aria-describedby="passwordHelp"></input>
          {/* <small id="passwordHelp" >
            <a class="nav-link" href="#">Forgot password?</a>
           </small> */}

        </div>

        <button class="btn btn-lg btn-primary btn-block" type="button" onClick={handleLogIn}>Sign in</button>
        <li class="list-inline-item"><p class="mt-5 mb-3 ">New User?</p></li>
        <li class="list-inline-item"><a class="mt-5 mb-3 " href="/signup">Signup here</a></li>
        <div >
          {isErrorMessage && <b> The Email and/or Password you specified are not correct</b>}
        </div>

        <li className="list-inline-item"><a className="mt-5 mb-3 " href="/signup">Forgot Password?</a></li>



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