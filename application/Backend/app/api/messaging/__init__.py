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

from app.api.user import user_schema

messaging_page = Blueprint("messaging_page", __name__)
ma = Marshmallow()

class MessageSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Message
        fields = ("id", "message_text")

message_schema = MessageSchema()
messages_schema = MessageSchema(many=True)

@messaging_page.route("/", methods=["POST"])
@login_required
def post_message():
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
    return messages_schema.jsonify(Message.query.filter(Message.receiver_id == current_user.id).all()), status.HTTP_200_OK
