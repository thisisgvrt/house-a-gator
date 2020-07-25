import React from 'react';

import  "../../css/profile.css";

const swetha = () => {
       
    return (
    <div class="container">
    	<div class="row">   
                <div class="card profile-card-3">
                
    		        <div class="background-block">
    		            <img src="https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile-sample1" class="background"/>
                    </div>
                    
    		        <div class="profile-thumb-block">
    		            <img class="profile-card-3 img" src={ require(`../../images/swetha.jpg`)} alt="swetha"/>
                    </div>

                    <hr></hr>
                    
    		        <div class="">
                    <h2>Swetha Govindu<small class="development-role">Front End Lead</small></h2>
                    <small><cite title="Source Title">San Bruno, CA, US  <i class="glyphicon glyphicon-map-marker"></i></cite></small>
                        <div>
                            <br></br>
                            <p class="bio">I am a Computer Science Graduate Student at SFSU.I like exploring new technologies and places.</p>

                            <p class="">I love watching sports,cooking and hiking</p>
                        </div>
                        <div>
                        <a href="https://github.com/swetha867" target="_tab"><i class="fab fa-github-square"></i></a>
						<a href="https://www.linkedin.com/in/swetha-govindu-8634437a/" target="_tab"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
    		</div>		   	
                </div>
   
 )}

export default swetha;


