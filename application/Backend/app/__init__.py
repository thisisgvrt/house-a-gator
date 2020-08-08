""" Class: CSC648/848--01 Summer 2020, Team 2
Project: Create a WWW site to Buy/sell/rent apartments/housing exclusively
for SFSU students and faculty

Team Members: Raviteja Guttula, Swetha Govindu, Henry Meier, Kevin Zhou, 
Troy Turner, Ashwini Uthirakumar, Fiona Senchyna

File: ap/__init__.py

Description: Entry point for the backend of the application.  Configures the app to the database
and checks if there is a current session with the user. 

"""

import datetime
from flask import Flask, Response
from flask_cors import CORS
from app.database import db
from flask_marshmallow import Marshmallow
from flask_login import LoginManager




app = Flask(__name__)
app.url_map.strict_slashes = False
CORS(app, supports_credentials=True)
ma = Marshmallow(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:password@database:3306/house-a-gator'


app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = "SuperSecretKey"
app.config["REMEMBER_COOKIE_DURATION"] = datetime.timedelta(minutes=1)

db.init_app(app)
login_manager = LoginManager()

"Todo"
"The name of the view to redirect to when the user needs to log in(can be URL)"
login_manager.login_view = "login"
login_manager.init_app(app)


"Callback used to reload the user object from the user_ID stored in the session"
"determines whether or not the user is authorized to view the page (logged in)"
from app.api.user.model import User

"""Check if user is logged-in upon page load."""


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


from app.commands import create_db, drop_db, populate_users, recreate_db, populate_listings

for command in [create_db, drop_db, populate_users, recreate_db, populate_listings]:
    app.cli.command()(command)

from app import api
