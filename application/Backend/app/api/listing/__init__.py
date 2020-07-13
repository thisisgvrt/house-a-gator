from flask import Blueprint, request
from flask_marshmallow import Marshmallow

from sqlalchemy import or_

from app.api.listing.model import Listing, Media, ListingStatus, ListingType

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
        fields = ('title', 'description', 'listing_price', 'media', 'ltype', 'lstatus')

listing_schema = ListingSchema()
listings_schema = ListingSchema(many=True)


@listing_page.route('/')
def get_listings_route():
    query_string = request.args.get('query','')
    query_filter = Listing.title.ilike(f'%{query_string}%')
    listing_type = request.args.get('listing_type','Houses')
    listing_status = request.args.get('listing_status','Verified')
    listing_type_filter = Listing.listing_type.match(listing_type)
    listing_status_filter = Listing.listing_type.match(listing_status)
    filters = (or_(query_filter, listing_type_filter, listing_status_filter))
    filtered_result_set = Listing.query.filter().all()
    return listings_schema.jsonify(filtered_result_set)