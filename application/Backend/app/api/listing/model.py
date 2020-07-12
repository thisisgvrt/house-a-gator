
from app.database import db, CRUDMixin 

class ListingStatus(db.Model):
    __tablename__ = 'listing_status'
    id = db.Column(db.Integer, primary_key=True)
    status_string = db.Column(db.String(10), nullable=False)
    listing = db.relationship('Listing', back_populates="listing_status")

class HouseType(db.Model):
    __tablename__ = 'house_type'
    id = db.Column(db.Integer, primary_key=True)
    house_type_string = db.Column(db.String(10), nullable=False)
    listing = db.relationship('Listing', back_populates="house_type")

class Media(db.Model):
    __tablename__ = 'listing_media'
    id = db.Column(db.Integer, primary_key=True)
    listing_id = db.Column(db.Integer, db.ForeignKey('listing.id'), nullable=False)
    media_title = db.Column(db.String(50), nullable=False)
    media_path = db.Column(db.String(255), nullable=False)
    listing = db.relationship('Listing', back_populates="media")

class Listing(CRUDMixin, db.Model):
    __tablename__ = 'listing'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    building_number = db.Column(db.String(10), nullable=False)
    apartment = db.Column(db.String(50), nullable=False)
    street_name = db.Column(db.String(50), nullable=False)
    city = db.Column(db.String(40), nullable=False)
    state = db.Column(db.String(20), nullable=False)
    zip_code = db.Column(db.String(20), nullable=False)
    country = db.Column(db.String(20), nullable=False)
    listing_price = db.Column(db.Integer, nullable=False)
    media = db.relationship('Media', back_populates="listing")
    listing_status = db.Column(db.Integer, db.ForeignKey('listing_status.id'), nullable=False)
    hstatus = db.relationship('ListingStatus', back_populates="listing")
    house_type = db.Column(db.Integer, db.ForeignKey('house_type.id'), nullable=False)
    htype = db.relationship('HouseType', back_populates="listing")
    listing_views = db.Column(db.Integer, nullable=False)
    is_furnished = db.Column(db.Boolean, nullable=False)
    square_footage = db.Column(db.Integer, nullable=False)
    num_baths = db.Column(db.SmallInteger, nullable=False)
    num_beds = db.Column(db.SmallInteger, nullable=False)
    num_parking_spots = db.Column(db.SmallInteger, nullable=False)
    pet_policy = db.Column(db.Boolean, nullable=False)
    smoking_policy = db.Column(db.Boolean, nullable=False)
    
    def __repr__(self):
        return '<Listing #%s:%r>' % (self.id, self.title)