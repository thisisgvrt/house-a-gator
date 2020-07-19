from flask import Blueprint, render_template, redirect, url_for, request, jsonify, json, session
from werkzeug.security import generate_password_hash, check_password_hash
from .models import Users
from flask_login import login_user, logout_user, login_required
from . import db

auth = Blueprint('auth', __name__)



@auth.route('/login', methods=['GET','POST'])
def login_post():
    email = request.json['email']
    password = request.json['password']
    
    "Remember me checkbox"
    #remember = True if request.json['remember'] else False

    users = Users.query.filter_by(email=email).first()

    if users is not None and check_password_hash(users.password,password):

        return jsonify({'logged_in' : False})

    

    login_user(users)
    "To be used if remember me option is enabled"
    #login_user(users, remember=remember)

    return jsonify({'logged_in': True})




@auth.route('/signup', methods=['POST'])
def signup_post():
    email = request.args.get('email')
    name = request.args.get('name')
    password = request.args.get('password')

    users = Users.query.filter_by(email=email).first()

    "Check if user already exists"
    if users:
        return jsonify({'user_added': False})

    "Add a new record if the user doesn't exist"
    new_users = Users(email=email, name=name, password=generate_password_hash(password, method='sha256'))

    db.session.add(new_users)
    db.session.commit()

    return jsonify({'user_added': True})
    

@auth.route('/logout', methods=['GET'])
@login_required
def logout():
    logout_user()
    return jsonify({'logged_out' : True})
    

