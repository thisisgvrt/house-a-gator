
import React from 'react';
import "../css/login.css"
import 'bootstrap/dist/css/bootstrap.css';

function login() {
    return (
        <div className ="container-fluid" style={{"padding":"3%"}}>
            <div className="jumbotron bg-warning rounded-lg justify-content-beginning">
              <h1>Log in</h1>
              <p>___________________</p>
            </div>
            <form>
                <div className="form-group">
                  <label for="inputEmail">Email address</label>
                  <input type="email" className="form-control" id="inputEmail" placeholder="name@example.com"></input>
                </div>
                <div className="form-group">
                  <lable for="inputPassword">Password</lable>
                  <input type="password" placeholder="input password" className="form-control" id="inputPassword" aria-describedby="passwordHelp"></input>
                     <small id="passwordHelp" className="justify-content-end">
                        <a class="nav-link" href="#">Forgot password?</a>
                      </small>
                      <button type="submit" class="btn btn-info">Sign In</button>
                </div>
                
            </form>
        </div>
    );
}

export default login;