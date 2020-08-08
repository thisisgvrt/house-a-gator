""" Class: CSC648/848--01 Summer 2020, Team 2
Project: Create a WWW site to Buy/sell/rent apartments/housing exclusively
for SFSU students and faculty

Team Members: Raviteja Guttula, Swetha Govindu, Henry Meier, Kevin Zhou, 
Troy Turner, Ashwini Uthirakumar, Fiona Senchyna

File: ap/api/session/__init__.py

Description: Contains methods and routes for user login and logout

"""

from flask import Flask, Blueprint, request, jsonify, json, session, Response
from app.api.user.model import User
from app.api.user import user_schema
from flask_login import (
    LoginManager,
    login_user,
    login_required,
    logout_user,
    current_user,
    AnonymousUserMixin,
)
from werkzeug.security import generate_password_hash, check_password_hash
from flask_api import status

session_page = Blueprint("session_page", __name__)


@session_page.route("/", methods=["POST"])
def create_session():
    "User login."
    email = request.json["email"]
    password = request.json["password"]
    remember = request.json["remember"]
    users = User.query.filter_by(email=email).first()
    if users is None or not check_password_hash(users.password, password):
        return jsonify({"400": "Not found"}), status.HTTP_400_BAD_REQUEST
    else:
        login_user(users, remember=remember)
        return "", status.HTTP_201_CREATED


@session_page.route("/", methods=["GET"])
def get_session():
    "User is already logged in."
    if current_user.is_authenticated:
        return user_schema.jsonify(current_user), status.HTTP_200_OK
    else:
        return "", status.HTTP_401_UNAUTHORIZED


@session_page.route("/", methods=["DELETE"])
@login_required
def delete_session():
    "User Logout."
    try:
        logout_user()
        return "", status.HTTP_204_NO_CONTENT
    except Exception as exception:
        return jsonify(exception), status.HTTP_500_INTERNAL_SERVER_ERROR
