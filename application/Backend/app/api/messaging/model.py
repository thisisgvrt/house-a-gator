""" Class: CSC648/848--01 Summer 2020, Team 2
Project: Create a WWW site to Buy/sell/rent apartments/housing exclusively
for SFSU students and faculty.

Team Members: Raviteja Guttula, Swetha Govindu, Henry Meier, Kevin Zhou, 
Troy Turner, Ashwini Uthirakumar, Fiona Senchyna

File: ap/api/messaging/model.py

Description:  Contains model for the message table in the database

"""

from app.database import db, CRUDMixin
from sqlalchemy.sql import func

from app.api.user.model import User

class Message(CRUDMixin, db.Model):
    "Lists messages exchanged between users."
    __tablename__ = "message"
    id = db.Column(db.Integer, primary_key=True)
    
    sender_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    sender = db.relationship("User", foreign_keys=[sender_id])
    
    receiver_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    receiver = db.relationship("User", foreign_keys=[receiver_id])
    
    listing_id = db.Column(db.Integer, db.ForeignKey("listing.id"), nullable=False)
    listing = db.relationship("Listing")
    
    timestamp = db.Column(db.DateTime, server_default=func.now())
    message_text = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return "<Message #%s:%r:%r:%r>" % (self.id, self.message_text, self.sender, self.listing)
