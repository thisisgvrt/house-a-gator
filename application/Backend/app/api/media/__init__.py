from flask import Blueprint, request
from app.database import DataTable

from app.api.media.model import Media

media_page = Blueprint('media_page', __name__)

@media_page.route('/')
def index():
    datatable = DataTable(
        model=Media,
        columns=[Media.media_path],
        sortable=[Media.media_path],
        searchable=[Media.media_path],
        filterable=[],
        limits=[25, 50, 100],
        request=request
    )
    for i in datatable.query.items:
        print(i)
    return "Welcome to Media page"