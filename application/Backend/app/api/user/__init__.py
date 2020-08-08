""" Class: CSC648/848--01 Summer 2020, Team 2
Project: Create a WWW site to Buy/sell/rent apartments/housing exclusively
for SFSU students and faculty.

Team Members: Raviteja Guttula, Swetha Govindu, Henry Meier, Kevin Zhou, 
Troy Turner, Ashwini Uthirakumar, Fiona Senchyna

File: ap/api/user/__init__.py

Description: Contains method and route for user sign-up

"""

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
from app.api.user.model import User
from flask_marshmallow import Marshmallow
from flask_api import status

from app.database import db

user_page = Blueprint("user_page", __name__)

ma = Marshmallow()


class UserSchema(ma.Schema):
    "Serializes User model."
    class Meta:
        fields = ("id", "email", "first_name", "last_name")


user_schema = UserSchema()


@user_page.route("/", methods=["POST"])
def signup_post():
    "Route for Sign-Up."
    email = request.json.get("email")
    password = request.json.get("password")
    first_name = request.json.get("first_name")
    last_name = request.json.get("last_name")

    users = User.query.filter_by(email=email).first()

    if users:
        return Response(
            "{'400':'Already exists'}", status=400, mimetype="application/json"
        )

    new_user = User(
        email=email,
        password=generate_password_hash(password, method="sha256"),
        first_name=first_name,
        last_name=last_name,
    )

    db.session.add(new_user)
    db.session.commit()

    return user_schema.jsonify(new_user), status.HTTP_201_CREATED
