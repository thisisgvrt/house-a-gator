
from app.database import db, CRUDMixin 
from app.user import Registration_record

class ListingStatus(db.Model):
    __tablename__ = 'listing_status'
    id = db.Column(db.Integer, primary_key=True)
    status_string = db.Column(db.String(10), nullable=False)
    listing = db.relationship('Listing', back_populates="lstatus")
    def __repr__(self):
        return '<ListingStatus #%s:%r>' % (self.id, self.status_string)
class ListingType(db.Model):
    __tablename__ = 'listing_type'
    id = db.Column(db.Integer, primary_key=True)
    type_string = db.Column(db.String(20), nullable=False)
    listing = db.relationship('Listing', back_populates="ltype")
    def __repr__(self):
        return '<ListingType #%s:%r>' % (self.id, self.type_string)

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
    building_number = db.Column(db.String(10), nullable=False) #t
    apartment = db.Column(db.String(50), nullable=False) #t
    street_name = db.Column(db.String(50), nullable=False) 
    city = db.Column(db.String(40), nullable=False) #t
    state = db.Column(db.String(20), nullable=False) #
    zip_code = db.Column(db.String(20), nullable=False)
    country = db.Column(db.String(30), nullable=False)
    listing_price = db.Column(db.Integer, nullable=False)
    
    media = db.relationship('Media', back_populates="listing")
    
    listing_status = db.Column(db.Integer, db.ForeignKey('listing_status.id'), nullable=False)
    lstatus = db.relationship('ListingStatus', back_populates="listing")
    
    listing_user = db.Column(db.Integer, db.ForeignKey('registration_record.id'), nullable=False)
    luser = db.relationship('Registration_Record', back_populates="listing")
    
    listing_views = db.Column(db.Integer, nullable=False)
    is_furnished = db.Column(db.Boolean, nullable=False)
    square_footage = db.Column(db.Integer, nullable=False)
    num_baths = db.Column(db.SmallInteger, nullable=False)
    num_beds = db.Column(db.SmallInteger, nullable=False)
    num_parking_spots = db.Column(db.SmallInteger, nullable=False)
    pet_policy = db.Column(db.Boolean, nullable=True)
    smoking_policy = db.Column(db.Boolean, nullable=False)

    listing_user = db.Column(db.Integer, db.ForeignKey('listing_status.id'), nullable=False)
    
    def __repr__(self):
        return '<Listing #%s:%r>' % (self.id, self.title)

