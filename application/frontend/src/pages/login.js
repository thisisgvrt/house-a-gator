
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function login() {
    return (
        <div class ="container" style={{"padding":"3%"}}>
            <div class="jumbotron bg-warning rounded-lg">
              <h1>Log in</h1>
            </div>
            <form>
                <div class="form-group">
                  <label for="inputEmail">Email address</label>
                  <input type="email" class="form-control" id="inputEmail" placeholder="name@example.com"></input>
                </div>
                <div class="form-group">
                  <lable for="inputPassword">Password</lable>g
                  <input type="password" class="form-control" id="inputPassword" aria-describedby="passwordHelp"></input>
                     <small id="passwordHelp" class="justify-content-end">
                        <a class="nav-link" href="#">Forgot password?</a>
                      </small>
                </div>
                <button type="submit" class="btn btn-info">Sign In</button>
            </form>
        </div>
    );
}

export default login;