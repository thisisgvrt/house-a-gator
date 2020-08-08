""" Class: CSC648/848--01 Summer 2020, Team 2
Project: Create a WWW site to Buy/sell/rent apartments/housing exclusively
for SFSU students and faculty.

Team Members: Raviteja Guttula, Swetha Govindu, Henry Meier, Kevin Zhou, 
Troy Turner, Ashwini Uthirakumar, Fiona Senchyna

File: ap/api/messaging/__init__.py

Description:  Contains methods for message creation and sending

"""

from flask import Blueprint, request
from flask_marshmallow import Marshmallow
from flask_login import (
    login_required,
    current_user,
)
from flask_api import status

from app.database import db

from app.api.user.model import User
from app.api.messaging.model import Message
from app.api.listing.model import Listing

from app.api.user import user_schema


messaging_page = Blueprint("messaging_page", __name__)
ma = Marshmallow()

class UserSchema(ma.SQLAlchemySchema):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name')

class ListingSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Listing
        fields = ('id', 'title')

class MessageSchema(ma.SQLAlchemySchema):
    "Serializes Message model."
    sender = ma.Nested(UserSchema)
    listing = ma.Nested(ListingSchema)
    class Meta:
        model = Message
        fields = ("id", "message_text", "listing_id", "timestamp", "listing", "sender")

message_schema = MessageSchema()
messages_schema = MessageSchema(many=True)

@messaging_page.route("/", methods=["POST"])
@login_required
def post_message():
    "Post a message."
    message_text = request.json["message_text"]
    receiver_id = request.json["receiver_id"]
    listing_id = request.json["listing_id"]
    message = Message(sender_id=current_user.id, receiver_id=receiver_id,listing_id = listing_id, message_text=message_text)
    db.session.add(message)
    db.session.commit()
    return message_schema.jsonify(message), status.HTTP_201_CREATED

@messaging_page.route("/", methods=["GET"])
@login_required
def get_messages_route():
    "Get all messages sent to a specified user."
    print(Message.query.filter(Message.receiver_id == current_user.id).all())
    return messages_schema.jsonify(Message.query.filter(Message.receiver_id == current_user.id).all()), status.HTTP_200_OK
