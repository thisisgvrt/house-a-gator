import React from 'react';

import  "../../css/profile.css";

const swetha = () => {
       
    return (
    <div class="container">
    	<div class="row">   
    		    <div class="card profile-card-3">
    		        <div class="background-block">
    		            <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" class="background"/>
    		        </div>
    		        <div class="profile-thumb-block">
    		            <img class="profile-card-3 img" src={ require(`../../images/swetha.jpg`)} alt="profile-image" class="profile"/>
    		        </div>
    		        <div class="card-content">
                    <h2>Swetha Govindu<small>Front End Lead</small></h2>
                    <small><cite title="Source Title">San Bruno, US  <i class="glyphicon glyphicon-map-marker"></i></cite></small>
                    <p class="bio">I am a Computer Science Graduate Student at SFSU.I like exploring new technologies and places.</p>
                    </div>
                </div>
    		</div>		   	
                </div>
   
 )}

export default swetha;

