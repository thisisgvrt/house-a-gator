
import React from "react";
import "../css/Aboutus.css";
import logo from "../images/raviteja.jpg";


const Aboutus = () => {

//lets clean up the information here and add more background pics
    return (

        <div class="main">

        <div class="about-section">

        <h1>About Us </h1>
            
            {/* Commented out an image, 
            cause error since nodes.jpeg isn't in the images folder */}
            {/* <img className="background" src={require(`../images/nodes.jpeg`)} alt="nodes"/> --> */ }
            
        <p>We are all Computer Science students at San Francisco State University!</p>

        </div>
        
        <h2 >Our Team</h2>
        <div class="row">
        <div class="column">

        <div class="card">

        <img class="imgs" src={ require(`../images/raviteja.jpg`)} alt="Raviteja" />
        <div class="container">
        <h2>Raviteja Guttula</h2>
        <p class="title">Team Lead</p>
        <p>
        I am a Graduate student at SFSU. I like exploring new technologies.</p>
            <p>My hobbies include: Cooking, running, and watching movies.</p>
            <p>Currently taking: HCI and SE</p>
        <p>rguttula@mail.sfsu.edu</p>
            <p>
                <button className="button">About</button>
            </p>
            <p>
                <button className="button">Facebook</button>
            </p>

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
        <p>I am a Computer Science Graduate Student at SFSU.I like exploring new technologies and places. </p>
            <p>My hobbies include:</p>
            <p>Currently taking:</p>
        <p>sgovindu@mail.sfsu.edu</p>
            <p>
                <button className="button">About</button>
            </p>
            <p>
                <button className="button">Facebook</button>
            </p>
        <p><button class="button">Contact</button></p>
        </div>
        </div>
        </div>
        
        <div class="column">
        <div class="card">
        <img class="imgs" src={ require(`../images/ashwini.jpg`)} alt="ashwini" />
        <div class="container">

        <h2>Ashwini Uthirakumar</h2>
        <p class="title">Back End Lead</p>
        <p>I am a computer science grad student at SFSU. I am learning and exploring a lot of new technologies.</p>
            <p>Currently taking:</p>
        <p>authirakumar@mail.sfsu.edu</p>
        <p><button class="button">Contact</button></p>
            <p>
                <button className="button">About</button>
            </p>
            <p>
                <button className="button">Facebook</button>
            </p>
        </div>
        </div>
        </div>
        
        <div class="column">
        <div class="card">
        <img class="imgs" src={ require(`../images/henry.jpg`)} alt="Henry" />
        <div class="container">
        <h2>Henry Meier</h2>
        <p class="title">Front End Developer</p>
        <p>I am a Computer Science and Mathematics Student at SFSU and Banker at Bank of America Merrill Lynch.</p>
            <p>Currently taking: CSC 415, CSC 648, and CSC 675</p>
        <p>hmeier@mail.sfsu.edu</p>
        <p><button class="button">Contact</button></p>
            <p>
                <button className="button">About</button>
            </p>
            <p>
                <button className="button">Facebook</button>
            </p>

        </div>
        </div>
        </div>
        
        <div class="column">
        <div class="card">
        <img class="imgs" src={ require(`../images/kevin.jpg`)} alt="Kevin" />
        <div class="container">
        <h2>Kevin Zhou</h2>
        <p class="title">Front End Developer</p>
        <p>Hello, I am Kevin Zhou, currently a 4th year student for San Francisco and also a member of CSC 648 Team 02.</p>
            <p>Currently taking:</p>
            <p>kzhou2@mail.sfsu.edu</p>
            <p>
                <button className="button">About</button>
            </p>
            <p>
                <button className="button">Facebook</button>
            </p>
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
        <p>I am in my senior year at SFSU and hoping to graduate by December.</p>
            <p>Currently taking:</p>
        <p>tturner1@mail.sfsu.edu</p>
            <p>
                <button className="button">About</button>
            </p>
            <p>
                <button className="button">Facebook</button>
            </p>
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
        <p>Hi, I am a computer science graduate student at SFSU. I have an undergraduate degree in biology and so am interested in bioinformatics.</p>
            <p>Currently taking:</p>
            <p>fsenchyna@mail.sfsu.edu</p>
            <p>
                <button className="button">About</button>
            </p>
            <p>
                <button className="button">Facebook</button>
            </p>
        <p><button class="button">Contact</button></p>
        </div>
        </div>
        </div>
        </div></div>
        )
    }
    export default Aboutus;