from flask import Flask
from flask_cors import CORS
from app.database import db
from flask_marshmallow import Marshmallow

app = Flask(__name__)
CORS(app)
ma = Marshmallow(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:password@database:3306/house-a-gator'
db.init_app(app)

from app.commands import create_db, drop_db, populate_db, recreate_db, populate_listings
for command in [create_db, drop_db, populate_db, recreate_db, populate_listings]:
    app.cli.command()(command)

from app import api
