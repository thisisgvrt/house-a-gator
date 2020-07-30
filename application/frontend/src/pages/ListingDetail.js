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
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Send a message to Seller
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Message</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 p-20">
              <h3 class="my-3">Listing View on a map</h3>
              <iframe width="600"
                height="450"
                frameborder="0" style={{ "border": "0" }}
                class="widthAndHeightOneHundredPercent removeBorder" src={googlemapsrc}
                allowfullscreen>
              </iframe>
            </div>
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