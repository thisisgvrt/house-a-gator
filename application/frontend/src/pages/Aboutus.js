import React from "react";
import "../css/Aboutus.css";
import { Link } from "react-router-dom";


const Aboutus = () => {
    
    
    return (
        <div class="main">
        
        <div class="about-section">
        <h1>About Us </h1>
        <p>we are computer science students at San Francisco State University</p>
        </div>
        
        <h2 >Our Team</h2>
        <div class="row">
        <div class="column">
        <div class="card">
        <img class="imgs" src={ require(`../images/raviteja.jpg`)} alt="Raviteja" />
        <div class="container">
        <h2>Raviteja Guttula</h2>
        <p class="title">Team Lead</p>
        
        {/*<p> I am a Graduate student at SFSU. I like exploring new technologies.</p> */}
        <p><button class="button">Contact</button></p>
        </div>
        </div>
        </div>
        
        
        <div class="column">
        <div class="card">
        <img class="imgs" src={ require(`../images/swetha.jpg`)} alt="Raviteja" />
        <div class="container">
        <h2>Swetha Govindu</h2>
        <p class="title">Front End Lead</p>
        {/* <p>I am a Computer Science Graduate Student at SFSU.I like exploring new technologies and places. </p> */}
        <Link to="/swetha">

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