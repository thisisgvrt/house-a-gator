import React from 'react';

import  "../../css/profile.css";

const kevin = () => {
       
    return (
    <div class="container">
    	<div class="row">   
                <div class="card profile-card-3">
                
    		        <div class="background-block">
    		            <img src="https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile-sample1" class="background"/>
                    </div>
                    
    		        <div class="profile-thumb-block">
    		            <img class="profile-card-3 img" src={ require(`../../images/kevin.jpg`)} alt="" />
                    </div>

                    <hr></hr>
                    
    		        <div class="">
                    <h2>Kevin Zhou<small class="development-role">Front End Developer</small></h2>
                    <small><cite title="Source Title">San Francisco, CA, US  <i class="glyphicon glyphicon-map-marker"></i></cite></small>
                        <div>
                            <br></br>
                            <p class="bio">Hello, I am Kevin Zhou, currently a 4th year student for San Francisco State University and also a member of CSC 648 Team 02.</p>

                            <p class="">Classes taking this semester: CSC 642, CSC 648, CSC 651, and CSC 675.</p>

                            <p class="">Hobbies: Hobbies when I was younger was drawing and designing, but as of now those are currently playing games and listening to music.</p>
                        </div>
                        <div>
                        <a href="https://github.com/CodingWithKevin" target="_tab"><i class="fab fa-github-square"></i></a>

                        <a href="https://twitter.com/kevinmouse" target="_tab"><i class="fab fa-twitter-square"></i></a>

                        <a href="https://www.youtube.com/channel/UCk--L2uxSLTee7Ba-nTIKCw?view_as=subscriber" target="_tab"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
    		</div>		   	
                </div>
   
 )}

export default kevin;


