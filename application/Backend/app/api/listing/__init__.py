""" Class: CSC648/848--01 Summer 2020, Team 2
Project: Create a WWW site to Buy/sell/rent apartments/housing exclusively
for SFSU students and faculty

Team Members: Raviteja Guttula, Swetha Govindu, Henry Meier, Kevin Zhou, 
Troy Turner, Ashwini Uthirakumar, Fiona Senchyna

File: __init__.py

Description: Contains methods related to listings, this includes:
returning all verified listings, 
returning all verified listings that match a user's search input, 
returning a listing by its listing id,
returning all listings uploaded by a user, and
uploading a listing.  

"""

from flask import Blueprint, request, jsonify
from flask_marshmallow import Marshmallow

from sqlalchemy import and_, exc

from app.api.listing.model import Listing, Media, ListingStatus, ListingType

from distutils.util import strtobool
from random import randint

from app.database import db
from flask_api import status


import os 
import base64
from io import BytesIO
from PIL import Image
UPLOAD_FOLDER = 'media/'

from flask_login import (
    login_required,
    current_user,
)
from flask_api import status

from app.api.user.model import User
from app.api.user import user_schema

listing_page = Blueprint('listing_page', __name__)

ma = Marshmallow()

class UserSchema(ma.SQLAlchemySchema):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name')

class MediaSchema(ma.SQLAlchemySchema):
    "Serializes Media model."
    class Meta:
        model = Media
        fields = ('id', 'media_title', 'media_path')

class ListingStatusSchema(ma.SQLAlchemySchema):
    "Serializes ListingStatus model."
    class Meta:
        model = Media
        fields = ('id', 'status_string')

class ListingTypeSchema(ma.SQLAlchemySchema):
    "Serializes ListingType model."
    class Meta:
        model = Media
        fields = ('id', 'type_string')

class ListingSchema(ma.SQLAlchemySchema):
    "Serializes Listing model. Gives only the most relevant listing information."
    media = ma.List(ma.Nested(MediaSchema))
    ltype = ma.Nested(ListingTypeSchema)
    lstatus = ma.Nested(ListingStatusSchema)
    class Meta:
        model = Listing
        fields = ('id','title', 'description', 'listing_price', 'media', 'ltype', 'lstatus', 'num_baths', 'num_beds')


class ListingDetailedSchema(ma.SQLAlchemySchema):
    "Serializes Listing model. Gives all listing information."
    media = ma.List(ma.Nested(MediaSchema))
    ltype = ma.Nested(ListingTypeSchema)
    lstatus = ma.Nested(ListingStatusSchema)
    luser = ma.Nested(UserSchema)
    class Meta:
        model = Listing
        fields = ('title', 'description', 'building_number', 'apartment', 'street_name', 'city', 'zip_code', 
        'listing_price', 'is_furnished', 'square_footage', 'num_baths', 'num_beds', 'pet_policy', 
        'smoking_policy', 'media', 'ltype', 'luser')

listing_schema = ListingSchema()
listings_schema = ListingSchema(many=True)
detailed_listing_schema = ListingDetailedSchema()


@listing_page.route('/', methods=['GET'])
def get_listings_route():
    "Returns listings filtered by either user input or user id."
    user = request.args.get('user', None)
    query_string = request.args.get('query','')
    listing_type = request.args.get('listing_type',None)
    listing_category = request.args.get('listing_category',None)
    distance = request.args.get('distance',None)
    
    listing_status = request.args.get('listing_status','Verified')
    listing_status_filter = ListingStatus.status_string.like(listing_status)
    
    if user is not None:
        if user == str(current_user.id):
            filtered_result_set = Listing.query.filter_by(listing_user=user).all()
            return listings_schema.jsonify(filtered_result_set)
        else:
            return jsonify({"403": "requesting user not logged in"}), status.HTTP_403_FORBIDDEN

    filters = []

    if query_string != '':
        query_filter = Listing.title.ilike(f'%{query_string}%')
        filters.append(query_filter) 
    if listing_type is not None:
        listing_type_filter = Listing.for_rent_flag.is_((strtobool(listing_type) == 1))
        filters.append(listing_type_filter)
    if listing_category is not None:
        listing_category_filter = ListingType.type_string.like(listing_category)
        filters.append(listing_category_filter)
    if distance is not None:
        distance_filter = Listing.distance.__le__(int(distance))
        filters.append(distance_filter)

    filters.append(listing_status_filter)

    return listings_schema.jsonify(Listing.query.join(Listing.lstatus).join(Listing.ltype).filter(and_(*filters)).all())


