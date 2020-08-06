import React,{useState} from "react";
import axios from 'axios';

import { connect } from "react-redux";
import { Link } from "react-router-dom";


const UserDashBoard = ({dispatch }) => {
 


    const [myListings, setMyListings] = useState([]);
    const [listingsLength, setListingsLength] = useState(0);
    const [showMesageTable, setShowMesageTable] = useState(false);

    const [myMessages, setMyMessages] = useState([]);

    const fetchMessages = () => {
      axios.get(`/api/messaging`) 
      .then((res) => {
        setMyMessages(res.data);
        if(res.data.length>0){
          setShowMesageTable(true);
        }
        })
        .catch(e => "error loading the  listings for receiver" + e)
    }
    const fetchMyListings = () => {
      axios.get(`/api/myListings`) 
      .then((res) => {
        setMyListings(res.data);
        setListingsLength(res.data.length);
        })
        .catch(e => "error loading the messages for receiver" + e)
    }

    React.useEffect(async () => {
      fetchMyListings();
      fetchMessages();
    }, []);
  
    
    return(
        <div class="container py-5">
          <div class="row"><br/><h5>My Listings</h5><br/></div>
    <div class="row"><br/><h5>Total Number of Listings:{listingsLength}</h5><br/></div>

           <div className='row'>

{myListings.map(listing => (

  <div key={listing.title} className='col-lg-4 col-md-3 col-sm-6'>
    <div className="card">               
    <img className="card-img-top" src={require(`${listing.media}`)} alt="Listing image cap"/>
    <div className="card-body">

      <h5 className="card-title">{listing.title}</h5>
      <p className="card-text">${listing.price}</p>
        <span className='txt-link'>
        <Link to={`/listingDetail/${listing.idx}`}>      
           <button>Info</button>
          </Link>
        </span>
  </div>
</div></div>
))} 
</div>
             {/* <div class="row"><br/><h5>My Listings</h5><br/></div>
        <div class="row">
        <div class="card-deck">
  <div class="card">
    <img src="/media?file_name=Apartments.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Listing title</h5>
      <p class="card-text">Listing Description</p>
    </div>
  </div>
  <div class="card">
    <img src="/media?file_name=Apartments.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Listing title</h5>
      <p class="card-text">Listing Description</p>
    </div>
  </div>
  <div class="card">
    <img src="/media?file_name=Apartments.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Listing title</h5>
      <p class="card-text">Listing Description</p>
    </div>
  </div>
   </div>   
</div> */}

      
        <div class="row"><br/><h5>Recieved messages</h5><br/></div>
        <div class="row">
        { showMesageTable && (

        <table class="table">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Date</th>
              <th scope="col">Sender</th>
              <th scope="col">House title</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
            {myMessages.map(message => (
                <tr>
               <td>{message.timestamp}</td>
               <td>{message.sender_id}</td>

               <td>{message.listing_title}</td>

                <td>{message.description}</td>
                </tr>
                
                ))}
                </tbody>
          
        </table>  )  }
        </div>
         </div>       

    )
}
const mapStateToProps = (state) => {
    return {
     
    };
  };
  
  export default connect(mapStateToProps)(UserDashBoard);