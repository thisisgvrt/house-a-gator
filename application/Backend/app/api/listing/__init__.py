from flask import Blueprint, request
from flask_marshmallow import Marshmallow

from sqlalchemy import or_

from app.api.listing.model import Listing, Media

listing_page = Blueprint('listing_page', __name__)

ma = Marshmallow()

class MediaSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Media
        fields = ('id', 'media_path')

class ListingSchema(ma.SQLAlchemySchema):
    media = ma.List(ma.Nested(MediaSchema))
    class Meta:
        model = Listing
        fields = ('title', 'city', 'media')

listing_schema = ListingSchema()
listings_schema = ListingSchema(many=True)


@listing_page.route('/')
def get_listings_route():
    query_string = request.args.get('query','')
    query_filter = Listing.title.ilike(f'%{query_string}%')
    house_type = request.args.get('house_type','')
    house_type_filter = Listing.house_type.match(house_type)
    filters = (or_(query_filter, house_type_filter))
    filtered_result_set = Listing.query.filter().all()
    return listings_schema.jsonify(filtered_result_set)