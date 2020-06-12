from flask import Blueprint, request
from app.database import DataTable

from app.api.about.model import User

about_page = Blueprint('about_page', __name__)

@about_page.route('/')
def index():
    datatable = DataTable(
        model=User,
        columns=[User.username],
        sortable=[User.username],
        searchable=[User.username],
        filterable=[],
        limits=[25, 50, 100],
        request=request
    )
    for i in datatable.query.items:
        print(i)
    return "Welcome to about page"