
import React from 'react';
import "../css/login.css"
import 'bootstrap/dist/css/bootstrap.css';

function login() {
    return (
        <div class ="container-fluid" style={{"padding":"3%"}}>
            <div class="jumbotron ">
              <h1>Log in</h1>
              <p>___________________</p>
            </div>
            <form>
                <div class="form-group">
                  <label for="inputEmail">Email address:</label>
                  <input type="email" class="form-control" id="inputEmail" placeholder="name@example.com"></input>
                </div>
                <div class="form-group">
                  <label for="inputPassword">Password:</label>
                  <input type="password" placeholder="input password" class="form-control" id="inputPassword" aria-describedby="passwordHelp"></input>
                     <small id="passwordHelp" class="justify-content-end">
                        <a class="nav-link" href="#">Forgot password?</a>
                      </small>
                      
                </div>
                <ul class="list-inline">
                <li class="list-inline-item"><button type="submit" class="btn btn-info">Sign In</button></li>
                <li class="list-inline-item"><p>New User?</p></li>
                <li class="list-inline-item"><a class="nav-link" href="#">Signup here</a></li>
                </ul>
                </form>
        </div>
    );
}

export default login;