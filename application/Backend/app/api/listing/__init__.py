from flask import Blueprint, request
from flask_marshmallow import Marshmallow

from app.database import DataTable

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
        fields = ('id', 'title', 'city', 'media')

listing_schema = ListingSchema()
listings_schema = ListingSchema(many=True)

@listing_page.route('/')
def index():
    datatable = DataTable(
        model=Listing,
        columns=[Listing.title],
        sortable=[Listing.title],
        searchable=[Listing.title],
        filterable=[],
        limits=[25, 50, 100],
        request=request
    )
    return listings_schema.jsonify(datatable.query.items)