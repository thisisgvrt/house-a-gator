from flask import send_file, request
from app import app

from app.api.listing import listing_page
from app.api.messaging import messaging_page
from app.api.session import session_page
from app.api.user import user_page

app.register_blueprint(listing_page, url_prefix="/api/listings")
app.register_blueprint(messaging_page, url_prefix="/api/messages")
app.register_blueprint(session_page, url_prefix="/api/session")
app.register_blueprint(user_page, url_prefix="/api/user")

@app.route("/media")
def media():
    file_name = request.args.get("file_name", "")
    return send_file(f"../media/{file_name}")


@app.route("/")
def index():
    return "Hello, World!"
