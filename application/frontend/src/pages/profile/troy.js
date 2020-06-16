import React from 'react';

import  "../../css/profile.css";

const troy = () => {
       
    return (
    <div class="container">
    	<div class="row">   
    		    <div class="card profile-card-3">
    		        <div class="background-block">
    		            <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" class="background"/>
    		        </div>
    		        <div class="profile-thumb-block">
    		            <img class="profile-card-3 img" src={ require(`../../images/Troy.jpg`)} alt="profile-image" class="profile"/>
    		        </div>
    		        <div class="card-content">
                    <h2>Troy Turner<small>Front End</small></h2>
                    <small><cite title="Source Title">San Francisco, US  <i class="glyphicon glyphicon-map-marker"></i></cite></small>
                    <p class="bio">I am in my senior year at SFSU and hoping to graduate by December. Love to travel and try new food.</p>
                    </div>
                </div>
    		</div>		   	
                </div>
   
 )}

export default troy;