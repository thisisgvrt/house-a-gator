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


@click.option("--num_listings", default=14, help="Number of listings.")
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

    listings = []
    titles_list = [
        "Apartment with a beach view",
        "Vacation home",
        "Pool house",
        "Glass building",
        "Blue lake",
        "Snow house",
        "Colored aparments",
        "Amazing deal for an apartment",
    ]
    description_list = [
        "Amazing view with good sceneries around",
        "A refreshing view to wake up to",
        "Close to all the essential services",
        "Good amenities and lake view.",
    ]
    verified_status_id = list(filter(lambda ltype: ltype.status_string == "Verified", listing_statuses))[0].id
    for _ in range(num_listings):
        listings.append(
            Listing(
                title=choice(titles_list),
                description=choice(description_list),
                building_number=choice(["#", "No.", ""]) + str(randint(0, 100)),
                apartment=choice(["Sofi", "Aragon", "Northpoint", "Southpoint", ""]),
                street_name=fake.street_name(),
                city=choice(["San Francisco", "San Jose", "Sunnywale"]),
                state="California",
                zip_code=fake.zipcode(),
                country="United States of America",
                listing_price=randint(10, 50) * choice([50, 100, 200, 300]),
                listing_status=verified_status_id,
                listing_type=(choice(listing_types)).id,
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
    media_list_obj = [
        {"title": "View from the ranch", "image_name": "Alone-house.jpg"},
        {"title": "View from across the street", "image_name": "Apartments.jpg"},
        {"title": "View from the garden", "image_name": "Big-building.jpg"},
        {"title": "View across the street", "image_name": "Colored-apartments.jpg",},
        {"title": "View with chimney", "image_name": "Cottage.jpg"},
        {"title": "View with pool", "image_name": "Forest-house.jpg"},
        {"title": "View from garden with snow", "image_name": "Glass-building.jpg"},
        {"title": "View with the pool", "image_name": "House-with-pool.jpg"},
        {"title": "View with mountains", "image_name": "Infinity-pool.jpg"},
        {"title": "View across the lake", "image_name": "Lake-house.jpg"},
        {"title": "House with pumpkins", "image_name": "Single-house.jpg"},
        {"title": "House across the lake", "image_name": "Snow-house.jpg"},
        {"title": "House with small windows", "image_name": "White-house.jpg"},
        {"title": "Good view", "image_name": "good-house.jpg"},
    ]
    for idx, media_obj in enumerate(media_list_obj):
        random_listing = listings[idx]
        media = Media(
            listing_id=random_listing.id,
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
