import React from "react";
import "../css/Aboutus.css";
import { Link } from "react-router-dom";


const Aboutus = () => {


    return (
        <div style={{ "padding-top": "3%" }}>

            <div class="jumbotron rounded-lg">
                <h1>About Us </h1>
                <p>We are computer science students at San Francisco State University</p>
            </div>

            <h1 >Our Team</h1>

            <div className="row">

                <div class="card col" style={{"padding-top":"1.5%"}}>
                    <img src={require(`../images/raviteja.jpg`)} class="card-img-top" alt="Raviteja" />
                    <div class="card-body">
                        <h2 class="card-title">Raviteja Guttula</h2>
                        <h4 class="card-text">Team lead</h4>
                        <Link to="/Ravi">
                            <button class="btn btn-primary mt-2" style={{ "font-size": "1.5rem" }}>About</button>
                        </Link>
                    </div>
                </div>

                <div class="card col" style={{"padding-top":"1.5%"}}>
                    <img src={require(`../images/swetha.jpg`)} class="card-img-top" alt="Swetha" />
                    <div class="card-body">
                        <h2 class="card-title">Swetha Govindu</h2>
                        <h4 class="card-text">Frontend lead</h4>
                        <Link to="/Swetha">
                            <button class="btn btn-primary mt-2" style={{ "font-size": "1.5rem" }}>About</button>
                        </Link>
                    </div>
                </div>

                <div class="card col" style={{"padding-top":"1.5%"}}>
                    <img src={require(`../images/ashwini.jpg`)} class="card-img-top" alt="ashwini" />
                    <div class="card-body">
                        <h2 class="card-title">Ashwini Uthirakumar</h2>
                        <h4 class="card-text">Backend lead</h4>
                        <Link to="/Ashwini">
                            <button class="btn btn-primary mt-2" style={{ "font-size": "1.5rem" }}>About</button>
                        </Link>
                    </div>
                </div>

                <div class="card col" style={{"padding-top":"1.5%"}}>
                    <img src={require(`../images/henry.jpg`)} class="img-fluid card-img-top" alt="Henry" />
                    <div class="card-body">
                        <h2 class="card-title">Henry Meier</h2>
                        <h4 class="card-text">Frontend developer</h4>
                        <Link to="/Henry">
                            <button class="btn btn-primary mt-2" style={{ "font-size": "1.5rem" }}>About</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row">

                <div class="card col" style={{"padding-top":"1.5%"}}>
                    <img src={require(`../images/kevin.jpg`)} class="img-fluid card-img-top" alt="Kevin" />
                    <div class="card-body">
                        <h2 class="card-title">Kevin Zhou</h2>
                        <h4 class="card-text">Frontend developer</h4>
                        <Link to="/Kevin">
                            <button class="btn btn-primary mt-2" style={{ "font-size": "1.5rem" }}>About</button>
                        </Link>
                    </div>
                </div>

                <div class="card col" style={{"padding-top":"1.5%"}}>
                    <img src={require(`../images/Troy.jpg`)} class="img-fluid card-img-top" alt="Troy" />
                    <div class="card-body">
                        <h2 class="card-title">Troy Turner</h2>
                        <h4 class="card-text">Frontend developer</h4>
                        <Link to="/Troy">
                            <button class="btn btn-primary mt-2" style={{ "font-size": "1.5rem" }}>About</button>
                        </Link>
                    </div>
                </div>

                <div class="card col" style={{"padding-top":"1.5%"}}>
                    <img src={require(`../images/fiona.jpg`)} class="card-img-top" alt="Fiona" />
                    <div class="card-body">
                        <h2 class="card-title">Fiona Senchyna</h2>
                        <h4 class="card-text">Backend developer</h4>
                        <Link to="/Fiona">
                            <button class="btn btn-primary mt-2" style={{ "font-size": "1.5rem" }}>About</button>
                        </Link>
                    </div>
                </div>
                <div className="card col" style={{ "visibility": "hidden" }}>

<<<<<<< HEAD
        <p><button class="button">About</button></p>
        </Link>
        </div>
        </div>
        </div>
        
        <div class="column">
        <div class="card">
        <img class="imgs" src={ require(`../images/ashwini.jpg`)} alt="ashwini" />
        <div class="container">
        <h2>Ashwini Uthirakumar</h2>
        <p class="title">Back End Lead</p>
        {/* <p>I am a computer science grad student at SFSU. I am learning and exploring a lot of new technologies.</p> */}
        <p><button class="button">Contact</button></p>
        </div>
        </div>
        </div>
        
        <div class="column">
        <div class="card">
        <img class="imgs" src={ require(`../images/henry.jpg`)} alt="Henry" />
        <div class="container">
        <h2>Henry Meier</h2>
        <p class="title">Front End Developer</p>
        {/* <p>I am a Computer Science and Mathematics Student at SFSU and Banker at Bank of America Merrill Lynch.</p> */}
        <p><button class="button">Contact</button></p>
        </div>
        </div>
        </div>
        
        <div class="column">
        <div class="card">
        <img class="imgs" src={ require(`../images/kevin.jpg`)} alt="Kevin" />
        <div class="container">
        <h2>Kevin Zhou</h2>
        <p class="title">Front End Developer</p>
        {/* <p>Hello, I am Kevin Zhou, currently a 4th year student for San Francisco and also a member of CSC 648 Team 02.</p> */}
        <p><button class="button">Contact</button></p>
        </div>
        </div>
        </div>
        
        <div class="column">
        <div class="card">
        <img class="imgs" src={ require(`../images/Troy.jpg`)} alt="Troy" />
        <div class="container">
        <h2>Troy Turner</h2>
        <p class="title">Front End Developer</p>
        {/* <p>I am in my senior year at SFSU and hoping to graduate by December.</p> */}
        <p><button class="button">Contact</button></p>
        </div>
        </div>
        </div>
        
        <div class="column">
        <div class="card">
        <img class="imgs" src= { require(`../images/fiona.jpg`)} alt="Fiona"/>
        <div class="container">
        <h2>Fiona Senchyna</h2>
        <p class="title">Back End Developer</p>
        {/* <p>Hi, I am a computer science graduate student at SFSU. I have an undergraduate degree in biology and so am interested in bioinformatics.</p> */}
        <Link to="/fiona">
        <p><button class="button">About</button></p>
        </Link>
        </div>
        </div>
        </div>
        </div></div>
        )
    }
    export default Aboutus;
=======
                </div>
            </div></div >
    )
}
export default Aboutus;
>>>>>>> 46f65146e287ecb84ba449584647a9ac951626b6
