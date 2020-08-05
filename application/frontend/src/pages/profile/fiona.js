import React from 'react';

import "../../css/profile.css";

const fiona = () => {

    return (
        <div class="container">
            <div class="row">
                <div class="card profile-card-3">

                    <div class="background-block">
                        <img src="https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile-sample1" class="background" />
                    </div>

                    <div class="profile-thumb-block">
                        <img class="profile-card-3 img" src={require(`../../images/fiona.jpg`)} alt="" />
                    </div>

                    <hr></hr>

                    <div class="">
                        <h2>Fiona Senchyna<small class="development-role">Back End Developer</small></h2>
                        <small><cite title="Source Title">San Francisco, CA, US  <i class="glyphicon glyphicon-map-marker"></i></cite></small>
                        <div>
                            <br></br>
                            <p class="bio">I am a computer science graduate student at SFSU. I have an undergraduate degree in biology and so 
								am interested in bioinformatics.</p>
                            <p class="">This semster I am taking CSC848.</p>
                            <p class="">My hobbies include reading, running, and cooking.</p>
                        </div>
                        <div>
                            <a href="https://github.com/fsenchyna" target="_tab"><i class="fab fa-github-square"></i></a>
                            <a href="https://www.linkedin.com/in/fiona-senchyna-17b81311a/" target="_tab"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    //henry
    )
}
export default fiona;
