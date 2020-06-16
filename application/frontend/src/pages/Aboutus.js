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
                        <h5 class="card-title">Raviteja Guttula</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card col">
                    <img src={require(`../images/swetha.jpg`)} class="card-img-top" alt="Swetha" />
                    <div class="card-body">
                        <h5 class="card-title">Swetha Govindu</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/swetha">
                            <p><button class="button">About</button></p>
                        </Link>
                    </div>
                </div>

                <div class="card col">
                    <img src={require(`../images/ashwini.jpg`)} class="card-img-top" alt="ashwini" />
                    <div class="card-body">
                        <h5 class="card-title">Ashwini Uthirakumar</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/swetha">
                            <p><button class="button">About</button></p>
                        </Link>
                    </div>
                </div>

                <div class="card col">
                    <img src={require(`../images/henry.jpg`)} class="img-fluid card-img-top" alt="Henry" />
                    <div class="card-body">
                        <h5 class="card-title">Henry Meier</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/swetha">
                            <p><button class="button">About</button></p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row">

                <div class="card col">
                    <img src={require(`../images/kevin.png`)} class="img-fluid card-img-top" alt="Kevin" />
                    <div class="card-body">
                        <h5 class="card-title">Henry Meier</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/swetha">
                            <p><button class="button">About</button></p>
                        </Link>
                    </div>
                </div>

                <div class="card col">
                    <img src={require(`../images/Troy.jpg`)} class="img-fluid card-img-top" alt="Troy" />
                    <div class="card-body">
                        <h5 class="card-title">Henry Meier</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/swetha">
                            <p><button class="button">About</button></p>
                        </Link>
                    </div>
                </div>

                <div class="card col">
                    <img src={require(`../images/fiona.png`)} class="card-img-top" alt="Fiona" />
                    <div class="card-body">
                        <h5 class="card-title">Fiona Senchyna</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/swetha">
                            <p><button class="button">About</button></p>
                        </Link>
                    </div>
                </div>
            <div className="card col" style={{"visibility":"hidden"}}>

            </div>
            </div></div >
    )
}
export default Aboutus;