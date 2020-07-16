from faker import Faker
from random import choice, randint
import click

from app.database import db
from app.api.about.model import User
from app.api.listing.model import Listing, Media, ListingType, ListingStatus


def populate_team():
    team = [
        {
            "username": "Raviteja Guttula",
            "description": "I am a Graduate student at SFSU. I like exploring new technologies.",
            "hobbies": "cooking, running and watching movies",
        }
    ]


@click.option("--num_users", default=5, help="Number of users.")
def populate_db(num_users):
    """Populates the database with seed data."""
    fake = Faker()
    users = []
    for _ in range(num_users):
        users.append(User(username=fake.user_name(), description=fake.text()))
    for user in users:
        db.session.add(user)
    db.session.commit()


@click.option("--num_listings", default=16, help="Number of listings.")
def populate_listings(num_listings):
    """Populates the database with seed data."""
    fake = Faker()

    listing_types = []
    listing_types_str = ["Houses", "Condos", "Apartments", "Town Houses"]
    for listing_type_str in listing_types_str:
        listing_type = ListingType(type_string=listing_type_str)
        listing_types.append(listing_type)
        db.session.add(listing_type)
    db.session.commit()

    listing_statuses = []
    listing_statuses_str = ["Posted", "Verified", "Rejected", "Occupied"]
    for listing_status_str in listing_statuses_str:
        listing_status = ListingStatus(status_string=listing_status_str)
        listing_statuses.append(listing_status)
        db.session.add(listing_status)
    db.session.commit()

    listing_info = [
        {
            "title": "Isolated House",
            "description": "House with a nice garden around",
            "media_obj": {"title": "View from the ranch", "image_name": "Alone-house.jpg"},
            "house_type": 1
        },
        {
            "title": "Colorful apartment",
            "description": "Apartments with balcony and blue borders",
            "media_obj": {"title": "View from across the street", "image_name": "Apartments.jpg"},
            "house_type": 3
        },
        {
            "title": "Amazing palace",
            "description": "Fully furnished palace",
            "media_obj": {"title": "View from the garden", "image_name": "Big-building.jpg"},
            "house_type": 1
        },
        {
            "title": "Beach side house",
            "description": "A safe home with amazing view of a beach",
            "media_obj": {"title": "View across the street", "image_name": "Blue-brown.jpg"},
            "house_type": 1
        },
        {
            "title": "Victorian house",
            "description": "Victorian houses with funky colors",
            "media_obj": {"title": "View across the street", "image_name": "Colored-apartments.jpg"},
            "house_type": 1
        },
        {
            "title": "Serene country-side cottage",
            "description": "Cozy cottage on a hill side",
            "media_obj": {"title": "View with chimney", "image_name": "Cottage.jpg"},
            "house_type": 1
        },
        {
            "title": "House surrounded by plants",
            "description": "House tucked inside a forest",
            "media_obj": {"title": "View with pool", "image_name": "Forest-house.jpg"},
            "house_type": 1
        },
        {
            "title": "House with big glass windows",
            "description": "Futuristic glass walled house",
            "media_obj": {"title": "View from garden with snow", "image_name": "Glass-building.jpg"},
            "house_type": 1
        },
        {
            "title": "House on a lake between mountains",
            "description": "Floating house on the lake, with view of mountain",
            "media_obj": {"title": "Good view", "image_name": "good-house.jpg"},
            "house_type": 1
        },
        {
            "title": "House with a nice pool",
            "description": "House with a nice garden and a pool",
            "media_obj": {"title": "View with the pool", "image_name": "House-with-pool.jpg"},
            "house_type": 1
        },
        {
            "title": "House with a hill-side view",
            "description": "House on a hill side with a nice pool",
            "media_obj": {"title": "View with mountains", "image_name": "Infinity-pool.jpg"},
            "house_type": 1
        },
        {
            "title": "House on a lake",
            "description": "Lake house, ideal for horror movies",
            "media_obj": {"title": "View across the lake", "image_name": "Lake-house.jpg"},
            "house_type": 1
        },
        {
            "title": "Simple house",
            "description": "Simple house, ready to move in",
            "media_obj": {"title": "House with pumpkins", "image_name": "Single-house.jpg"},
            "house_type": 1
        },
        {
            "title": "Cozy house beside a lake",
            "description": "Cozy house in a cold climate beside the lake",
            "media_obj": {"title": "House across the lake", "image_name": "Snow-house.jpg"},
            "house_type": 1
        },
        {
            "title": "Moroccan house",
            "description": "Clean and simple architecture",
            "media_obj": {"title": "House with small windows", "image_name": "White-house.jpg"},
            "house_type": 1
        },
        {
            "title": "Condo on the corner",
            "description": "On the corner, closer to everything",
            "media_obj": {"title": "Condo", "image_name": "condo.jpg"},
            "house_type": 2
        }
    ]

    listings = []
    verified_status_id = list(filter(lambda ltype: ltype.status_string == "Verified", listing_statuses))[0].id
    for idx in range(num_listings):
        listings.append(
            Listing(
                title=listing_info[idx]["title"],
                description=listing_info[idx]["description"],
                building_number=choice(["#", "No.", ""]) + str(randint(0, 100)),
                apartment=choice(["Sofi", "Aragon", "Northpoint", "Southpoint", ""]),
                street_name=fake.street_name(),
                city=choice(["San Francisco", "San Jose", "Sunnywale"]),
                state="California",
                zip_code=fake.zipcode(),
                country="United States of America",
                listing_price=randint(10, 50) * choice([50, 100, 200, 300]),
                listing_status=verified_status_id,
                listing_type=listing_info[idx]["house_type"],
                listing_views=0,
                is_furnished=choice([False, True]),
                square_footage=choice([10, 30, 40]) * choice([50, 75, 100]),
                num_baths=randint(1, 4),
                num_beds=randint(1, 4),
                num_parking_spots=randint(1, 3),
                pet_policy=choice([False, True]),
                smoking_policy=choice([False, True]),
                media=[],
            )
        )
    for listing in listings:
        db.session.add(listing)
    db.session.commit()

    media_list = []
    
    for idx in range(num_listings):
        media_obj = listing_info[idx]["media_obj"]
        media = Media(
            listing_id=(idx+1),
            media_title=media_obj["title"],
            media_path=media_obj["image_name"],
        )
        media_list.append(media)
        db.session.add(media)
    db.session.commit()


def create_db():
    """Creates the database."""
    db.create_all()


def drop_db():
    """Drops the database."""
    if click.confirm("Are you sure?", abort=True):
        db.drop_all()


def recreate_db():
    """Same as running drop_db() and create_db()."""
    drop_db()
    create_db()
