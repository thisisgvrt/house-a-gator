from flask import send_file, request
from app import app

from app.api.about import about_page
from app.api.listing import listing_page

app.register_blueprint(about_page, url_prefix='/api/about')
app.register_blueprint(listing_page, url_prefix='/api/listings')

@app.route('/media')
def media():
    file_name = request.args.get('file_name','')
    return send_file(f"../media/{file_name}")

@app.route('/')
def index():
    return "Hello, World!"