from flask import Flask, Blueprint, request, jsonify, json, session, Response
from flask_sqlalchemy import SQLAlchemy
from flask_login import (
    LoginManager,
    login_user,
    login_required,
    logout_user,
    current_user,
)
from werkzeug.security import generate_password_hash, check_password_hash
from app.api.user.models import Registration_record
from flask_marshmallow import Marshmallow
from flask_api import status

from app.database import db

user_page = Blueprint("user_page", __name__)

ma = Marshmallow()


class UserSchema(ma.Schema):
    class Meta:
        fields = ("id", "email", "first_name", "last_name")


user_schema = UserSchema()

"Route for Sign-Up"


@user_page.route("/", methods=["POST"])
def signup_post():
    email = request.json.get("email")
    password = request.json.get("password")
    first_name = request.json.get("first_name")
    last_name = request.json.get("last_name")

    users = Registration_record.query.filter_by(email=email).first()

    if users:
        return Response(
            "{'400':'Already exists'}", status=400, mimetype="application/json"
        )

    new_user = Registration_record(
        email=email,
        password=generate_password_hash(password, method="sha256"),
        first_name=first_name,
        last_name=last_name,
    )

    db.session.add(new_user)
    db.session.commit()

    return user_schema.jsonify(new_user), status.HTTP_201_CREATED
