import React from 'react';

import  "../../css/profile.css";

const troy = () => {
       
    return (
    <div class="container">
    	<div class="row">   
                <div class="card profile-card-3">
                
    		        <div class="background-block">
    		            <img src="https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile-sample1" class="background"/>
                    </div>
                    
    		        <div class="profile-thumb-block">
    		            <img class="profile-card-3 img" src={ require(`../../images/Troy.jpg`)} alt=""/>
                    </div>

                    <hr></hr>
                    
    		        <div class="">
                    <h2>Troy Turner<small class="development-role">Front End Developer</small></h2>
                    <small><cite title="Source Title">San Francisco, CA, US  <i class="glyphicon glyphicon-map-marker"></i></cite></small>
                        <div>
                            <br></br>
                            <p class="bio">Am a senior in Computer science at SFSU with the goal of graduating in Decemer with my BS degree</p>

                            <p class="">Classes taking this summer: CSC 642.</p>

                            <p class="">I enjoy traveling to various places and trying new food where ever I may go.  Up for anything new and exciting.</p>
                        </div>
                        <div>
                        <a href="https://github.com/lostapplesauce" target="_tab"><i class="fab fa-github-square"></i></a>

                        <a href="https://www.linkedin.com/in/troy-turner1" target="_tab"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
    		</div>		   	
                </div>
   
 )}

export default troy;


