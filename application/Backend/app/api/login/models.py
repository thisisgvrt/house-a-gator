from flask_login import UserMixin
from . import db

class Users(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(100))
    name = db.Column(db.String(100))

    def __init__(self, email, password, name):
        self.email = email
        self.password = password
        self.name = name
        
        
    def __repr__(self):
       return '<User %r>' % self.name



"""db.create_all(app=create_app())"""
