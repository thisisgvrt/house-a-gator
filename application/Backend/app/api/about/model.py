
from app.database import db, CRUDMixin 

class User(CRUDMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False, unique=True)
    description = db.Column(db.String(20), nullable=False, unique=True)
    
    def __repr__(self):
        return '<User #%s:%r>' % (self.id, self.username)