from flask import Flask, Blueprint, request, jsonify, json, session, Response
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, login_user, login_required, logout_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from app.api.login.models import Registration_record
from flask_marshmallow import Marshmallow
from app.database import db

login_page = Blueprint('login_page', __name__)


ma = Marshmallow()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ("email", "password", "first_name","last_name")

        
users_schema = UsersSchema()



"Route for Login/Sign-in"

@login_page.route('/login', methods=['GET','POST'])
def login_post():
    email = request.json['email']
    password = request.json['password']
    
    remember = True if request.json['remember'] else False

    users = Registration_record.query.filter_by(email=email).first()

    if users is None or not check_password_hash(users.password,password):
    
        result = users_schema.dumps(users)
        #return jsonify(result)
        return Response("{'400':'Not found'}", status=400, mimetype='application/json')
 

    login_user(users, remember=remember)

    return Response("{'200':'ok'}", status=200, mimetype='application/json')


"Route for Sign-Up"

@login_page.route('/signup', methods=['POST','PUT'])
def signup_post():
    email = request.args.get('email')
    password = request.args.get('password')
    first_name = request.args.get('first_name')
    last_name = request.args.get('last_name')

    users = Registration_record.query.filter_by(email=email).first()

    if users:
        return Response("{'400':'Already exists'}", status=400, mimetype='application/json')


    new_users = Registration_record(email=email, password=generate_password_hash(password, method='sha256'), first_name=first_name, last_name=last_name)

    db.session.add(new_users)
    db.session.commit()

    return Response("{'200':'ok'}", status=200, mimetype='application/json')
    

"Route for Logout"
@login_page.route('/logout', methods=['GET'])
@login_required
def logout(): 
    try:
        logout_user()
        return Response("{'200':'ok'}", status=200, mimetype='application/json')
        
    except:
        
        return Response("{'404':'Not found'}", status=404, mimetype='application/json')
    