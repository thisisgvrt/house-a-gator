import React, { useState } from "react";
import axios from 'axios';

import { connect } from "react-redux";
import { Link } from "react-router-dom";


const UserDashBoard = () => {

  const [userId, setUserId] = useState(null);
  const [myListings, setMyListings] = useState([]);
  const [showMesageTable, setShowMesageTable] = useState(false);
  const [myMessages, setMyMessages] = useState([]);

  const fetchMessages = () => {
    axios.get(`/api/messages`)
      .then((res) => {
        setMyMessages(res.data);
        if (res.data.length > 0) {
          setShowMesageTable(true);
        }
      })
      .catch(e => "error loading the  listings for receiver" + e)
  }
  const fetchMyListings = () => {
    axios.get(`/api/listings?user=${userId}`)
      .then((res) => {
        setMyListings(res.data);
      })
      .catch(e => "error loading the messages for receiver" + e)
  }

  const checkLogin = () => {
    axios.get("/api/session")
      .then(response => {
        setUserId(response.data.id, () => alert(userId));
      })
      .catch(e => "error loading the list listing" + e)
  }

  React.useEffect(async () => {
    checkLogin();
  }, []);

  React.useEffect(() => {
    (async () => fetchMyListings())();
    (async () => fetchMessages())();
  }, [userId]);

  const getCard = ({ title, media, description, lstatus }, idx) => {
    const media_img_source = media[0].media_path;
    return (
        <div key={idx} class="card col-sm-1 col-md-4 col-lg-3" style={{ "padding-top": "1.5%" }}>
            <Link to={`/listingDetail/${idx}`}>
                <img src={(`/media?file_name=${media_img_source}`)} class="img-fluid card-img-top" style={{height: "15vw", "object-fit": "cover"}} alt="dummy" />
            </Link>
            <div class="card-body">
                <h4>{title}</h4>
                <p className="text-truncate"> {description} </p>
                <p><strong> {lstatus.status_string !== "Verified" ? "Pending Verification" : "Verified"} </strong></p>
            </div>
        </div>
    )
}

  return (
    <div class="container py-5">
      <div class="row"><br /><h5>My Listings</h5><br /></div>
      <div class="row"><br /><h6>Total Number of Listings: {myListings.length}</h6><br/></div>
      <div className='row py-2 '>
          {myListings.map((listing, idx) => getCard(listing, idx))}
      </div>
      <div class="row py-5"><br /><h5>Recieved messages</h5><br /></div>
      <div class="row">
        {showMesageTable && (
          <table class="table">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Sender</th>
                <th scope="col">House title</th>
                <th scope="col">Message</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {myMessages.map(message => (
                <tr>
                  <td>{message.sender.first_name+" "+message.sender.last_name}</td>
                  <td>{message.listing.title}</td>
                  <td>{message.message_text}</td>
                  <td>{(new Date(message.timestamp)).toLocaleString()}</td>
                </tr>

              ))}
            </tbody>

          </table>)}
      </div>
    </div>

  )
}
const mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps)(UserDashBoard);