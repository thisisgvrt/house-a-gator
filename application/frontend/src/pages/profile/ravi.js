import React from 'react';

import "../../css/profile.css";

const ravi = () => {

    return (
        <div class="container">
            <div class="row">
                <div class="card profile-card-3">

                    <div class="background-block">
                        <img src="https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile-sample1" class="background" />
                    </div>

                    <div class="profile-thumb-block">
                        <img class="profile-card-3 img" src={require(`../../images/raviteja.jpg`)} alt="" />
                    </div>

                    <hr></hr>

                    <div class="">
                        <h2>Raviteja Guttula<small class="development-role">Team Lead</small></h2>
                        <small><cite title="Source Title">San Francisco, CA, US  <i class="glyphicon glyphicon-map-marker"></i></cite></small>
                        <div>
                            <br></br>
                            <p class="bio">Hello, I am Raviteja Guttula.I am a first year graduate student at San Francisco State University and also a member of CSC 648 Team 02.</p>

                            <p class="">Classes taking this semester: CSC 842, CSC 848</p>

                            <p class="">I like exploring new technologies. In my free time, I like cook, run or watch movies.</p>
                        </div>
                        <div>
                            <a href="https://github.com/thisisgvrt" target="_tab"><i class="fab fa-github-square"></i></a>

                            <a href="https://twitter.com/thisisgvrt" target="_tab"><i class="fab fa-twitter-square"></i></a>

                            <a href="https://www.linkedin.com/in/thisisgvrt" target="_tab"><i class="fab fa-linkedin"></i></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ravi;


