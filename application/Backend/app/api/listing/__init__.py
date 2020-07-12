from flask import Blueprint, request
from flask_marshmallow import Marshmallow

from app.api.listing.model import Listing
from app.api.media.model import Media

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

@listing_page.route('/', methods=['POST'])
def save_new_listing_route():
    pass


@listing_page.route('/')
def get_listings_route():
    query_string = request.args.get('query','')
    filtered_result_set = Listing.query.filter(Listing.title.ilike(f'%{query_string}%')).all()
    return listings_schema.jsonify(filtered_result_set)