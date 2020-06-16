import React from "react";
import "../css/Aboutus.css";
import { Link } from "react-router-dom";


const Aboutus = () => {


    return (
        <div class="container-fluid" style={{ "padding-top": "3%" }}>

            <div class="jumbotron rounded-lg">
                <h1>About Us </h1>
                <p>we are computer science students at San Francisco State University</p>
            </div>

            <h2 >Our Team</h2>

            <div className="row">

                <div class="card col">
                    <img src={require(`../images/raviteja.jpg`)} class="card-img-top" alt="Raviteja" />
                    <div class="card-body">
                        <h2 class="card-title">Raviteja Guttula</h2>
                        <h4 class="card-text">Team lead</h4>
                        <Link to="/Ravi">
                            <button class="btn btn-primary mt-2" style={{"font-size":"1.5rem"}}>About</button>
                        </Link>
                    </div>
                </div>

                <div class="card col">
                    <img src={require(`../images/swetha.jpg`)} class="card-img-top" alt="Swetha" />
                    <div class="card-body">
                        <h2 class="card-title">Swetha Govindu</h2>
                        <h4 class="card-text">Frontend lead</h4>
                        <Link to="/Ravi">
                            <button class="btn btn-primary mt-2" style={{"font-size":"1.5rem"}}>About</button>
                        </Link>
                    </div>
                </div>

                <div class="card col">
                    <img src={require(`../images/ashwini.jpg`)} class="card-img-top" alt="ashwini" />
                    <div class="card-body">
                        <h2 class="card-title">Ashwini Uthirakumar</h2>
                        <h4 class="card-text">Backend lead</h4>
                        <Link to="/Ravi">
                            <button class="btn btn-primary mt-2" style={{"font-size":"1.5rem"}}>About</button>
                        </Link>
                    </div>
                </div>

                <div class="card col">
                    <img src={require(`../images/henry.jpg`)} class="img-fluid card-img-top" alt="Henry" />
                    <div class="card-body">
                        <h2 class="card-title">Henry Meier</h2>
                        <h4 class="card-text">Frontend developer</h4>
                        <Link to="/Ravi">
                            <button class="btn btn-primary mt-2" style={{"font-size":"1.5rem"}}>About</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row">

                <div class="card col">
                    <img src={require(`../images/kevin.jpg`)} class="img-fluid card-img-top" alt="Kevin" />
                    <div class="card-body">
                        <h2 class="card-title">Kevin Zhou</h2>
                        <h4 class="card-text">Frontend developer</h4>
                        <Link to="/Kevin">
                            <button class="btn btn-primary mt-2" style={{"font-size":"1.5rem"}}>About</button>
                        </Link>
                    </div>
                </div>

                <div class="card col">
                    <img src={require(`../images/Troy.jpg`)} class="img-fluid card-img-top" alt="Troy" />
                    <div class="card-body">
                        <h2 class="card-title">Troy Turner</h2>
                        <h4 class="card-text">Frontend developer</h4>
                        <Link to="/Troy">
                            <button class="btn btn-primary mt-2" style={{"font-size":"1.5rem"}}>About</button>
                        </Link>
                    </div>
                </div>

                <div class="card col">
                    <img src={require(`../images/fiona.jpg`)} class="card-img-top" alt="Fiona" />
                    <div class="card-body">
                        <h2 class="card-title">Fiona Senchyna</h2>
                        <h4 class="card-text">Backend developer</h4>
                        <Link to="/Fiona">
                            <button class="btn btn-primary mt-2" style={{"font-size":"1.5rem"}}>About</button>
                        </Link>
                    </div>
                </div>
                <div className="card col" style={{ "visibility": "hidden" }}>

                </div>
            </div></div >
    )
}
export default Aboutus;