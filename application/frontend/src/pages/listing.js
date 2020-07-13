
import React from 'react';
import "../css/listing.css"
import 'bootstrap/dist/css/bootstrap.css';

function listing() {
    return(
        <div class="container-fluid" style={{"padding":"3%"}}>
            <div class="jumbotron">
              <h1 class="title">New Listing</h1>
              <p>__</p>
            </div>

            <label for="">Title</label>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Two bed house with an amazing view"></input>
            </div>

            <label for="">Address</label>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="1800 Holloway Ave. San Francisco, CA, 94132"></input>
            </div>

            <label for="">Price</label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                </div>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="ex. 840"></input>
                <div class="input-group-append">
                    <span class="input-group-text">.00</span>
                </div>
            </div>

            <label for="">Beds</label>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="3"></input>
            </div>

            <label for="">Baths</label>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="2"></input>
            </div>

            <label for="">Type</label>
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

            <label for="">Images</label>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Choose file"></input>
                <div>
                    <button class="btn btn-outline-primary" type="button" id="button-addon">Browse</button>
                </div>
            </div>
                <button class="btn btn-primary" type="button">Submit</button>
        </div>
    );
}

export default listing;