import React from 'react';

import "../../css/profile.css";

const ashwini = () => {

    return (
        <div class="container">
            <div class="row">
                <div class="card profile-card-3">

                    <div class="background-block">
                        <img src="https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile-sample1" class="background" />
                    </div>

                    <div class="profile-thumb-block">
                        <img class="profile-card-3 img" src={require(`../../images/ashwini.jpg`)} alt="" />
                    </div>

                    <hr></hr>

                    <div class="">
                        <h2>Ashwini Uthirakumar<small class="development-role">Back End Lead</small></h2>
                        <small><cite title="Source Title">San Jose, CA, US  <i class="glyphicon glyphicon-map-marker"></i></cite></small>
                        <div>
                            <br></br>
                            <p class="bio">I am a computer science Graduate student at San Francisco State University. I am currently learning and exploring a lot of new technologies.</p>

                            <p class="">Classes taking this semester: CSC 848.</p>

                            <p class="">I am a big fan of Japanese Anime. I love doing Zumba.</p>
                        </div>
                        <div>

                            <a href="https://twitter.com/AshwiniU4?s=09" target="_tab"><i class="fab fa-twitter-square"></i></a>

                            <a href="https://www.linkedin.com/in/ashwini-uthirakumar-5b40555b/" target="_tab"><i class="fab fa-linkedin"></i></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ashwini;