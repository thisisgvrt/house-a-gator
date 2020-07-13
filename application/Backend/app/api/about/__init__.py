from flask import Blueprint, request

from app.api.about.model import User

about_page = Blueprint('about_page', __name__)

@about_page.route('/')
def index():
    return "Welcome to about page"