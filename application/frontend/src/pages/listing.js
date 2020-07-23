
import React from 'react';
import "../css/listing.css"


function Listing() {
    const [file, setFile] = React.useState("");
    const [filename, setFilename] = React.useState("");



    const handleImage = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
      };
    return (
      <div class="container py-5">
        <div class="card card-outline-secondary justify-content-center" style={{ "padding": "3%" }}>
            <div class="jumbotron">
                <h1 class="title">New Listing</h1>
            </div>

            <label for="">Title <span style={{ "color": "red" }}>*</span></label>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Two bed house with an amazing view"></input>
            </div>

            <label for="">Address</label>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="1800 Holloway Ave. San Francisco, CA, 94132"></input>
            </div>

            <label for="">Price <span style={{ "color": "red" }}>*</span></label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                </div>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="ex. 840"></input>
                <div class="input-group-append">
                    <span class="input-group-text">.00</span>
                </div>
            </div>

            <label for="">Beds <span style={{ "color": "red" }}>*</span></label>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="3"></input>
            </div>

            <label for="">Baths <span style={{ "color": "red" }}>*</span></label>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="2"></input>
            </div>

            <label for="">Type <span style={{ "color": "red" }}>*</span></label>
            <div class="input-group mb-3">
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"></input>
                    <label class="custom-control-label" for="customRadio1">Rent</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"></input>
                    <label class="custom-control-label" for="customRadio2">Sell</label>
                </div>
            </div>

            <label for="">Category <span style={{ "color": "red" }}>*</span></label>
            <div class="input-group mb-3">
            <select id="inputCategory" class="form-control"  required>
<option>Select Category</option>
 <option value="Apartment">Apartment</option>
 <option value="Studio">Studio</option>
<option value="Room">Room</option>

 <option value="House">House</option>           
  </select>   

               </div>

            <label for="">Images <span style={{ "color": "red" }}>*</span></label>
            <div class="input-group mb-3">
            <input type="file" class="form-control-file" id="exampleFormControlFile1" placeholder="Select Images" onChange={handleImage} />

          
            
                <div>
                    {/* <button class="btn btn-outline-primary" type="button" id="button-addon">Browse</button> */}
                </div>
            </div>
            
                <ul class="list-inline">
                <div class="container d-flex justify-content-between">
                    <li class="list-inline-item"><button class="btn btn-danger" type="button">Reset Form</button></li>
                    <li class="list-inline-item"><button class="btn btn-primary" type="button">Submit</button></li>
                </div>
                </ul>
            

        </div>
       </div> 
    );
}

export default Listing;