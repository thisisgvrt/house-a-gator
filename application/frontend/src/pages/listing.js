
import React from 'react';
//import "../css/listing.css"


function Listing() {
    const [file, setFile] = React.useState("");
    const [filename, setFilename] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [beds, setBeds] = React.useState("");
    const [baths, setBaths] = React.useState("");
    const [type, setType] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [squareFoot, setSquareFoot] = React.useState("");
    const [parkingSpots, setParkingSpots] = React.useState("");
    const handleListing = (e) => {

        // const listingData = {
        //     title,
        //     address,
        //     price,
        //     beds,
        //     baths,
        //     type,
        //     category,
        //   };
    }


    const handleImage = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };
    return (
        <div class="container  py-5">
            <form class="form-signin">

                <h1 class="h3 mb-3 font-weight-normal">New Listing</h1>
               
                <label style={{ "float": "left", "font-weight": "bold" }}>Title <span style={{ "color": "red" }}>*</span></label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Two bed house with an amazing view"></input>
                </div>
            
                <label  style={{ "float": "left", "font-weight": "bold" }}>Address</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" onChange={(event) => (setAddress(event.target.value))} placeholder="1800 Holloway Ave. San Francisco, CA, 94132"></input>
                </div>

                <label  style={{ "float": "left", "font-weight": "bold" }}>Price <span style={{ "color": "red" }}>*</span></label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" onChange={(event) => (setPrice(event.target.value))} placeholder="ex. 840"></input>
                    <div class="input-group-append">
                        <span class="input-group-text">.00</span>
                    </div>
                </div>

                <label  style={{ "float": "left", "font-weight": "bold" }}>Beds <span style={{ "color": "red" }}>*</span></label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" onChange={(event) => (setBeds(event.target.value))} placeholder="3"></input>
                </div>

                <label  style={{ "float": "left", "font-weight": "bold" }}>Baths <span style={{ "color": "red" }}>*</span></label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" onChange={(event) => (setBaths(event.target.value))} placeholder="2"></input>
                </div>

                <label  style={{ "float": "left", "font-weight": "bold" }}>Type <span style={{ "color": "red" }}>*</span></label>
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

                <label  style={{ "float": "left", "font-weight": "bold" }}>Category <span style={{ "color": "red" }}>*</span></label>
                <div class="input-group mb-3">
                    <select id="inputCategory" class="form-control" onChange={(event) => (setCategory(event.target.value))} required>
                        <option>Select Category</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Studio">Studio</option>
                        <option value="Room">Town houses</option>

                        <option value="House">House</option>
                    </select>

                </div>
                <label  style={{ "float": "left", "font-weight": "bold" }}>Square Footage <span style={{ "color": "red" }}>*</span></label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" onChange={(event) => (setSquareFoot(event.target.value))} placeholder="850"></input>
                </div>
                <label  style={{ "float": "left", "font-weight": "bold" }}>Parking Spots <span style={{ "color": "red" }}>*</span></label>
                <div class="input-group mb-3">
                    <input type="number" min="0" max="5" class="form-control" onChange={(event) => (setParkingSpots(event.target.value))} placeholder="1"></input>
                </div>
                <label  style={{ "float": "left", "font-weight": "bold" }}>Images <span style={{ "color": "red" }}>*</span></label>
                <div class="input-group mb-3">
                    <input type="file" class="form-control-file" id="exampleFormControlFile1" placeholder="Select Images" onChange={handleImage} />



                    <div>
                        {/* <button class="btn btn-outline-primary" type="button" id="button-addon">Browse</button> */}
                    </div>
                </div>
                {/* <li class="list-inline-item"><p class="mt-5 mb-3 " style={{"float":"left"}} ><button class="btn btn-danger" type="button">Reset Form</button></p></li>
            <li class="list-inline-item">  <button class="mt-5 mb-3 " style={{"float":"right"}} class="btn btn-primary" type="button">Submit</button></li> */}
              
                <ul class="list-inline">
                    <div class="container d-flex justify-content-between">
                        <li class="list-inline-item"><button class="btn btn-danger" type="button">Reset Form</button></li>
                        <li class="list-inline-item" ><button style={{"float":"right"}} class="btn btn-primary" type="button">Submit</button></li>
                    </div>
                </ul>
            </form>

        </div>



        // <div class="container py-5">
        // <form class="form-signin">

        //     <h1 class="h3 mb-3 font-weight-normal">New Listing</h1>

        //     <div class="form-group">

        //         <label htmlFor="title" style={{ "float": "left", "font-weight": "bold" }}>Title<span style={{ "color": "red" }}>*</span></label>
        //         <input type="title" class="form-control input-info2" onChange={(event) => (setTitle(event.target.value))} id="title" aria-describedby="title" placeholder="Two bed house with an amazing view" required />
        //     </div>
        //     <div class="form-group">
        //         <label htmlFor="Address" style={{ "float": "left", "font-weight": "bold" }}>Address<span style={{ "color": "red" }}>*</span></label>
        //         <input type="address" class="form-control input-info2" onChange={(event) => (setAddress(event.target.value))} id="inputAddress" aria-describedby="emailHelp" placeholder="1800 Holloway Ave. San Francisco, CA, 94132" required />
        //     </div>
        //     <div class="form-group">
        //         <label htmlFor="price" style={{ "float": "left", "font-weight": "bold" }}>Price<span style={{ "color": "red" }}>*</span></label>
        //         <div class="input-group-prepend">
        //              <span class="input-group-text">$</span>
        //         </div>
        //         <input type="price" class="form-control input-info2" onChange={(event) => (setPrice(event.target.value))} id="inputPrice" aria-describedby="emailHelp" placeholder="Email Address" required />
        //     </div>
        //     <div class="form-group">
        //         <label htmlFor="beds" style={{ "float": "left", "font-weight": "bold" }} >Beds<span style={{ "color": "red" }}>*</span></label>
        //         <input type="beds" onChange={(event) => (setBeds(event.target.value))} class="form-control input-info2" id="beds" placeholder="Password" required />
        //     </div>
        //     <div class="form-group">
        //         <label htmlFor="baths" style={{ "float": "left", "font-weight": "bold" }}>Confirm Password<span style={{ "color": "red" }}>*</span></label>
        //         <input type="password" onChange={(event) => (setBaths(event.target.value))} class="form-control input-info2" id="exampleInputPassword2" placeholder="Confirm Password" required />
        //     </div>
        //     <div class="form-group form-check">

        //         <label style={{ "float": "left" }} for="exampleCheck1"><input type="checkbox" required /> <a href="#">Terms & Conditions<span style={{ "color": "red" }}>*</span></a></label>
        //     </div>

        //     <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
        //     <li class="list-inline-item"><p class="mt-5 mb-3 ">Already have an account?</p></li>
        //     <li class="list-inline-item"><a class="mt-5 mb-3 " href="/login">Sign in here</a></li>
        //     {/* <div >
        //         <span style={{ "color": "red" }}> {errorMessage}</span>
        //     </div> */}
        // </form>
        // </div>
    );
}

export default Listing;