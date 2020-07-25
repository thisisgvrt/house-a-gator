import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "../css/signup.css";
import axios from "axios";
import {
    setEmail, setFirstName, setLastName, setPassword
} from "../redux/actions/userActions";
import { combineReducers } from "redux";

const Signup = ({
    email,
    password,
    firstName,
    lastName,
    dispatch
}) => {
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, email, password, confirmPassword);
        if (firstName === "" || password === "" || email === "" || lastName === "" || confirmPassword === "") {
            setErrorMessage("All inputs are required");
        }
        else if (password != confirmPassword) {
            setErrorMessage("Passwords do not match. Please re-enter");
        }
        else {
            setErrorMessage("");
            const userData = {
                firstName,
                lastName,
                email,
                password,

            };
            axios
                .post("/api/signup", { userData })
                .then(function (response) {


                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }

    return (


        <div class="container py-5">
            <form class="form-signin">

                <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>

                <div class="form-group">
                    <label htmlFor="exampleInputEmail1" style={{ "float": "left", "font-weight": "bold" }}>First Name<span style={{ "color": "red" }}>*</span></label>
                    <input type="firstName" class="form-control input-info2" onChange={(event) => dispatch(setFirstName(event.target.value))} id="exampleInputFirstName" aria-describedby="emailHelp" placeholder="First Name" required />
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1" style={{ "float": "left", "font-weight": "bold" }}>Last Name<span style={{ "color": "red" }}>*</span></label>
                    <input type="lastName" class="form-control input-info2" onChange={(event) => dispatch(setLastName(event.target.value))} id="exampleInputLastName" aria-describedby="emailHelp" placeholder="Last Name" required />
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1" style={{ "float": "left", "font-weight": "bold" }}>Email address<span style={{ "color": "red" }}>*</span></label>
                    <input type="email" class="form-control input-info2" onChange={(event) => dispatch(setEmail(event.target.value))} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" required />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputPassword1" style={{ "float": "left", "font-weight": "bold" }} >Password<span style={{ "color": "red" }}>*</span></label>
                    <input type="password" onChange={(event) => dispatch(setPassword(event.target.value))} class="form-control input-info2" id="exampleInputPassword1" placeholder="Password" required />
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputPassword2" style={{ "float": "left", "font-weight": "bold" }}>Confirm Password<span style={{ "color": "red" }}>*</span></label>
                    <input type="password" onChange={(event) => (setConfirmPassword(event.target.value))} class="form-control input-info2" id="exampleInputPassword2" placeholder="Confirm Password" required />
                </div>
                <div class="form-group form-check">

                    <label style={{ "float": "left" }} for="exampleCheck1"><input type="checkbox" required /> <a href="#">Terms & Conditions<span style={{ "color": "red" }}>*</span></a></label>
                </div>

                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
                <li class="list-inline-item"><p class="mt-5 mb-3 ">Already have an account?</p></li>
                <li class="list-inline-item"><a class="mt-5 mb-3 " href="/login">Sign in here</a></li>
                <div >
                    <span style={{ "color": "red" }}> {errorMessage}</span>
                </div>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        firstName: state.userReducer.firstName,
        lastName: state.userReducer.lastName,
        email: state.userReducer.email,
        password: state.userReducer.password

    };
};
export default connect(mapStateToProps)(Signup);