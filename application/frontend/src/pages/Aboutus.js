import React from "react";
import { Link } from "react-router-dom";
const Aboutus = () => {
    return (
        <div style={{ "padding-top": "3%" ,"text-align":"center"}}>

            <div class="jumbotron rounded-lg">
                <h1>About Us </h1>
                <p>We are computer science students at San Francisco State University</p>
            </div>

            <h1 >Our Team</h1>

            <div className="card-deck">

                <div class="card col" style={{"padding-top":"1.5%"}}>
                    <img src={require(`../images/raviteja.jpg`)} class="card-img-top" alt="Raviteja" />
                    <div class="card-body">
                        <h2 class="card-title">Raviteja Guttula</h2>
                        <h4 class="card-text">Team lead</h4>
                        <Link to="/ravi">
                            <button class="btn btn-primary mt-2" style={{ "font-size": "1.5rem" }}>About</button>
                        </Link>
                    </div>
                </div>

                <div class="card col" style={{"padding-top":"1.5%"}}>
                    <img src={require(`../images/swetha.jpg`)} class="card-img-top" alt="Swetha" />
                    <div class="card-body">
                        <h2 class="card-title">Swetha Govindu</h2>
                        <h4 class="card-text">Frontend lead</h4>
                        <Link to="/swetha">
                            <button class="btn btn-primary mt-2" style={{ "font-size": "1.5rem" }}>About</button>
                        </Link>
                    </div>
                </div>

                <div class="card col" style={{"padding-top":"1.5%"}}>
                    <img src={require(`../images/ashwini.jpg`)} class="card-img-top" alt="ashwini" />
                    <div class="card-body">
                        <h2 class="card-title">Ashwini Uthirakumar</h2>
                        <h4 class="card-text">Backend lead</h4>
                        <Link to="/ashwini">
                            <button class="btn btn-primary mt-2" style={{ "font-size": "1.5rem" }}>About</button>
                        </Link>
                    </div>
                </div>

                <div class="card col" style={{"padding-top":"1.5%"}}>
                    <img src={require(`../images/henry.jpg`)} class="img-fluid card-img-top" alt="henry" />
                    <div class="card-body">
                        <h2 class="card-title">Henry Meier</h2>
                        <h4 class="card-text">Frontend developer</h4>
                        <Link to="/Henry">
                            <button class="btn btn-primary mt-2" style={{ "font-size": "1.5rem" }}>About</button>
                        </Link>
                    </div>
                </div>
            </div>
            <br/>
            <div className="card-deck">


                <div class="card col" style={{"padding-top":"1.5%"}}>
                    <img src={require(`../images/kevin.jpg`)} class="img-fluid card-img-top" alt="Kevin" />
                    <div class="card-body">
                        <h2 class="card-title">Kevin Zhou</h2>
                        <h4 class="card-text">Frontend developer</h4>
                        <Link to="/kevin">
                            <button class="btn btn-primary mt-2" style={{ "font-size": "1.5rem" }}>About</button>
                        </Link>
                    </div>
                </div>

                <div class="card col" style={{"padding-top":"1.5%"}}>
                    <img src={require(`../images/Troy.jpg`)} class="img-fluid card-img-top" alt="Troy" />
                    <div class="card-body">
                        <h2 class="card-title">Troy Turner</h2>
                        <h4 class="card-text">Frontend developer</h4>
                        <Link to="/troy">
                            <button class="btn btn-primary mt-2" style={{ "font-size": "1.5rem" }}>About</button>
                        </Link>
                    </div>
                </div>

                <div class="card col" style={{"padding-top":"1.5%"}}>
                    <img src={require(`../images/fiona.jpg`)} class="card-img-top" alt="Fiona" />
                    <div class="card-body">
                        <h2 class="card-title">Fiona Senchyna</h2>
                        <h4 class="card-text">Backend developer</h4>
                        <Link to="/fiona">
                            <button class="btn btn-primary mt-2" style={{ "font-size": "1.5rem" }}>About</button>
                        </Link>
                    </div>
                </div>
                <div className="card col" style={{ "visibility": "hidden" }}>

                </div>
            </div></div >
    )
}
export default Aboutus;
