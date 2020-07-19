import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask_marshmallow import Marshmallow


db = SQLAlchemy()
ma = Marshmallow()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ("email", "password", "name")

users_schema = UsersSchema()


def create_app():
    app = Flask(__name__)

    basedir = os.path.abspath(os.path.dirname(__file__))
    app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["SECRET_KEY"] = 'SuperSecretKey'

    db.init_app(app)

    login_manager = LoginManager()
    "The name of the view to redirect to when the user needs to log in(can be URL)"
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    "Callback used to reload the user object from the user_ID stored in the session"
    from .models import Users
    @login_manager.user_loader
    def load_user(user_id):
        return Users.query.get(int(user_id))

    
    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app