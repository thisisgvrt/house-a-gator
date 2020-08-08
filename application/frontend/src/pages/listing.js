
import React from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";

function Listing() {
    const history = useHistory();
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [beds, setBeds] = React.useState("");
    const [baths, setBaths] = React.useState("");
    const [type, setType] = React.useState(true);
    const [category, setCategory] = React.useState("");
    const [squareFoot, setSquareFoot] = React.useState("");
    const [parkingSpots, setParkingSpots] = React.useState("");
    const [file, setFile] = React.useState("");
    const [media, setMedia] = React.useState([]);

    const handleListing = () => {
        axios
        .post("/api/listings", {
            title,
            description,
            for_rent_flag : type,
            street_name: address,
            listing_price: price,
            listing_type: category,
            square_footage: squareFoot,
            num_baths: baths,
            num_beds: beds,
            num_parking_spots: parkingSpots,
            media
        }, {
          withCredentials: true
        })
        .then( () => {
          alert("Listing has been created, it would be approved in 24 hours")
          setTimeout(() => history.push('/'), 1500);
        }).catch((error) => {
          alert("There was an issue creating listing with the provided information. Please check all fields");
        })
    }
    const toggleState = () => {
        setType(!type);
    }
    const handleImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setMedia([...media, {media_path:file.name, media_title:file.name, media_file_b64: reader.result}]);
            setFile("");
        }, false);
        reader.readAsDataURL(file);
    };
    return (
        <div class="container  py-5">
            <form class="form-signin">

                <h1 class="h3 mb-3 font-weight-normal">New Listing</h1>
                <div>
                <p class="text-right"  style={{ "font-weight": "bold" }}><span style={{ "color": "red" }}>*</span> fields are mandatory</p>

                            </div>
                <label style={{ "float": "left", "font-weight": "bold" }}>Title <span style={{ "color": "red" }}>*</span></label>
                <div class="input-group mb-3">
                    <input type="text" onChange={(event) => setTitle(event.target.value)} class="form-control" placeholder="Two bed house with an amazing view"></input>
                </div>

                <label style={{ "float": "left", "font-weight": "bold" }}>Description <span style={{ "color": "red" }}>*</span></label>
                <div class="input-group mb-3">
                    <textarea type="textbox" onChange={(event) => setDescription(event.target.value)} class="form-control" placeholder="Two bed house with an amazing view"></textarea>
                </div>

                <label style={{ "float": "left", "font-weight": "bold" }}>Address</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" onChange={(event) => (setAddress(event.target.value))} placeholder="1800 Holloway Ave. San Francisco, CA, 94132"></input>
                </div>

                <label style={{ "float": "left", "font-weight": "bold" }}>Price <span style={{ "color": "red" }}>*</span></label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" onChange={(event) => (setPrice(event.target.value))} placeholder="1000000"></input>
                    <div class="input-group-append">
                        <span class="input-group-text">.00</span>
                    </div>
                </div>

                <label style={{ "float": "left", "font-weight": "bold" }}>Beds <span style={{ "color": "red" }}>*</span></label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" onChange={(event) => (setBeds(event.target.value))} placeholder="3"></input>
                </div>

                <label style={{ "float": "left", "font-weight": "bold" }}>Baths <span style={{ "color": "red" }}>*</span></label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" onChange={(event) => (setBaths(event.target.value))} placeholder="2"></input>
                </div>

                <label style={{ "float": "left", "font-weight": "bold" }}>Type <span style={{ "color": "red" }}>*</span></label>
                <div class="input-group mb-3">
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" value={"rent"} id="listing-type-rent" class="custom-control-input"value={type} checked={type} onChange={() => toggleState()}/>
                        <label class="custom-control-label" for="listing-type-rent">Rent</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="listing-type-sell" value={!type} checked={!type} onChange={() => toggleState()}></input>
                        <label class="custom-control-label" for="listing-type-sell">Sell</label>
                    </div>
                </div>
    
                <label style={{ "float": "left", "font-weight": "bold" }}>Category <span style={{ "color": "red" }}>*</span></label>
                <div class="input-group mb-3">
                    <select id="inputCategory" class="form-control" onChange={(event) => (setCategory(event.target.value))} required>
                        <option>Select Category</option>
                        <option value="1">Houses</option>
                        <option value="2">Condos</option>
                        <option value="3">Apartments</option>
                        <option value="4">Town houses</option>
                        
                    </select>
                </div>
                <label style={{ "float": "left", "font-weight": "bold" }}>Square Footage <span style={{ "color": "red" }}>*</span></label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" onChange={(event) => (setSquareFoot(event.target.value))} placeholder="850"></input>
                </div>
                <label style={{ "float": "left", "font-weight": "bold" }}>Parking Spots <span style={{ "color": "red" }}>*</span></label>
                <div class="input-group mb-3">
                    <input type="number" min="0" max="5" class="form-control" onChange={(event) => (setParkingSpots(event.target.value))} placeholder="1"></input>
                </div>
                <label style={{ "float": "left", "font-weight": "bold" }}>Images <span style={{ "color": "red" }}>*</span></label>
                <div class="input-group mb-3">
                    { media.map(file => <div> <img src={file.media_file_b64} style={{"height":"3rem"}}></img> <p>{file.media_path}</p></div>) }
                    <div>
                        <input type="file" accept="image/*" class="form-control-file" value={file} placeholder="Select Images" onChange={handleImage} />
                    </div>
                </div>
                <ul class="list-inline">
                    <div class="container d-flex justify-content-between">
                        <li class="list-inline-item"><button class="btn btn-danger" type="button">Reset Form</button></li>
                        <li class="list-inline-item"><button class="btn btn-primary" type="button" onClick={handleListing}>Submit</button></li>
                    </div>
                </ul>
            </form>

        </div>



        
    );
}

export default Listing;