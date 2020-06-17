from faker import Faker
import click

from app.database import db
from app.api.about.model import User


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