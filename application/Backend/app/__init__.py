import datetime
from flask import Flask, Response
from flask_cors import CORS
from app.database import db
from flask_marshmallow import Marshmallow
from flask_login import LoginManager

app = Flask(__name__)
CORS(app)
ma = Marshmallow(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:password@database:3306/house-a-gator'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = 'SuperSecretKey'
app.config['REMEMBER_COOKIE_DURATION'] = datetime.timedelta(minutes=1)

db.init_app(app)


login_manager = LoginManager()

"Todo"
"The name of the view to redirect to when the user needs to log in(can be URL)"
login_manager.login_view = 'login'
login_manager.init_app(app)



from app.commands import create_db, drop_db, populate_db, recreate_db, populate_listings
for command in [create_db, drop_db, populate_db, recreate_db, populate_listings]:
    app.cli.command()(command)

from app import api