@listing_page.route('/<int:listing_id>', methods=['GET'])
def listing_by_id_route(listing_id):
    "Returns listing based on given listing id."
    listing = Listing.query.get(listing_id)
    if listing is None:
        return jsonify({"404": "listing does not exist"}), status.HTTP_404_NOT_FOUND
    if current_user.is_authenticated and listing.listing_user == current_user.id:
        return detailed_listing_schema.jsonify(listing), status.HTTP_200_OK
    elif listing.listing_status != 2: # verified status
        return jsonify({"403": "listing is not verified"}), status.HTTP_403_FORBIDDEN
    return detailed_listing_schema.jsonify(listing), status.HTTP_200_OK


@listing_page.route('/', methods=['POST'])
@login_required
def add_listings_route():
    "Uploads new listing to database."
    building_number = request.json.get('building_number')
    apartment = request.json.get('apartment')
    city = request.json.get('city')
    zip_code = request.json.get('zip_code')
    is_furnished = request.json.get('is_furnished', False);
    pet_policy = request.json.get('pet_policy', False)
    smoking_policy = request.json.get('smoking_policy', False)
    try:
        title = request.json['title']
        description = request.json['description']
        for_rent_flag = request.json['for_rent_flag']
        street_name = request.json['street_name']
        listing_price = request.json['listing_price']
        listing_type = request.json['listing_type']
        square_footage = request.json['square_footage']
        num_baths = request.json['num_baths']
        num_beds = request.json['num_beds']
        num_parking_spots = request.json['num_parking_spots']
        media = request.json['media']
    except (ValueError, KeyError):
        return jsonify({'error' : 'unacceptable data'}), status.HTTP_406_NOT_ACCEPTABLE

    new_listing = Listing(title=title, description=description, for_rent_flag= for_rent_flag, building_number=building_number, 
        apartment=apartment, street_name=street_name, city=city, state='California',
        zip_code=zip_code, country='USA', listing_price=listing_price, 
        listing_status='1', listing_type=listing_type,
        listing_views='0', is_furnished=is_furnished, square_footage=square_footage,
        num_baths=num_baths, num_beds=num_beds, num_parking_spots=num_parking_spots,
        pet_policy=pet_policy, smoking_policy=smoking_policy, listing_user=current_user.id, distance=randint(0,100))
    db.session.add(new_listing)
    try:
        db.session.commit()
    except exc.DatabaseError as e:
        print(e)
        db.session.rollback()
        return jsonify({'406' : 'could not add listing to database'}), status.HTTP_406_NOT_ACCEPTABLE

    for media_item in media:
        media_title = media_item.get('media_title')
        media_path = str(new_listing.id) + '_' + media_item.get('media_path')
        new_listing_media = Media(listing_id=new_listing.id, media_title=media_title,
            media_path=media_path)            
        db.session.add(new_listing_media)
        media_base64 = media_item.get('media_file_b64')

        im_bytes = base64.b64decode(media_base64.split(",")[1])
        image_file = BytesIO(im_bytes)
        try:
            img = Image.open(image_file)
        except OSError:
            return jsonify({'406' : 'unacceptable file extension'}), status.HTTP_406_NOT_ACCEPTABLE
        img.save(os.path.join(UPLOAD_FOLDER + media_path))
    try:
        db.session.commit()
    except exc.DatabaseError:
        db.session.rollback()
        return jsonify({'406' : 'could not add listing to database because of image'}), status.HTTP_406_NOT_ACCEPTABLE
    return jsonify({'201' : 'listing added'}), status.HTTP_201_CREATED




