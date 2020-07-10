
from app.database import db, CRUDMixin 

class Listing(CRUDMixin, db.Model):
    __tablename__ = 'listing'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    street_address = db.Column(db.String(50), nullable=False)
    city = db.Column(db.String(40), nullable=False)
    state = db.Column(db.String(20), nullable=False)
    zip_code = db.Column(db.String(20), nullable=False)
    country = db.Column(db.String(20), nullable=False)
    listing_price = db.Column(db.String(50), nullable=False)
    media = db.relationship('Media', back_populates="listing")
    
    def __repr__(self):
        return '<Listing #%s:%r>' % (self.id, self.title)