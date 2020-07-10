
from app.database import db, CRUDMixin 

class Media(db.Model):
    __tablename__ = 'listing_media'
    id = db.Column(db.Integer, primary_key=True)
    listing_id = db.Column(db.Integer, db.ForeignKey('listing.id'), nullable=False)
    media_path = db.Column(db.String(255), nullable=False)
    listing = db.relationship('Listing', back_populates="media")
    
    def __repr__(self):
        return '<Media #%s:%r>' % (self.id, self.media_path)