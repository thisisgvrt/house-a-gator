from flask import Flask
from app.database import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db.init_app(app)

from app.commands import create_db, drop_db, populate_db, recreate_db
for command in [create_db, drop_db, populate_db, recreate_db]:
    app.cli.command()(command)

from app import api
