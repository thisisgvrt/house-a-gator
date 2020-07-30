import React from 'react';

import  "../../css/profile.css";

const henry = () => {

    return (
        <div class="container">
            <div class="row">
                <div class="card profile-card-3">

                    <div class="background-block">
                        <img src="https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile-sample1" class="background"/>
                    </div>

                    <div class="profile-thumb-block">
                        <img class="profile-card-3 img" src={ require(`../../images/henry.jpg`)} alt="" />
                    </div>

                    <hr></hr>

                    <div class="">
                        <h2>Henry Meier<small class="development-role">Front End Lead</small></h2>
                        <small><cite title="Source Title">Oakland, CA, US  <i class="glyphicon glyphicon-map-marker"></i></cite></small>
                        <div>
                            <br></br>
                            <p class="bio">I am a Computer Science and Mathematics Student at SFSU and Banker at Bank of America Merrill Lynch.</p>

                            <p class="">My hobbies include running, weightlifting, and skiing.</p>

                            <p className="">Classes taking this semester: CSC 675, CSC 648, and CSC 675.</p>
                        </div>
                        <div>
                            <a href="https://github.com/hcm444" target="_tab"><i class="fab fa-github-square"></i></a>
                            <a href="https://www.linkedin.com/in/henrymeier26/" target="_tab"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )}

export default henry;

