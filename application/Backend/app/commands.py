from faker import Faker
from random import choice
import click

from app.database import db
from app.api.about.model import User
from app.api.listing.model import Listing, Media


def populate_team():
    team = [
        {
            'username': 'Raviteja Guttula',
            'description': 'I am a Graduate student at SFSU. I like exploring new technologies.',
            'hobbies': 'cooking, running and watching movies'
        }
    ]


@click.option('--num_users', default=5, help='Number of users.')
def populate_db(num_users):
    """Populates the database with seed data."""
    fake = Faker()
    users = []
    for _ in range(num_users):
        users.append(
            User(
                username=fake.user_name(),
                description=fake.text()
            )
        )
    for user in users:
        db.session.add(user)
    db.session.commit()

@click.option('--num_listings', default=5, help='Number of users.')
def populate_listings(num_listings):
    """Populates the database with seed data."""
    fake = Faker()
    listings = []
    for _ in range(num_listings):
        listings.append(
            Listing(
                title=fake.name(),
                street_address=fake.street_address(),
                city=fake.city(),
                state=fake.state(),
                zip_code=fake.postcode(),
                country=fake.country(),
                listing_price="0.0",
                media=[]
            )
        )
    for listing in listings:
        db.session.add(listing)
    db.session.commit()
    media = []
    for _ in range(num_listings):
        random_listing = choice(listings)
        media.append(
            Media(
                listing_id = random_listing.id,
                media_path = fake.street_address()
            )
        )
    for single_media in media:
        db.session.add(single_media)
    db.session.commit()

def create_db():
    """Creates the database."""
    db.create_all()


def drop_db():
    """Drops the database."""
    if click.confirm('Are you sure?', abort=True):
        db.drop_all()


def recreate_db():
    """Same as running drop_db() and create_db()."""
    drop_db()
    create_db()