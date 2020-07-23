from flask_login import UserMixin
#from app.api.login import db, ma
from app.database import db


class Registration_record(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(30), nullable=False)
    password = db.Column(db.String(100))
    first_name = db.Column(db.String(20))
    last_name = db.Column(db.String(20))

    def __init__(self, email, password, first_name, last_name):
        self.email = email
        self.password = password
        self.first_name = first_name
        self.last_name = last_name
        
        
    def __repr__(self):
       return '<User %r>' % self.first_name








"""sumary_line
from practice import db
from practice import create_app
db.create_all(app=create_app())
"""
