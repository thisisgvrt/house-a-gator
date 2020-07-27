import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const UserDashBoard = ({dispatch }) => {
    
    return(
        <div class="container py-5">
             <div class="row"><br/><h5>My Listings</h5><br/></div>
        <div class="row">
        <div class="card-deck">
  <div class="card">
    <img src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Listing title</h5>
      <p class="card-text">Listing Description</p>
    </div>
  </div>
  <div class="card">
    <img src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Listing title</h5>
      <p class="card-text">Listing Description</p>
    </div>
  </div>
  <div class="card">
    <img src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Listing title</h5>
      <p class="card-text">Listing Description</p>
    </div>
  </div>
   </div>   
</div>
      
        <div class="row"><br/><h5>Recieved messages</h5><br/></div>
        <div class="row">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Sender</th>
              <th scope="col">House title</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Apartments with balcony and blue borders</td>
              <td>Please send me the  floorplan of the house to me this-is-totally-a-valid-email@mail.sfsu.edu</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Apartments with balcony and blue borders</td>
              <td>I would like to get a tour of this house, can you please arrange for an in-person tour ?</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>Apartments with balcony and blue borders</td>
              <td>I would like to get a tour of this house, can you please reach out to me at +1-123-456-6789</td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
     
     
  
    };
  };
  
  export default connect(mapStateToProps)(UserDashBoard);