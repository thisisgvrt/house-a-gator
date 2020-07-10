from flask import Flask
from app.database import db
from flask_marshmallow import Marshmallow

app = Flask(__name__)
ma = Marshmallow(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db.init_app(app)

from app.commands import create_db, drop_db, populate_db, recreate_db, populate_listings
for command in [create_db, drop_db, populate_db, recreate_db, populate_listings]:
    app.cli.command()(command)

from app import api
