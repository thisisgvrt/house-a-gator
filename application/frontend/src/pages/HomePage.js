import React from 'react';
import { Link } from "react-router-dom";

const HomePage = ({ listings }) => {

    const getCard = ({ id, title, media, description, listing_price, num_baths, num_beds }) => {
        const media_img_source = media[0].media_path;
        return (
            <div key={id} class="card col-sm-1 col-md-4 col-lg-3" style={{ "padding-top": "1.5%" }}>
                <Link to={`/listingDetail/${id}`}>
                    <img src={(`/media?file_name=${media_img_source}`)} class="img-fluid card-img-top" style={{height: "15vw", "object-fit": "cover"}} alt="dummy" />
                </Link>
                <div class="card-body">
                    <h4>{title}</h4>
                    <p className="text-truncate"> {description} </p>
                    <p><strong> ${listing_price} </strong></p>
                    <span> <strong>Beds: </strong>{num_beds} <strong className="">Baths: </strong>{num_baths} </span>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div class="alert alert-primary" role="alert" style={{ "margin-top": "0.5%" }}>
                {listings.length} listings found.
            </div>
            <div className="container-fluid row d-flex flex-wrap justify-content-between align-items-center" style={{ "margin-top": "0.5%" }}>
                {listings.map((listing) => getCard(listing))}
            </div>
        </div>
    )
}

export default HomePage;