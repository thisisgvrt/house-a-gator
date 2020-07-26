from flask import Blueprint, request, jsonify
from flask_marshmallow import Marshmallow

from sqlalchemy import and_, exc

from app.api.listing.model import Listing, Media, ListingStatus, ListingType

from distutils.util import strtobool # to convert to boolean
from app.database import db
from flask_api import status

#for file uploads
from app import UPLOAD_FOLDER
import os 
from werkzeug.utils import secure_filename

import base64 #decode base64 to image file
from io import BytesIO
from PIL import Image


listing_page = Blueprint('listing_page', __name__)

ma = Marshmallow()

class MediaSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Media
        fields = ('id', 'media_title', 'media_path')

class ListingStatusSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Media
        fields = ('id', 'status_string')

class ListingTypeSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Media
        fields = ('id', 'type_string')

class ListingSchema(ma.SQLAlchemySchema):
    media = ma.List(ma.Nested(MediaSchema))
    ltype = ma.Nested(ListingTypeSchema)
    lstatus = ma.Nested(ListingStatusSchema)
    class Meta:
        model = Listing
        fields = ('title', 'description', 'listing_price', 'media', 'ltype', 'lstatus', 'num_baths', 'num_beds')

# listing in more detail
class ListingDetailedSchema(ma.SQLAlchemySchema):
    media = ma.List(ma.Nested(MediaSchema))
    ltype = ma.Nested(ListingTypeSchema)
    lstatus = ma.Nested(ListingStatusSchema)
    class Meta:
        model = Listing
        fields = ('title', 'description', 'building_number', 'apartment', 'street_name', 'city', 'zip_code', 
        'listing_price', 'is_furnished', 'square_footage', 'num_baths', 'num_beds', 'pet_policy', 
        'smoking_policy', 'media', 'ltype')

listing_schema = ListingSchema()
listings_schema = ListingSchema(many=True)
detailed_listing_schema = ListingDetailedSchema()


@listing_page.route('/', methods=['GET'])
def get_listings_route():
        query_string = request.args.get('query','')
        query_filter = Listing.title.ilike(f'%{query_string}%')
        listing_type = request.args.get('listing_type',None)
        listing_status = request.args.get('listing_status','Verified')
        listing_status_filter = ListingStatus.status_string.like(listing_status)
        if listing_type is None:
            filters = (and_(query_filter, listing_status_filter))
            filtered_result_set = Listing.query.join(Listing.lstatus).filter(filters).all()
        else:
            listing_type_filter = ListingType.type_string.like(listing_type)
            filters = (and_(query_filter, listing_type_filter, listing_status_filter))
            filtered_result_set = Listing.query.join(Listing.lstatus).join(Listing.ltype).filter(filters).all()
        return listings_schema.jsonify(filtered_result_set)
 
@listing_page.route('/', methods=['POST'])
def add_listings_route():
    try:
        title = request.json['title']
        description = request.json['description']
        building_number = request.json['building_number']
        apartment = request.json['apartment']
        street_name = request.json['street_name']
        city = request.json['city']
        zip_code = request.json['zip_code']
        listing_price = request.json['listing_price']
        listing_type = request.json['listing_type']
        square_footage = request.json['square_footage']
        num_baths = request.json['num_baths']
        num_beds = request.json['num_beds']
        num_parking_spots = request.json['num_parking_spots']
        is_furnished = strtobool(request.json['is_furnished'].lower())
        pet_policy = strtobool(request.json['pet_policy'].lower())
        smoking_policy = strtobool(request.json['smoking_policy'].lower())
        media = request.json['media'] # can be multiple images...
    except (ValueError, KeyError):
        return jsonify({'error' : 'unacceptable data'}), status.HTTP_406_NOT_ACCEPTABLE
    # add new listing to Listings Model
    new_listing = Listing(title=title, description=description, building_number=building_number, 
        apartment=apartment, street_name=street_name, city=city, state='California',
        zip_code=zip_code, country='USA', listing_price=listing_price, 
        listing_status='1', listing_type=listing_type,
        listing_views='0', is_furnished=is_furnished, square_footage=square_footage,
        num_baths=num_baths, num_beds=num_beds, num_parking_spots=num_parking_spots,
        pet_policy=pet_policy, smoking_policy=smoking_policy)
    db.session.add(new_listing)
    try:
        db.session.commit()
    except exc.DatabaseError:
        db.session.rollback()
        return jsonify({'error' : 'could not add listing to database'}), status.HTTP_406_NOT_ACCEPTABLE
    # add new media to Media Model
    for media_item in media:
        media_title = media_item.get('media_title')
        media_path = media_item.get('media_path')
        new_listing_media = Media(listing_id=new_listing.id, media_title=media_title,
            media_path=media_path)            
        db.session.add(new_listing_media)
        media_base64 = media_item.get('media_file_b64')
        # credit: 
        im_bytes = base64.b64decode(media_base64)
        im_file = BytesIO(im_bytes)  # convert image to file-like object
        img = Image.open(im_file)
        image = secure_filename(img)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], image))
        #img.show()
    try:
        db.session.commit()
    except exc.DatabaseError:
        db.session.rollback()
        return jsonify({'error' : 'could not add listing to database'}), status.HTTP_406_NOT_ACCEPTABLE
    # add media files to file system
    
    '''media_file = request.files['media_file']
    credit: https://flask.palletsprojects.com/en/1.1.x/patterns/fileuploads/
    if media_file and allowed_file(media_file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))'''
    return jsonify({'message' : 'listing added'}), status.HTTP_201_CREATED

# Get listing by id
@listing_page.route('/<int:listing_id>', methods=['GET'])
def listing_by_id_route(listing_id):
    listing = Listing.query.get(listing_id)
    # check that listing exists
    if listing is None:
        return jsonify({"error": "listing does not exist"}), status.HTTP_404_NOT_FOUND
    # check that listing is verified
    if listing.listing_status != 2:
        return jsonify({"error": "listing is not verified"}), status.HTTP_403_FORBIDDEN
    return detailed_listing_schema.jsonify(listing), status.HTTP_200_OK



