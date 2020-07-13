import React from 'react';
import listing from './listing';

const HomePage = ({ listings }) => {

    const getCard = ({ title, media, description, listing_price, num_baths, num_beds }) => {
        const media_img_source = media[0].media_path;
        console.log(media);
        return (
            <div class="card col-sm-1 col-md-4 col-lg-3" style={{ "padding-top": "1.5%" }}>
                <img src={(`/media?file_name=${media_img_source}`)} class="img-fluid card-img-top" alt="Raviteja" />
                <div class="card-body">
                    <h4>{title}</h4>
                    <p> {description} </p>
                    <p><strong> ${listing_price} </strong></p>
                    <span> <strong>Beds: </strong>{num_beds} <strong className="">Baths: </strong>{num_baths} </span>
                </div>
            </div>
        )
    }
    return (
        <div className="container-fluid row d-flex flex-wrap justify-content-between align-items-center" style={{ "padding-top": "1%" }}>
            {listings.map(listing => getCard(listing))}
        </div>
    )
}

export default HomePage;