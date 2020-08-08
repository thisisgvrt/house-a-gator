import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from 'axios';

const ListingDetail = ({ match }) => {
  const listingId = parseInt(match.params.listingId);
  const [googlemapsrc, setGooglemapsrc] = React.useState("https://www.google.com/maps/embed/v1/place?key=AIzaSyCVhVpvSSY8K_A3BE5guzc_8yuYizR77Gw&q=sanbruno752 Glenview Dr,CA,94066");
  const [listingDetail, setListingDetail] = useState(null);

  const [message, setMessage] = useState("");

  const [showMessageButton, setShowMessageButton] = useState(false);

  const fetchListingDetail = () => {
    axios.get(`/api/listings/${listingId}`)
      .then((res) => {
        setListingDetail(res.data);
      })
      .catch(e => "error loading the list listing" + e)
  }

  const sendMessage = () => {
    axios.post(`/api/messages`, {
      "message_text": message,
      "receiver_id": listingDetail.luser.id,
      "listing_id": listingId
    }).then(() => {
      alert("Message sent succesfully");
    })
    .catch(e => "Error sending message" + e)
  }

  const checkLogin = () => {
    axios.get("/api/session")
      .then((response) => {
        if (response.data.email.endsWith("@mail.sfsu.edu") || response.data.email.endsWith("@mail.sfsu.edu")){
          setShowMessageButton(true);
        }
      })
      .catch(e => "error loading the list listing" + e)
  }

  useEffect(async () => {
    fetchListingDetail();
    checkLogin();
  }, []);

  if (listingDetail !== null) {
    return (
      <div class="container py-5">
        <div class="row">
          <div class="col-md-8">
            <img class="img-fluid" src={`/media?file_name=${listingDetail.media[0].media_path}`} alt="" />
          </div>
          <div class="col-md-4">
            <h3 class="my-3">Listing Details</h3>
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td className="text-right">Title</td>
                  <td className="text-left">{listingDetail.title}</td>
                </tr>
                <tr>
                  <td className="text-right">Description</td>
                  <td className="text-left">{listingDetail.description}</td>
                </tr>
                <tr>
                  <td className="text-right">Listing Price</td>
                  <td className="text-left">{listingDetail.listing_price}</td>
                </tr>
                <tr>
                  <td className="text-right">Number of Baths</td>
                  <td className="text-left">{listingDetail.num_baths}</td>
                </tr>
                <tr>
                  <td className="text-right">Number of Beds</td>
                  <td className="text-left">{listingDetail.num_beds}</td>
                </tr>
                <tr>
                  <td className="text-right">Square Footage</td>
                  <td className="text-left">{listingDetail.square_footage}</td>
                </tr>
                <tr>
                  <td className="text-right">Street Name</td>
                  <td className="text-left">{listingDetail.street_name}</td>
                </tr>
                <tr>
                  <td className="text-right">Zip Code</td>
                  <td className="text-left">{listingDetail.zip_code}</td>
                </tr>
              </tbody>
            </table>
            { showMessageButton ? 
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Send a message to Seller
                </button>
                :
                <>
                  <button type="button" class="btn btn-primary" disabled>
                  Send a message to Seller
                  </button>
                  <p className="text-muted">You need to be logged in as a SFSU Faculty or a student to send a message</p>
                </>
            }
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel"> Send message to {listingDetail.luser.first_name}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="form-group">
                      <input type="email" class="form-control" value={message} onChange={(event) => setMessage(event.target.value) } id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={sendMessage}>Send</button>
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