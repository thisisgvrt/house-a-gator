from flask import Blueprint, request

from app.api.media.model import Media

media_page = Blueprint('media_page', __name__)

@media_page.route('/')
def index():
    return "Welcome to Media page"