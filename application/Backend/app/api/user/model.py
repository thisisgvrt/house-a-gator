""" Class: CSC648/848--01 Summer 2020, Team 2
Project: Create a WWW site to Buy/sell/rent apartments/housing exclusively
for SFSU students and faculty

Team Members: Raviteja Guttula, Swetha Govindu, Henry Meier, Kevin Zhou, 
Troy Turner, Ashwini Uthirakumar, Fiona Senchyna

File: ap/api/user/model.py

Description: Contains model for the user table in the database

"""

from flask_login import UserMixin
from app.database import db, CRUDMixin


class User(UserMixin, db.Model):
    "Contains information related to users."
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(255))
    first_name = db.Column(db.String(20))
    last_name = db.Column(db.String(20))
    listing = db.relationship('Listing', back_populates="luser")

    def __init__(self, email, password, first_name, last_name):
        self.email = email
        self.password = password
        self.first_name = first_name
        self.last_name = last_name

    def __repr__(self):
        return "<User %r>" % self.first_name
