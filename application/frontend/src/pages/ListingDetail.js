import React from "react";
import { connect } from "react-redux";

const ListingDetail = ({ listings, isLoggedIn, match }) => {
  const listingId = parseInt(match.params.listingId);
  const [googlemapsrc, setGooglemapsrc] = React.useState("https://www.google.com/maps/embed/v1/place?key=AIzaSyCVhVpvSSY8K_A3BE5guzc_8yuYizR77Gw&q=sanbruno752 Glenview Dr,CA,94066");
  if (listings[listingId] !== undefined) {
    console.log(listings[listingId].media[0].media_path);
    return (
      <div class="container py-5">
        <div class="row">
          <div class="col-md-8">
            <img class="img-fluid" src={`/media?file_name=${listings[listingId].media[0].media_path}`} alt="" />
          </div>
          <div class="col-md-4">
            <h3 class="my-3">Listing Details</h3>
            <ul>
              Title: {listings[listingId].title} <br />
              Listing Address: {listings[listingId].description} <br />
              Listing Price: ${listings[listingId].listing_price} <br />
            </ul>
            <h3 class="my-3">Listing View</h3>
            <iframe width="600"
              height="450"
              frameborder="0" style={{ "border": "0" }}
              class="widthAndHeightOneHundredPercent removeBorder" src={googlemapsrc}
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    )
  }
  else {
    return <div></div>
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
    listingID: state.listingReducer.listingID,
  };
};

export default connect(mapStateToProps)(ListingDetail);