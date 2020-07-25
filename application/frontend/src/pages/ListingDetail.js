import React from "react";
import { connect } from "react-redux";

const ListingDetail = ({ listingID,  isLoggedIn, dispatch }) => {
    const[googlemapsrc,setGooglemapsrc]=React.useState("https://www.google.com/maps/embed/v1/place?key=site_key&q=sanbruno752 Glenview Dr,CA,94066");
    //setGooglemapsrc("https://www.google.com/maps/embed/v1/place?key=site_key&q=sanbruno752 Glenview Dr,CA,94066");
    return(

<div class="container py-5">


  {/* <h1 class="my-4">Listing Detail
    
  </h1> */}


  <div class="row">

    <div class="col-md-8">
      <img class="img-fluid" src="http://placehold.it/750x500" alt=""/>
    </div>

    <div class="col-md-4">
      <h3 class="my-3">Listing Details</h3>
      <ul>
        Listing Address: <br/>
        Listing Price: <br/>
        
      </ul>
      <h3 class="my-3">Listing View</h3>
      <iframe  width="600"
  height="450"
  frameborder="0" style={{"border":"0"}} 
  
  class="widthAndHeightOneHundredPercent removeBorder" src={googlemapsrc}
                    allowfullscreen>
                </iframe>
    </div>

  </div>


 
</div>

)
}
const mapStateToProps = (state) => {
    return {
     
      isLoggedIn: state.userReducer.isLoggedIn,
     
      listingID: state.listingReducer.listingID,
    
  
    };
  };
  
  export default connect(mapStateToProps)(ListingDetail);