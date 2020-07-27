from flask_login import UserMixin
from app.database import db, CRUDMixin


class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(255))
    first_name = db.Column(db.String(20))
    last_name = db.Column(db.String(20))

    def __init__(self, email, password, first_name, last_name):
        self.email = email
        self.password = password
        self.first_name = first_name
        self.last_name = last_name

    def __repr__(self):
        return "<User %r>" % self.first_name
