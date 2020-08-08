""" Class: CSC648/848--01 Summer 2020, Team 2
Project: Create a WWW site to Buy/sell/rent apartments/housing exclusively
for SFSU students and faculty

Team Members: Raviteja Guttula, Swetha Govindu, Henry Meier, Kevin Zhou, 
Troy Turner, Ashwini Uthirakumar, Fiona Senchyna

File: ap/api/__init__.py

Description: Outlines all of the apis in the application.

"""

from flask import send_file, request
from app import app

from app.api.listing import listing_page
from app.api.messaging import messaging_page
from app.api.session import session_page
from app.api.user import user_page

app.register_blueprint(listing_page, url_prefix="/api/listings")
app.register_blueprint(messaging_page, url_prefix="/api/messages")
app.register_blueprint(session_page, url_prefix="/api/session")
app.register_blueprint(user_page, url_prefix="/api/user")

@app.route("/media")
def media():
    file_name = request.args.get("file_name", "")
    return send_file(f"../media/{file_name}")


@app.route("/")
def index():
    return "Hello, World!"
